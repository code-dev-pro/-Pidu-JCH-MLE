import { create } from 'zustand'

interface ChoiceStore {
  clickedIndex: number
  setClickedIndex: (index: number) => void
}

const useChoiceStore = create<ChoiceStore>(set => ({
  clickedIndex: -1,
  setClickedIndex: index => set(() => ({ clickedIndex: index })),
}))

export default useChoiceStore
