import Title from '@/components/title'
import ContentCorrectAnswer from '@/components/card-correct-answer'
import CardReward from '@/components/card-reward'
import CustomButton from '@/components/button-long'
import { useNavigate } from 'react-router-dom'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import { ROUTES } from '@/const'
import useSound from 'use-sound'
import { useEffect } from 'react'

export default function ResultCompleted() {
  const { totalAnswers } = useTotalQuizStore()
  const resultCorrect = totalAnswers.filter(answer => answer.iscorrect).length
  const navigate = useNavigate()
  const [play] = useSound('/sound/finjeu.mp3', { volume: 0.25 })

  useEffect(() => {
    play()
  }, [play])
  const handleClick = () => {
    navigate(`/${ROUTES.END}`)
  }

  return (
    <>
      <img src="./Background-Bilan2.svg" className="w-screen" alt="Background" />
      <Title tag="h1" title="Bilan complet" className="p-5 text-center" />
      <Title tag="h2" title="Félicitations !" className="text-center" />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-7 mt-5">
        <ContentCorrectAnswer value={resultCorrect} isEnd />
        <CardReward value={resultCorrect} />
      </div>
      <div className="flex justify-center gap-12 mt-7">
        <CustomButton icon="./Arrow.svg" onClickHandler={handleClick} />
      </div>
    </>
  )
}
