import { create } from 'zustand'

interface ProgressStore {
  progressNumber: number
  progressBar: number
  setProgress: (progressNumber: number) => void
  increaseProgress: () => void
  resetProgress: () => void
}

const useProgressStore = create<ProgressStore>(set => ({
  progressNumber: 1,
  progressBar: 20,
  setProgress: (progressNumber: number) =>
    set(() => ({ progressNumber, progressBar: (progressNumber / 5) * 100 })),
  increaseProgress: () =>
    set(state => {
      const newProgressNumber = state.progressNumber + 1
      const newProgressBar = (newProgressNumber / 5) * 100
      return {
        progressNumber: newProgressNumber,
        progressBar: newProgressBar,
      }
    }),

  fetchProgress: async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/level/${userId}`)
      if (!response.ok) throw new Error('Erreur lors de la récupération du progrès')

      const data = await response.json()
      set({ progressNumber: data.progressNumber, progressBar: (data.progressNumber / 5) * 100 })
    } catch (error) {
      console.error('Erreur:', error)
    }
  },
  resetProgress: () => set({ progressNumber: 1, progressBar: 0 }),
}))

export default useProgressStore
