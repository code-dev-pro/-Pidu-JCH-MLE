import { create } from 'zustand'

export interface AvatarItem {
  id: number
  character: string
}

interface AvatarStore {
  selectedAvatar: AvatarItem | null
  setAvatar: (avatar: AvatarItem) => void
}

const useAvatarStore = create<AvatarStore>(set => ({
  selectedAvatar: null,
  setAvatar: avatar => set({ selectedAvatar: avatar }),
}))

export default useAvatarStore
