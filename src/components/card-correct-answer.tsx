import ProgressNumber from '@/components/progressnumber'

export default function ContentCorrectAnswer() {
  return (
    <>
      <div className="rounded-xl w-64 h-25 flex items-center justify-center p-4 border-1 border-[#EAEEED]">
        <div className="flex flex-col font-bold">
          <span className="text-[#646A69] text-[24px]">Réponses correctes</span>
          <ProgressNumber />
        </div>
      </div>
    </>
  )
}
