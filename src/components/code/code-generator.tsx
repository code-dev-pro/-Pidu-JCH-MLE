import saveCodeToDatabase from '@/services/service-code'
import generateCode from '@/utils/utils-code'
import authenticateCode from '@/services/service-auth'
import useAuthStore from '@/store/tracking/auth'
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/const'
import useSound from 'use-sound'

export const CodeGenerator = () => {
  const codeRef = useRef<HTMLParagraphElement>(null)
  const hasGenerated = useRef(false)
  const [generatedCode, setGeneratedCode] = useState('')
  const navigate = useNavigate()
  const { setuser_id } = useAuthStore()
  const [play] = useSound('/sound/click.mp3', { volume: 0.25 })

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

      if (response.success && typeof response.user_id === 'number' && response.user_id > 0) {
        setuser_id(response.user_id)
        navigate(`/${ROUTES.LEVEL}`)
      } else {
        alert('Code invalide ❌')
      }
    } catch (error) {
      console.error('Erreur serveur:', error)
      alert('Erreur de connexion au serveur ❌')
    }

    {
      play()
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
