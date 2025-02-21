import Title from '@/components/title'
import CardAnswer from '@/components/card-answer'
import Picture from '@/components/picture'
import CardReward from '@/components/card-reward'

export default function StoryBook() {
  return (
    <>
      <h1>Nos composants Pidu</h1>
      <Picture src="./Happy.svg" alt="image pidu content" />
      <Title tag="h3" title="Composant choix réponse" />
      <CardAnswer index={1} title="Apple" />
      <CardAnswer index={2} title="Orange" />
      <CardAnswer index={3} title="Apples" />
      <CardAnswer index={4} title="Coconut" />
      <CardReward />
    </>
  )
}
