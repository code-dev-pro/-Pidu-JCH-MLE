import { create } from 'zustand'

interface LevelStore {
  level: number
  nextLevel: () => void
  setLevel: (level: number) => void
}

const useLevelStore = create<LevelStore>(set => ({
  level: 1,
  setLevel: level => set({ level: level }),
  nextLevel: () => set(state => ({ level: state.level + 1 })),
}))

export default useLevelStore
