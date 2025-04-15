import { create } from 'zustand'

interface AuthState {
  userId: number | null
  codeUser: string | null
  avatarId: number | null
  setUserId: (id: number) => void
  setCodeUser: (code: string) => void
  setAvatarId: (avatarId: number) => void
}

const useAuthStore = create<AuthState>(set => ({
  userId: null,
  codeUser: null,
  avatarId: null,
  setUserId: id => set({ userId: id }),
  setCodeUser: code => set({ codeUser: code }),
  setAvatarId: avatarId => set({ avatarId }),
}))

export default useAuthStore
