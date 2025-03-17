import Avatar from '@/components/card-avatar'
import CardRewardLevel from '@/components/card-reward-level'
import ButtonWrapper from '@/components/button-cercle'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'

export default function Level() {
  const { totalAnswers } = useTotalQuizStore()
  const resultTotalCorrect = totalAnswers.filter(answer => answer.isCorrect).length
  return (
    <>
      <img
        src="/Background-Level.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 flex flex-row p-4">
        <div className="relative p-2">
          <Avatar />
        </div>
        <div className="flex flex-row gap-7 p-7">
          <CardRewardLevel value={resultTotalCorrect} />
        </div>
      </div>
      <div className="relative">
        <ButtonWrapper />
      </div>
    </>
  )
}
