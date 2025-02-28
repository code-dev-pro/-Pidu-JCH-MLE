import Title from '@/components/title'
import CardAnswer from '@/components/card-answer'
import Picture from '@/components/picture'
import Progressbar from '@/components/progressbar'
import CardReward from '@/components/card-reward'
import Number from '@/components/score'
import CardRewardLevel from '@/components/card-reward-level'
import ProgressNumber from '@/components/progressnumber'
import ButtonHelp from '@/components/buttonhelp'
import Avatar from '@/components/card-avatar'
import ButtonWrapper from '@/components/button-cercle'
import CustomButton from '@/components/buttonlong'
import ContentCorrectAnswer from '@/components/card-correct-answer'
import Feedback from '@/components/feedback'

export default function StoryBook() {
  return (
    <>
      <h1>Nos composants Pidu</h1>
      <div className="flex flex-col gap-8 px-4">
        <h2 className="text-2xl font-semibold mb-4 bg-pink-100">Progression</h2>
        <ProgressNumber
          className="text-2xl font-bold text-green-500"
          currentColor="text-green-500"
        />
        <Progressbar />

        <h2 className="text-2xl font-semibold bg-pink-100">Card</h2>
        <Title tag="h3" title="Composant choix réponse" />
        <div className="flex flex-wrap gap-6">
          <CardAnswer index={1} title="Apple" />
          <CardAnswer index={2} title="Orange" />
          <CardAnswer index={3} title="Apples" />
          <CardAnswer index={4} title="Coconut" />
        </div>

        <div className="flex gap-10 justify-center ">
          <div className="w-1/3">
            <CardRewardLevel />
          </div>
          <CardReward />
          <ContentCorrectAnswer />
        </div>

        <div className="w-full mt-8">
          <h2 className="text-2xl font-semibold mb-4 bg-pink-100">Modal</h2>
          <ButtonHelp />
          <ButtonWrapper />
        </div>

        <h2 className="text-2xl font-semibold mb-4 bg-pink-100">Picture et Autres</h2>
        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <Picture src="./Happy.svg" alt="image pidu content" />
          <Avatar />
          <Number value={1} />
          <CustomButton bgColor="green" icon="Arrow.svg" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 bg-pink-100">Feedback</h2>
      </div>

      <CardReward />
      <Number value={1} />
      <CardRewardLevel />
      <ProgressNumber />
      <Avatar />
      <ButtonWrapper />
      <CustomButton bgColor="green" icon="Arrow.svg" />
      <ButtonHelp />
      <ContentCorrectAnswer />
      <Feedback isCorrect={true} onClick={() => {}} correctAnswer="" />
      <Feedback isCorrect={false} onClick={() => {}} correctAnswer="Apple" />

    </>
  )
}
