import { create } from 'zustand'

interface RewardStore {
  reward: number
  setReward: (newReward: number) => void
}

const useRewardStore = create<RewardStore>(set => ({
  reward: 0,
  setReward: newReward => set({ reward: newReward }),
}))

export default useRewardStore
