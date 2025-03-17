import useAnswerStore from '@/store/store-choice-answer'
interface CardAnswerProps {
  label: string
  index: number
  isCorrect: boolean
  onClickHandler?: (id: number, label: string, isCorrect: boolean) => void
}

export default function CardAnswer({ label, index, onClickHandler, isCorrect }: CardAnswerProps) {
  const { clickedIndex, setClickedIndex } = useAnswerStore()
  console.log(clickedIndex === index ? 'Le bouton est cliqué' : 'Le bouton est décoché')
  const onChoice = () => {
    setClickedIndex(index)
    onClickHandler?.(index, label, isCorrect)
  }
  return (
    <button
      onClick={onChoice}
      className={`rounded-xl w-[232px] h-[85px] flex items-center justify-center p-4 border ${
        clickedIndex === index
          ? 'bg-[#FFF7F0] border-[#FF8B2D]'
          : 'border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]'
      }`}
    >
      {label}
    </button>
  )
}
