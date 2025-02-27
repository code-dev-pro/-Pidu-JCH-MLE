import useAnswerStore from '@/store/store-answer'

interface CardAnswerProps {
  title: string
  index: number
}

export default function CardAnswer({ title, index }: CardAnswerProps) {
  const { clickedIndex, setClickedIndex } = useAnswerStore()

  console.log(clickedIndex === index ? 'Le bouton est cliqué' : 'Le bouton est décoché')

  return (
    <button
      onClick={() => setClickedIndex(index)}
      className={`rounded-xl w-[232px] h-[85px] flex items-center justify-center p-4 border ${
        clickedIndex === index
          ? 'bg-[#FFF7F0] border-[#FF8B2D]'
          : 'border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]'
      }`}
    >
      {title}
    </button>
  )
}
