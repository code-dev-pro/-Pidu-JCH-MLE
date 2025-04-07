import Title from '@/components/title'
import CustomButton from '@/components/buttonlong'
import { useNavigate } from 'react-router-dom'
import useExerciseStore from '@/store/data/exercise'
import { useEffect, useRef, useState } from 'react'
import { CodeGenerator } from '@/components/code-generator'
import authenticateCode from '@/services/service-auth'
import useAuthStore from '@/store/tracking/tracker-auth'
import useLevelStore from '@/store/store-level'
import useProgressStore from '@/store/tracking/tracker-progress'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import { API_URL } from '@/config/api'

interface ExerciseData {
  exercise_id: number
  question_id: number
  iscorrect: boolean
}

export default function Home() {
  const { setUserId } = useAuthStore()
  const { setLevel } = useLevelStore()
  const { setProgress } = useProgressStore()
  const { addTotalAnswer } = useTotalQuizStore()
  const { exercises, isLoading, error, loadExercises } = useExerciseStore()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Chargement des exercices...')
    loadExercises()
  }, [loadExercises])

  const fetchUserData = async (userId: number) => {
    try {
      const response = await fetch(`${API_URL}/level/${userId}`)
      const data = await response.json()

      console.log('Données utilisateur récupérées :', data)

      if (data && data.length > 0) {
        const sortedData = data.sort(
          (a: ExerciseData, b: ExerciseData) =>
            b.exercise_id - a.exercise_id || b.question_id - a.question_id
        )

        const { exercise_id, question_id } = sortedData[0]

        console.log(`Exercice le plus avancé : ${exercise_id}, Dernière question : ${question_id}`)

        if (question_id >= 5) {
          setLevel(exercise_id + 1)
          setProgress(1)
        } else {
          setLevel(exercise_id)
          setProgress(question_id + 1)
        }
        addTotalAnswer(data)
      } else {
        console.log('Pas de données disponibles')
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error)
    }
  }

  const handleAuthCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userCode = inputRef.current?.value
    if (!userCode) {
      setMessage('Le code ne peut pas être vide.')
      return
    }

    try {
      const response = await authenticateCode(userCode)
      console.log("Réponse de l'API :", response)
      if (response.success && typeof response.userId === 'number' && response.userId > 0) {
        setUserId(response.userId)
        await fetchUserData(response.userId)
        setMessage('Code valide ✅')
        navigate('/Level')
      } else {
        setMessage('Code invalide ❌')
      }
    } catch (error) {
      console.error('Erreur serveur:', error)
      setMessage('Erreur de connexion au serveur ❌')
    }
  }

  const handleClick = () => {
    navigate('/Level')
  }

  return (
    <>
      <img src="./Background-Home.svg" className="w-screen" alt="Background" />
      <Title
        title="Bienvenue sur PIDU"
        tag="h1"
        className="mt-5 text-[#646A69] text-center text-2xl md:text-3xl lg:text-4xl"
      />
      <Title
        title="Pour apprendre l'anglais en s'amusant"
        tag="h2"
        className="mt-3 text-lg md:text-xl lg:text-2xl text-center"
      />

      {isLoading && <p>Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && exercises.length === 0 && <p>Aucun exercice disponible.</p>}

      <div className="flex justify-center mt-6">
        <CustomButton bgColor="green" text="Démarrer" onClickHandler={handleClick} />
      </div>
      <CodeGenerator />

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-xl font-semibold">Entrez votre code</h2>
        <form onSubmit={handleAuthCode} className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Code utilisateur"
            ref={inputRef}
            required
            className="border p-2 rounded-md"
          />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
            Valider
          </button>
        </form>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </>
  )
}
