import { create } from 'zustand'
import { fetchExercises } from '@/services/service-exercise'

export interface Choice {
  id: number
  label: string
  iscorrect: boolean
}

export interface Question {
  id: number
  question: string
  image: string
  choices: Choice[]
  help: string
}

export interface Exercise {
  id: number
  exercise_title: string
  image: string
  questions: Question[]
}

interface ExerciseStore {
  exercises: Exercise[]
  // setExercises: (newExercises: Exercise[]) => void
  isLoading: boolean
  error: string | null
  loadExercises: () => Promise<void>
}
// une nouvelle méthode qui va consommer l'api qui va retourner mon jeu de de data
const useExerciseStore = create<ExerciseStore>(set => ({
  // exercises: data,
  // setExercises: newExercises => set({ exercises: newExercises }),
  exercises: [],
  isLoading: false,
  error: null,

  loadExercises: async () => {
    set({ isLoading: true, error: null })

    try {
      const exercises = await fetchExercises()
      set({ exercises, isLoading: false })
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false })
      } else {
        set({ error: 'Un erreur inconnue est survenue', isLoading: false })
      }
    } finally {
      console.log('Chargement terminé')
    }
  },
}))

export default useExerciseStore
