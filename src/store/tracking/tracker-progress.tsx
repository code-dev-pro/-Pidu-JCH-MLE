import { create } from 'zustand'
interface ProgressStore {
  progressNumber: number
  progressBar: number
  setProgress: (progressNumber: number, totalQuestions: number) => void
  increaseProgress: (totalQuestions: number) => void
  resetProgress: () => void
}

const useProgressStore = create<ProgressStore>(set => ({
  progressNumber: 1,
  progressBar: 20,
  setProgress: (progressNumber: number, totalQuestions: number) =>
    set(() => ({ progressNumber, progressBar: (progressNumber / totalQuestions) * 100 })),
  increaseProgress: (totalQuestions: number) =>
    set(state => {
      const newProgressNumber = state.progressNumber + 1
      const newProgressBar = (newProgressNumber / totalQuestions) * 100
      return {
        progressNumber: newProgressNumber,
        progressBar: newProgressBar,
      }
    }),

  resetProgress: () => set({ progressNumber: 1, progressBar: 20 }),
}))

export default useProgressStore
