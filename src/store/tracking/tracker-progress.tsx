import { create } from 'zustand'

interface ProgressStore {
  progressNumber: number
  progressBar: number
  increaseProgress: () => void
  resetProgress: () => void
}

const useProgressStore = create<ProgressStore>(set => ({
  progressNumber: 1,
  progressBar: 0,
  increaseProgress: () =>
    set(state => {
      const newProgressNumber = state.progressNumber + 1
      const newProgressBar = (newProgressNumber / 5) * 100
      return { progressNumber: newProgressNumber, progressBar: newProgressBar }
    }),
  resetProgress: () => set({ progressNumber: 1, progressBar: 0 }),
}))

export default useProgressStore
