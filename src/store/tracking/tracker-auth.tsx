import { create } from 'zustand'

interface AuthState {
  userId: number | null
  codeUser: string | null
  setUserId: (id: number) => void
  setCodeUser: (code: string) => void
}

const useAuthStore = create<AuthState>(set => ({
  userId: null,
  codeUser: null, // Ajoute une propriété pour stocker le code utilisateur
  setUserId: id => set({ userId: id }),
  setCodeUser: code => set({ codeUser: code }), // Ajoute une méthode pour définir le code utilisateur
}))

export default useAuthStore
