import Avatar from '@/components/card-avatar'
import CardRewardLevel from '@/components/card-reward-level'
import ButtonWrapper from '@/components/button-cercle'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'

export default function Level() {
  const { totalAnswers } = useTotalQuizStore()
  const resultTotalCorrect = totalAnswers.filter(answer => answer.isCorrect).length
  return (
    <>
      <div
        className=" absolute inset-0 h-svh bg-cover bg-center"
        style={{ backgroundImage: `url(/Background-Level3.svg)` }}
      >
        <div className="absolute top-O left-10 flex flex-row ">
          <div className="relative p-2">
            <Avatar />
          </div>
          <div className="flex flex-row gap-5 p-7">
            <CardRewardLevel value={resultTotalCorrect} />
          </div>
        </div>
        <div>
          <ButtonWrapper />
        </div>
      </div>
    </>
  )
}
