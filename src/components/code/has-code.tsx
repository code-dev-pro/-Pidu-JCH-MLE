import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authenticateCode from '@/services/service-auth'
import useAuthStore from '@/store/tracking/auth'
import useLevelStore from '@/store/tracking/level-progress'
import useProgressStore from '@/store/tracking/exercise-progress'
import useTotalQuizStore from '@/store/tracking/total-answer'
import { API_URL } from '@/config/api'
import { ROUTES } from '@/const'
import useSound from 'use-sound'
import useExerciseStore from '@/store/data/exercise'
import useQuizStore from '@/store/tracking/answer'
import { Answer } from '@/store/tracking/answer'

interface ExerciseData {
  exercise_id: number
  question_id: number
  iscorrect: boolean
}

export const HasCode = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setuser_id } = useAuthStore()
  const { setLevel } = useLevelStore()
  const { setProgress } = useProgressStore()
  const { setAnswer } = useQuizStore()
  const { addTotalAnswer } = useTotalQuizStore()
  const { exercises } = useExerciseStore()
  const navigate = useNavigate()
  const { resetAnswers } = useQuizStore()
  const [play] = useSound('/sound/click.mp3', { volume: 0.25 })

  const handleClick = () => {
    play()
  }

  const handleAuthCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userCode = inputRef.current?.value
    if (!userCode) {
      setMessage('Le code ne peut pas être vide.')
      return
    }

    setIsLoading(true)

    const fetchUserData = async (user_id: number) => {
      try {
        const response = await fetch(`${API_URL}/level/${user_id}`)
        const data = await response.json()

        if (data && data.length > 0) {
          // ✅ Trier les données pour identifier la dernière réponse
          const sortedData = data.sort(
            (a: ExerciseData, b: ExerciseData) =>
              b.exercise_id - a.exercise_id || b.question_id - a.question_id
          )

          const { exercise_id, question_id } = sortedData[0]
          const currentExercise = exercises[exercise_id]
          const nextExercise = exercises[exercise_id + 1]

          resetAnswers()

          // Ne garder que les réponses de l'exercice en cours
          data
            .filter((answer: Answer) => answer.exercise_id === exercise_id)
            .forEach((answer: Answer) => {
              setAnswer(
                answer.user_id,
                answer.exercise_id,
                answer.question_id,
                answer.selected_choice,
                answer.iscorrect
              )
            })

          if (question_id >= 5 && nextExercise) {
            setLevel(exercise_id + 1)
            const total = nextExercise.questions.length
            setProgress(1, total)
          } else if (currentExercise) {
            setLevel(exercise_id)
            const total = currentExercise.questions.length
            setProgress(question_id + 1, total)
          }

          addTotalAnswer(data)
        } else {
          console.log('Pas de données disponibles')
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error)
      }
    }

    try {
      const response = await authenticateCode(userCode)
      console.log("Réponse de l'API :", response)
      if (response.success && typeof response.user_id === 'number' && response.user_id > 0) {
        setuser_id(response.user_id)
        await fetchUserData(response.user_id)
        setMessage('Code valide ✅')

        // Attendre que l'utilisateur voie le message avant de naviguer
        setTimeout(() => {
          setIsLoading(false) // Désactiver le chargement
          navigate(`/${ROUTES.LEVEL}`)
        }, 1000)
      } else {
        setMessage('Code invalide ❌')

        // Attendre un peu avant de réinitialiser le formulaire
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.value = ''
          }
          setMessage('')
          setIsLoading(false) // Désactiver le chargement après réinitialisation
        }, 1000)
      }
    } catch (error) {
      console.error('Erreur serveur:', error)
      setMessage('Erreur de connexion au serveur ❌')

      // Attendre un peu avant de réinitialiser le formulaire
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.value = ''
        }
        setMessage('')
        setIsLoading(false) // Désactiver le chargement après réinitialisation
      }, 1000)
    }
  }

  return (
    <>
      <div className="flex flex-col mt-2">
        <h2 className="text-xl font-semibold text-black">Entrez votre code</h2>
        <form onSubmit={handleAuthCode} className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Code utilisateur"
            ref={inputRef}
            required
            className="border p-2 rounded-md"
          />
          <button
            onClick={handleClick}
            type="submit"
            className="px-4 py-2 rounded-4xl bg-[#19C472] text-white cursor-pointer border-b-6 border-black/20 w-40 
            hover:scale-110 transition-transform duration-300"
            disabled={isLoading} // Désactiver le bouton pendant le chargement
          >
            {isLoading ? 'Chargement...' : 'Valider'}
          </button>
        </form>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </>
  )
}
