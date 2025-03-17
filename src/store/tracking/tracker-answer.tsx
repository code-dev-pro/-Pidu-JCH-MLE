import { create } from 'zustand'

export interface Answer {
  exerciseId: number
  questionId: number
  selectedChoice: string
  isCorrect: boolean
}

interface QuizStore {
  answers: Answer[]
  addAnswer: (
    exerciseId: number,
    questionId: number,
    selectedChoice: string,
    isCorrect: boolean
  ) => void
  resetAnswers: () => void
}

const useQuizStore = create<QuizStore>(set => ({
  answers: [],
  addAnswer: (exerciseId, questionId, selectedChoice, isCorrect) =>
    set(state => {
      // Recherche si une réponse existe déjà pour cette question dans le tableau answers
      const existingAnswerIndex = state.answers.findIndex(a => a.questionId === questionId)
      // Si une réponse existe déjà pour cette question, on la met à jour
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...state.answers] // Copie du tableau des réponses existantes
        updatedAnswers[existingAnswerIndex] = {
          exerciseId,
          questionId,
          selectedChoice,
          isCorrect,
        } // Remplacement de l'ancienne réponse par la nouvelle
        return { answers: updatedAnswers } // Mise à jour du store avec la nouvelle liste de réponses
      }
      return {
        answers: [...state.answers, { exerciseId, questionId, selectedChoice, isCorrect }],
      }
    }),
  resetAnswers: () => set({ answers: [] }),
}))

export default useQuizStore
