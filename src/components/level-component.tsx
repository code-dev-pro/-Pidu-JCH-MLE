import { useEffect } from 'react'
import ButtonWrapper from './button-cercle'
import Avatar from './card-avatar'
import CardRewardLevel from './card-reward-level'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import useLevelStore from '@/store/level-progress'

export interface LevelComponentProps {
  userId: number
}
const LevelComponent = ({ userId }: LevelComponentProps) => {
  const { setLevel } = useLevelStore()
  const { totalAnswers } = useTotalQuizStore()
  const resultTotalCorrect = totalAnswers.filter(answer => answer.iscorrect).length

  useEffect(() => {
    if (userId) setLevel(userId)
  }, [userId, setLevel])

  return (
    <>
      <div
        className="absolute inset-0 h-svh bg-cover bg-center"
        style={{ backgroundImage: `url(./img/Background-Level3.svg)` }}
      >
        <div className="absolute top-0 left-10 flex flex-row">
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
export default LevelComponent
