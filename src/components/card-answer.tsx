import useAnswerStore from '@/store/store-answer'

interface CardAnswerProps {
  title: string
  index: number
}

export default function CardAnswer({ title, index }: CardAnswerProps) {
  const { clickedIndex, setClickedIndex } = useAnswerStore()

  console.log(clickedIndex === index ? 'Le bouton est cliqué' : 'Le bouton est décoché')

  return (
    <div className="flex gap-24 m-2">
      <button
        onClick={() => setClickedIndex(index)}
        className={`rounded-xl w-64 h-25 flex items-center p-4 border ${
          clickedIndex === index
            ? 'bg-[#FFF7F0] border-[#FF8B2D]'
            : 'border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]'
        }`}
      >
        {title}
      </button>
    </div>
  )
}
