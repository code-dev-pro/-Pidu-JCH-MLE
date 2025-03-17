import Picture from './picture'
import Score from './score'

interface CardRewardProps {
  value: number
}

export default function CardReward({ value }: CardRewardProps) {
  const pictureSrc = value >= 0 ? './Diamond.svg' : './default.svg/'

  return (
    <div className="bg-[#FBF4DC] rounded-[13px] w-[308px] h-[73px] flex items-center justify-center">
      <span className="text-center font-semibold flex items-center gap-1">
        Tu as gagné <Score value={value} />
        <Picture src={pictureSrc} alt="img récompense" className="w-[24px] h-[20px]" />
        en récompense
      </span>
    </div>
  )
}
