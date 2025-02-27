import ProgressNumber from '@/components/progressnumber'

export default function ContentCorrectAnswer() {
  return (
    <>
      <div className="rounded-xl w-64 h-25 flex items-center justify-center p-4 border">
        <div className="flex flex-col font-bold">
          <span className="text-[#646A69] text-[24px]">Réponses correctes</span>
          <ProgressNumber
            className="text-4xl font-bold"
            colorNumber="text-green-500"
            currentColor="text-green-500"
          />
        </div>
      </div>
    </>
  )
}
