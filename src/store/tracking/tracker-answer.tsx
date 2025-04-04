import { create } from 'zustand'

export interface Answer {
  userId: number
  exerciseId: number
  questionId: number
  selectedChoice: string
  iscorrect: boolean
}

interface QuizStore {
  answers: Answer[]
  addAnswer: (
    userId: number,
    exerciseId: number,
    questionId: number,
    selectedChoice: string,
    iscorrect: boolean
  ) => void
  resetAnswers: () => void
}

const useQuizStore = create<QuizStore>(set => ({
  answers: [],
  addAnswer: async (userId, exerciseId, questionId, selectedChoice, iscorrect) => {
    const newAnswer = { userId, exerciseId, questionId, selectedChoice, iscorrect }
    console.log("Données préparées pour l'envoi :", newAnswer)

    set(state => ({ answers: [...state.answers, newAnswer] }))

    try {
      const response = await fetch('http://localhost:3000/answers', {
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
  resetAnswers: () => set({ answers: [] }),
}))

export default useQuizStore
