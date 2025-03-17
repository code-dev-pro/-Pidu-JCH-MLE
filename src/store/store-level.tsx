import { create } from 'zustand'

interface LevelStore {
  level: number
  nextLevel: () => void
}

const useLevelStore = create<LevelStore>(set => ({
  level: 1,
  nextLevel: () => set(state => ({ level: state.level + 1 })),
}))

export default useLevelStore
