import { Exercise, Question, Choice } from '@/store/data/exercise'
import { API_URL } from '@/config/api'

// On définit les types raw tels qu’ils arrivent depuis l’API
interface RawChoice {
  id: number
  label: string
  iscorrect: boolean
}

interface RawQuestion {
  id: number
  question: string
  image: string
  help: string
  choices: RawChoice[]
}

interface RawExercise {
  exercise_id: number
  exercise_title: string
  exercise_image: string
  questions: RawQuestion[]
}

export const fetchExercises = async (): Promise<Exercise[]> => {
  try {
    const response = await fetch(`${API_URL}/exercises`)

    if (!response.ok) {
      throw new Error('Erreur lors du chargement des exercices!')
    }

    const rawData: RawExercise[] = await response.json()
    console.log('👉 Données reçues :', JSON.stringify(rawData, null, 2))

    const exercises: Exercise[] = rawData.map(
      (item): Exercise => ({
        id: item.exercise_id,
        exercise_title: item.exercise_title,
        image: item.exercise_image,
        questions: item.questions.map(
          (q): Question => ({
            id: q.id,
            question: q.question,
            image: q.image,
            help: q.help,
            choices: q.choices.map(
              (c): Choice => ({
                id: c.id,
                label: c.label,
                iscorrect: c.iscorrect,
              })
            ),
          })
        ),
      })
    )

    return exercises
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des exercices:', error)
    throw error
  } finally {
    console.log('✅ Requête API terminée')
  }
}
