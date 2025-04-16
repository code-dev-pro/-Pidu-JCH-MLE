import Picture from './picture'
import useAvatarStore from '@/store/user'

interface ChoiceAvatarProps {
  avatar: {
    id: number
    character: string
  }
  onClickHandler: () => void
  isSelected: boolean
}

export default function ChoiceAvatar({ avatar, onClickHandler }: ChoiceAvatarProps) {
  const { selectedAvatar } = useAvatarStore()

  const isSelected = selectedAvatar?.id === avatar.id

  return (
    <button
      onClick={onClickHandler}
      className={`rounded-xl w-full h-[90px] sm:w-[218px] sm:h-[165px] flex items-center justify-center p-2 sm:p-4 border-2 cursor-pointer ${
        isSelected
          ? 'bg-[#FFF7F0] border-[#FF8B2D]'
          : 'bg-white border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]'
      }`}
    >
      <Picture
        src={avatar.character}
        alt="avatar"
        className="max-w-full max-h-full object-contain"
      />
    </button>
  )
}
