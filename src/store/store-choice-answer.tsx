import { create } from 'zustand'

interface AnswerStore {
  clickedIndex: number
  setClickedIndex: (index: number) => void
}

const useAnswerStore = create<AnswerStore>(set => ({
  clickedIndex: -1,
  setClickedIndex: index => set(() => ({ clickedIndex: index })),
}))

export default useAnswerStore
