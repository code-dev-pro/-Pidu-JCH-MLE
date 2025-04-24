import { create } from 'zustand'
import { Answer } from './answer'

interface TotalQuizStore {
  totalAnswers: Answer[]
  addTotalAnswer: (answers: Answer[]) => void
  resetTotalAnswers: () => void
}

const useTotalQuizStore = create<TotalQuizStore>(set => ({
  totalAnswers: [],
  addTotalAnswer: answers => {
    set(state => ({
      totalAnswers: [...state.totalAnswers, ...answers],
    }))
  },
  resetTotalAnswers: () => set({ totalAnswers: [] }),
}))

export default useTotalQuizStore
