import Picture from './picture'
import Title from './title'
import CustomButton from './buttonlong'
interface FeedbackProps {
  isCorrect: boolean
  correctAnswer: string
  onClick: () => void
}

function Feedback({ isCorrect, correctAnswer, onClick }: FeedbackProps) {
  const backgroundColor = isCorrect ? '#DFF8EC' : '#FDF3F2'
  const pictureSrc = isCorrect ? './Happy.svg' : './Sad.svg'
  const pictureAlt = isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'
  const title = isCorrect ? 'Bravo !' : 'Oh, non !'
  const subtitle = isCorrect
    ? 'Tu as trouvé la bonne réponse!'
    : `La bonne réponse est : "${correctAnswer}"`
  const color = isCorrect ? 'text-[#19C472]' : 'text-[#F84E40]'

  return (
    <div className="flex items-center w-full h-[144px]" style={{ backgroundColor }}>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row ml-8">
          <Picture src={pictureSrc} alt={pictureAlt} className="mx-auto mb-4 w-24 h-24" />

          <div className="flex flex-col justify-center ml-4">
            <div className="font-bold mb-2">
              <Title tag="h2" title={title} className={color} />
            </div>
            <Title tag="h3" title={subtitle} className={color} />
          </div>
        </div>

        <div onClick={onClick} className="mr-8 flex items-center">
          <CustomButton bgColor="green" icon="Arrow.svg" />
        </div>
      </div>
    </div>
  )
}

export default Feedback
