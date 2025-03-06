import { create } from 'zustand'

type statusFeedback = 'success' | 'error'
interface FeedbackStore {
  valueFeedback: statusFeedback
  setValue: (feedBack: statusFeedback) => void
}

const useFeedbackStore = create<FeedbackStore>(set => ({
  valueFeedback: 'success',
  setValue: feedback => set({ valueFeedback: feedback }),
}))

export default useFeedbackStore
