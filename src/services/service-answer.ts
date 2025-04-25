import { API_URL } from '@/config/api'
import useExerciseStore from '@/store/data/exercise'
import { Answer } from '@/store/tracking/answer'
import useQuizStore from '@/store/tracking/answer'
import useProgressStore from '@/store/tracking/exercise-progress'
import useLevelStore from '@/store/tracking/level-progress'
import useTotalQuizStore from '@/store/tracking/total-answer'

interface ExerciseData {
  exercise_id: number
  question_id: number
  iscorrect: boolean
}

export function useGetExercise() {
  const { setLevel } = useLevelStore()
  const { setProgress } = useProgressStore()
  const { setAnswer, resetAnswers } = useQuizStore()
  const { addTotalAnswer } = useTotalQuizStore()
  const { exercises } = useExerciseStore()

  const getExercise = async (user_id: number): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/level/${user_id}`)
      const data = await response.json()

      if (data && data.length > 0) {
        const sortedData = data.sort(
          (a: ExerciseData, b: ExerciseData) =>
            b.exercise_id - a.exercise_id || b.question_id - a.question_id
        )

        const { exercise_id } = sortedData[0]
        const currentExercise = exercises.find(ex => ex.id === exercise_id)
        const nextExercise = exercises.find(ex => ex.id === exercise_id + 1)

        resetAnswers()

        // Récupérer toutes les réponses pour l'exercice courant
        const answersForCurrentExercise = data.filter(
          (answer: Answer) => answer.exercise_id === exercise_id
        )

        answersForCurrentExercise.forEach((answer: Answer) => {
          setAnswer(
            answer.user_id,
            answer.exercise_id,
            answer.question_id,
            answer.selected_choice,
            answer.iscorrect
          )
        })

        const totalQuestions = currentExercise?.questions.length || 0

        const answeredQuestions = answersForCurrentExercise.length

        if (answeredQuestions >= totalQuestions && nextExercise) {
          setLevel(exercise_id + 1)
          setProgress(1, nextExercise.questions.length)
        } else {
          setLevel(exercise_id)
          setProgress(answeredQuestions + 1, totalQuestions)
        }

        addTotalAnswer(data)
        return true
      } else {
        console.log('Pas de données disponibles')
        return false
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error)
      return false
    }
  }

  return { getExercise }
}
