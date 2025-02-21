import Title from '@/components/title'
import CardAnswer from '@/components/card-answer'

export default function StoryBook() {
  return (
    <>
      <Title tag="h3" title="Composant choix réponse" />
      <CardAnswer index={1} title="Apple" />
      <CardAnswer index={2} title="Orange" />
      <CardAnswer index={3} title="Apples" />
      <CardAnswer index={4} title="Coconut" />
    </>
  )
}
