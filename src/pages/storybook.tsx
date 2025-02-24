import Title from '@/components/title'
import CardAnswer from '@/components/card-answer'
import Picture from '@/components/picture'
import Progressbar from '@/components/progressbar'
import CardReward from '@/components/card-reward'
import Number from '@/components/score'
import CardGreen from '@/components/card-reward-level'

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
      <CardGreen />
    </>
  )
}
