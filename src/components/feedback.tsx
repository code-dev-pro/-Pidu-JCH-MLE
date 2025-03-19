import Picture from './picture'
import Title from './title'
import CustomButton from './buttonlong'
import useFeedbackStore from '@/store/data/feedback'

interface FeedbackProps {
  correctAnswer: string
  increaseProgress?: () => void
}

function Feedback({ correctAnswer, increaseProgress }: FeedbackProps) {
  const { valueFeedback } = useFeedbackStore()
  const isSuccess = valueFeedback === 'success'
  const backgroundColor = isSuccess ? '#DFF8EC' : '#FDF3F2'
  const pictureSrc = isSuccess ? './Happy.svg' : './Sad.svg'
  const pictureAlt = isSuccess ? 'Bonne réponse' : 'Mauvaise réponse'
  const title = isSuccess ? 'Bravo !' : 'Oh, non !'
  const subtitle = isSuccess
    ? 'Tu as trouvé la bonne réponse!'
    : `La bonne réponse est : "${correctAnswer}"`
  const color = isSuccess ? 'text-[#19C472]' : 'text-[#F84E40]'

  return (
    <div
      className="flex flex-col sm:flex-row items-center w-full h-auto sm:h-[144px] rounded-xl p-4"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <div className="flex flex-col sm:flex-row items-center sm:ml-8">
          <Picture src={pictureSrc} alt={pictureAlt} className="mx-auto w-24 h-24 mb-4 sm:mb-0" />
          <div className="flex flex-col justify-center sm:ml-4 text-center sm:text-left">
            <div className="font-bold mb-2">
              <Title tag="h2" title={title} className={color} />
            </div>
            <Title tag="h3" title={subtitle} className={color} />
          </div>
        </div>
        <div
          onClick={increaseProgress}
          className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end w-full sm:w-auto"
        >
          <CustomButton bgColor="green" icon="Arrow.svg" />
        </div>
      </div>
    </div>
  )
}

export default Feedback
