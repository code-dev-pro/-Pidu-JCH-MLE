import { create } from 'zustand'

interface AuthState {
  user_id: number | null
  code_user: string | null
  avatar_id: number | null
  setuser_id: (id: number) => void
  setcode_user: (code: string) => void
  setavatar_id: (avatar_id: number) => void
}

const useAuthStore = create<AuthState>(set => ({
  user_id: null,
  code_user: null,
  avatar_id: null,
  setuser_id: id => set({ user_id: id }),
  setcode_user: code => set({ code_user: code }),
  setavatar_id: avatar_id => set({ avatar_id }),
}))

export default useAuthStore
