import { create } from 'zustand'
import { API_URL } from '@/config/api'

export interface Answer {
  user_id: number
  exercise_id: number
  question_id: number
  selected_choice: string
  iscorrect: boolean
}

interface QuizStore {
  answers: Answer[]
  addAnswer: (
    user_id: number,
    exercise_id: number,
    question_id: number,
    selected_choice: string,
    iscorrect: boolean
  ) => void
  resetAnswers: () => void
  setAnswer: (
    user_id: number,
    exercise_id: number,
    question_id: number,
    selected_choice: string,
    iscorrect: boolean
  ) => void
}

const useQuizStore = create<QuizStore>(set => ({
  answers: [],
  addAnswer: async (user_id, exercise_id, question_id, selected_choice, iscorrect) => {
    const newAnswer = { user_id, exercise_id, question_id, selected_choice, iscorrect }

    set(state => ({ answers: [...state.answers, newAnswer] }))

    try {
      const response = await fetch(`${API_URL}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnswer),
      })

      if (!response.ok) {
        console.error('Erreur lors de l’enregistrement en BDD')
      }
    } catch (error) {
      console.error('Problème de connexion à la BDD', error)
    }
  },
  setAnswer: (user_id, exercise_id, question_id, selected_choice, iscorrect) => {
    set(state => {
      const existing = state.answers.find(
        a => a.user_id === user_id && a.exercise_id === exercise_id && a.question_id === question_id
      )

      let updatedAnswers
      if (existing) {
        updatedAnswers = state.answers.map(answer =>
          answer.user_id === user_id &&
          answer.exercise_id === exercise_id &&
          answer.question_id === question_id
            ? { ...answer, selected_choice, iscorrect }
            : answer
        )
      } else {
        updatedAnswers = [
          ...state.answers,
          { user_id, exercise_id, question_id, selected_choice, iscorrect },
        ]
      }
      return { answers: updatedAnswers }
    })
  },

  resetAnswers: () => set({ answers: [] }),
}))

export default useQuizStore
