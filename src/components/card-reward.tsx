import Picture from './picture'
import Score from './score'

const score = 5

export default function CardReward() {
  const pictureSrc =
    score >= 1 && score < 5 ? './Star.svg' : score <= 5 ? './Diamond.svg' : './default.svg/'

  return (
    <div className="bg-[#FBF4DC] rounded-[13px] w-[308px] h-[73px] flex items-center justify-center">
      <span className="text-center font-semibold flex items-center gap-1">
        Tu as gagné <Score value={score} />
        <Picture src={pictureSrc} alt="img récompense" className="w-[24px] h-[20px]" />
        en récompense
      </span>
    </div>
  )
}
