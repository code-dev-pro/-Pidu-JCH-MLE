import Picture from './picture'
import Score from './score'

interface CardRewardProps {
  value: number
}

export default function CardReward({ value }: CardRewardProps) {
  const pictureSrc = value >= 0 ? './img/Diamond.svg' : './img/default.svg/'

  return (
    <div className="bg-[#FBF4DC] rounded-[13px] min-w-48 h-[90px] flex items-center justify-center p-4">
      <span className="text-center text-lg font-semibold flex items-center gap-1">
        Tu as gagné <Score value={value} />
        <Picture src={pictureSrc} alt="img récompense" className="w-[28px] h-[24px]" />
        en récompense
      </span>
    </div>
  )
}
