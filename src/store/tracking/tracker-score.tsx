import { create } from 'zustand'

interface ScoreStore {
  exerciseScores: { [key: number]: number }
  totalScore: number
  increaseScore: (exerciseId: number, isCorrect: boolean) => void
  resetScores: () => void
}

const useScoreStore = create<ScoreStore>(set => ({
  exerciseScores: {},
  totalScore: 0,
  increaseScore: (exerciseId, isCorrect) =>
    set(state => {
      const currentScore = state.exerciseScores[exerciseId] || 0
      const updatedScore = isCorrect ? currentScore + 1 : currentScore
      const updatedTotalScore = isCorrect ? state.totalScore + 1 : state.totalScore

      return {
        exerciseScores: { ...state.exerciseScores, [exerciseId]: updatedScore },
        totalScore: updatedTotalScore,
      }
    }),
  resetScores: () => set({ exerciseScores: {}, totalScore: 0 }),
}))

export default useScoreStore
