import Title from '@/components/title'
import ContentCorrectAnswer from '@/components/card-correct-answer'
import CardReward from '@/components/card-reward'
import CustomButton from '@/components/buttonlong'
import { useNavigate } from 'react-router-dom'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'

export default function ResultCompleted() {
  const { totalAnswers } = useTotalQuizStore()
  const resultCorrect = totalAnswers.filter(answer => answer.isCorrect).length
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/End')
  }

  return (
    <>
      <img src="./Background-Bilan.svg" className="w-screen h-[250px]"></img>
      <Title tag="h1" title="Bilan complet" className="p-5" />
      <Title tag="h2" title="Félicitations !" />
      <div className="flex flex-row items-center justify-center gap-7 mt-5">
        <ContentCorrectAnswer value={resultCorrect} isEnd />
        <CardReward value={resultCorrect} />
      </div>
      <div className="flex justify-center gap-12 mt-7">
        <CustomButton icon="./Arrow.svg" onClickHandler={handleClick} />
      </div>
    </>
  )
}
