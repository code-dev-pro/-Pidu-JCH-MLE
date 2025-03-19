import ProgressNumber from '@/components/progressnumber'

interface ContentCorrectAnswerProps {
  value: number
  isEnd?: boolean
}
export default function ContentCorrectAnswer({ value, isEnd }: ContentCorrectAnswerProps) {
  return (
    <div className="rounded-xl w-[300px] h-[90px] flex items-center justify-center p-4 border-1 border-[#EAEEED]">
      <div className="flex flex-col font-bold">
        <span className="text-[#646A69] text-[24px]">Réponses correctes</span>
        <ProgressNumber
          className="text-4xl font-bold"
          colorNumber="text-green-500"
          currentColor="text-green-500"
          value={value}
          isEnd={isEnd}
        />
      </div>
    </div>
  )
}
