import Picture from '@/components/picture'
import Score from '@/components/score'

interface CardRewardLevelProps {
  value: number
}

export default function CardRewardLevel({ value }: CardRewardLevelProps) {
  const pictureSrc = value >= 0 ? './img/Diamond.svg' : './img/default.svg/'

  return (
    <div className="flex gap-3 min-w-17 h-7 rounded-2xl bg-[#095F38] relative">
      <div className="w-[32px] h-[32px] ml-[-10px]">
        <Picture src={pictureSrc} alt="Score illustration" />
      </div>
      <div className="filter invert brightness-0">
        <Score value={value} />
      </div>
    </div>
  )
}
