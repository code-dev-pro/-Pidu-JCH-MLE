import { create } from 'zustand'
import { data } from './const'
interface Choice {
  id: number
  label: string
  isCorrect: boolean
}

interface Question {
  id: number
  question: string
  image: string
  choices: Choice[]
  help: string
}

interface Exercise {
  id: number
  title: string
  questions: Question[]
}

interface ExerciseStore {
  exercises: Exercise[]
  setExercises: (newExercises: Exercise[]) => void
}
// une nouvelle méthode qui va consommer l'api qui va retourner mon jeu de de data
const useExerciseStore = create<ExerciseStore>(set => ({
  exercises: data,
  setExercises: newExercises => set({ exercises: newExercises }),
}))

export default useExerciseStore
