import { ROUTES } from '@/const'
import useTotalQuizStore from '@/store/tracking/total-answer'
import { useNavigate } from 'react-router-dom'
import Avatar from '@/components/card/card-avatar'
import CardCode from '@/components/card/card-code-user'
import CardRewardLevel from '@/components/card/card-reward-level'
import Picture from '@/components/picture'
import Score from '@/components/score'
import { sortAnswersByExerciseId } from '@/utils/utils-answer'

export default function HeaderProfile() {
  const { totalAnswers } = useTotalQuizStore()
  const resultTotalCorrect = totalAnswers.filter(answer => answer.iscorrect).length
  const currentQuestion = totalAnswers.length

  const sortedAnswers = sortAnswersByExerciseId(totalAnswers)
  const currentExercise = sortedAnswers.length
    ? sortedAnswers[sortedAnswers.length - 1].exercise_id
    : null

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${ROUTES.LEVEL}`)
  }
  return (
    <div className="bg-[#1B5E3E] w-screen min-h-[400px] relative overflow-visible">
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-10 p-4 sm:p-6">
        <div className="flex items-center gap-4 sm:gap-10">
          <Avatar />
          <CardCode />
          <CardRewardLevel value={resultTotalCorrect} />
        </div>
        <button onClick={handleClick} className="cursor-pointer">
          <Picture src="./img/Home.svg" alt="icon home" />
        </button>
      </div>

      <div className="flex justify-center">
        <Picture src="./img/pidu/profile.svg" alt="pidu profil" />
      </div>

      <div
        className="rounded-2xl max-w-[95%] h-[90px] sm:h-[70px] flex justify-center items-center mx-auto mt-[-70px] z-10 relative"
        style={{
          backgroundColor: 'rgba(53, 194, 127, 0.6)',
          backdropFilter: 'blur(7px)',
        }}
      >
        <div className="flex flex-wrap justify-center items-center text-[#F6F6F9] gap-4 sm:gap-6">
          <div className="flex-1 sm:w-2xl text-center">
            <p>Exercice numéro</p>
            <Score value={currentExercise} />
          </div>

          <Picture src="./img/Divider.svg" alt="séparateur" />

          <div className="flex-1 sm:w-2xl text-center">
            <p>Questions répondues</p>
            <Score value={currentQuestion} />
          </div>

          <Picture src="./img/Divider.svg" alt="séparateur" />

          <div className="flex-1 sm:w-2xl text-center">
            <p>Réponses correctes</p>
            <Score value={resultTotalCorrect} />
          </div>
        </div>
      </div>
    </div>
  )
}
