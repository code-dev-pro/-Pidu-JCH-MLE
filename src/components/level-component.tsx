import { useEffect } from 'react'
import ButtonWrapper from '@/components/button/button-cercle'
import Avatar from '@/components/card/card-avatar'
import CardRewardLevel from '@/components/card/card-reward-level'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import useLevelStore from '@/store/level-progress'
import CardCode from '@/components/card/card-code-user'

export interface LevelComponentProps {
  user_id: number
}
const LevelComponent = ({ user_id }: LevelComponentProps) => {
  const { setLevel } = useLevelStore()
  const { totalAnswers } = useTotalQuizStore()
  const resultTotalCorrect = totalAnswers.filter(answer => answer.iscorrect).length

  useEffect(() => {
    if (user_id) setLevel(user_id)
  }, [user_id, setLevel])

  return (
    <>
      <div
        className="absolute inset-0 h-svh bg-cover bg-center"
        style={{ backgroundImage: `url(./img/background/level.svg)` }}
      >
        <div className="absolute top-0 left-0 w-full flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-10 p-4 sm:p-6">
          <div className="flex flex-row items-center gap-4 sm:gap-6 p-2 z-50 relative">
            <div className="flex flex-row items-center gap-5 sm:gap-4">
              <Avatar />
              <CardCode />
            </div>
            <div className="ml-4 sm:ml-2">
              <CardRewardLevel value={resultTotalCorrect} />
            </div>
          </div>
        </div>

        <ButtonWrapper />
      </div>
    </>
  )
}
export default LevelComponent
