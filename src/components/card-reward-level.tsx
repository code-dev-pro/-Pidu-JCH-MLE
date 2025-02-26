import Picture from '@/components/picture'
import Score from '@/components/score'

const score = 3

export default function CardGreen() {
  const pictureSrc =
    score >= 1 && score < 5 ? './Star.svg' : score <= 5 ? './Diamond.svg' : './default.svg/'

  return (
    <div className="flex gap-3 max-w-17 h-7 rounded-2xl bg-[#095F38] relative">
      <div className="w-[32px] h-[32px] ml-[-10px]">
        <Picture src={pictureSrc} alt="Score illustration" />
      </div>
      <div className="filter invert brightness-0">
        <Score value={score} />
      </div>
    </div>
  )
}
