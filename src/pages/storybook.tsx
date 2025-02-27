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

export default function StoryBook() {
  return (
    <>
      <h1>Nos composants Pidu</h1>
      <Picture src="./Happy.svg" alt="image pidu content" />
      <Progressbar />
      <Title tag="h3" title="Composant choix réponse" />
      <CardAnswer index={1} title="Apple" />
      <CardAnswer index={2} title="Orange" />
      <CardAnswer index={3} title="Apples" />
      <CardAnswer index={4} title="Coconut" />
      <CardReward />
      <Number value={1} />
      <CardRewardLevel />
      <ProgressNumber className="text-2xl font-bold" currentColor="text-green-500" />
      <Avatar />
      <ButtonWrapper />
      <CustomButton bgColor="green" icon="Arrow.svg" />
      <ButtonHelp />
      <ContentCorrectAnswer />
    </>
  )
}
