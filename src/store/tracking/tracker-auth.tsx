import { create } from 'zustand'

interface AuthState {
  userId: number | null
  setUserId: (id: number) => void
}

const useAuthStore = create<AuthState>(set => ({
  userId: null,
  setUserId: id => set({ userId: id }),
}))

export default useAuthStore
