import saveCodeToDatabase from '@/services/service-code'
import generateCode from '@/utils'
import authenticateCode from '@/services/service-auth'
import useAuthStore from '@/store/tracking/tracker-auth'
import useLevelStore from '@/store/level-progress'
import useProgressStore from '@/store/tracking/tracker-progress'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Answer } from '@/store/tracking/tracker-answer'
import { API_URL } from '@/config/api'
import { ROUTES } from '@/const'

export const CodeGenerator = () => {
  const codeRef = useRef<HTMLParagraphElement>(null)
  const hasGenerated = useRef(false)
  const [generatedCode, setGeneratedCode] = useState('')
  const navigate = useNavigate()

  const { setUserId } = useAuthStore()
  const { setLevel } = useLevelStore()
  const { setProgress } = useProgressStore()
  const { addTotalAnswer } = useTotalQuizStore()

  const fetchUserData = async (userId: number) => {
    try {
      const response = await fetch(`${API_URL}/level/${userId}`)
      const data: Answer[] = await response.json()

      if (data.length > 0) {
        const sortedData = data.sort(
          (a, b) => b.exerciseId - a.exerciseId || b.questionId - a.questionId
        )

        const { exerciseId, questionId } = sortedData[0]

        if (questionId >= 5) {
          setLevel(exerciseId + 1)
          setProgress(1)
        } else {
          setLevel(exerciseId)
          setProgress(questionId + 1)
        }

        addTotalAnswer(data)
      }
    } catch (error) {
      console.error('Erreur récupération données utilisateur:', error)
    }
  }
  const handleGenerateCode = async () => {
    const newCode = generateCode()
    setGeneratedCode(newCode)
    if (codeRef.current) codeRef.current.textContent = newCode
    await saveCodeToDatabase(newCode)
  }

  useEffect(() => {
    if (!hasGenerated.current) {
      handleGenerateCode()
      hasGenerated.current = true
    }
  }, [])

  const handleClick = async () => {
    try {
      const response = await authenticateCode(generatedCode)

      if (response.success && typeof response.userId === 'number' && response.userId > 0) {
        setUserId(response.userId)
        await fetchUserData(response.userId)
        navigate(`/${ROUTES.LEVEL}`)
      } else {
        alert('Code invalide ❌')
      }
    } catch (error) {
      console.error('Erreur serveur:', error)
      alert('Erreur de connexion au serveur ❌')
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-xl text-black font-semibold">Code utilisateur :</h2>
      <p ref={codeRef} className="text-lg font-bold text-red-500"></p>

      <button
        onClick={handleClick}
        className="mt-2 px-4 py-2 bg-[#19C472] text-white rounded-4xl cursor-pointer border-b-6 border-black/20 w-40 hover:scale-110 transition-transform duration-300"
      >
        Démarrer
      </button>
    </div>
  )
}
