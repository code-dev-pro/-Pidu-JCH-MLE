import Avatar from '@/components/card-avatar'
import CardRewardLevel from '@/components/card-reward-level'
import ButtonWrapper from '@/components/button-cercle'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import useLevelStore from '@/store/store-level'
import { useEffect } from 'react'

interface LevelComponentProps {
  userId: number
}
const LevelComponent: React.FC<LevelComponentProps> = ({ userId }) => {
  const { setLevel } = useLevelStore()
  const { totalAnswers } = useTotalQuizStore()
  const resultTotalCorrect = totalAnswers.filter(answer => answer.iscorrect).length
  console.log('debug', totalAnswers)

  useEffect(() => {
    if (userId) setLevel(userId)
  }, [userId, setLevel])

  return (
    <>
      <div
        className="absolute inset-0 h-svh bg-cover bg-center"
        style={{ backgroundImage: `url(/Background-Level3.svg)` }}
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
interface LevelProps {
  userId: number
}

export default function Level({ userId }: LevelProps) {
  return <LevelComponent userId={userId} />
}
