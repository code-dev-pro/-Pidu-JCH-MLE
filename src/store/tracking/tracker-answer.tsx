import { create } from 'zustand'

interface Answer {
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
}

const useQuizStore = create<QuizStore>(set => ({
  answers: [],
  addAnswer: (exerciseId, questionId, selectedChoice, isCorrect) =>
    set(state => {
      const existingAnswerIndex = state.answers.findIndex(a => a.questionId === questionId)
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...state.answers]
        updatedAnswers[existingAnswerIndex] = { exerciseId, questionId, selectedChoice, isCorrect }
        return { answers: updatedAnswers }
      }

      return { answers: [...state.answers, { exerciseId, questionId, selectedChoice, isCorrect }] }
    }),
}))

export default useQuizStore
