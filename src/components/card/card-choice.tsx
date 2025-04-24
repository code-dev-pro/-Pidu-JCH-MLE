import useChoiceStore from '@/store/tracking/selected-choice'
interface CardChoiceProps {
  label: string
  index: number
  iscorrect: boolean
  onClickHandler?: (id: number, label: string, iscorrect: boolean) => void
}

export default function CardChoice({ label, index, onClickHandler, iscorrect }: CardChoiceProps) {
  const { clickedIndex, setClickedIndex } = useChoiceStore()
  const onChoice = () => {
    setClickedIndex(index)
    onClickHandler?.(index, label, iscorrect)
  }
  return (
    <button
      onClick={onChoice}
      className={`rounded-xl w-[232px] h-[85px] flex items-center justify-center p-4 border-2 text-black ${
        clickedIndex === index
          ? 'bg-[#FFF7F0] border-[#FF8B2D]'
          : 'bg-white border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]'
      }`}
    >
      {label}
    </button>
  )
}
