import Title from '@/components/title'
import ContentCorrectAnswer from '@/components/card-correct-answer'
import CardReward from '@/components/card-reward'
import CustomButton from '@/components/buttonlong'
export default function ResultCompleted() {
  return (
    <>
      <img src="./Background-Bilan.svg" className="w-full h-[250px]"></img>
      <Title tag="h1" title="Bilan complet" className="p-5" />
      <Title tag="h2" title="Félicitations !" />
      <div className="flex flex-row items-center justify-center gap-7 mt-5">
        <CardReward />
        <ContentCorrectAnswer />
      </div>
      <div className="flex justify-center gap-12 mt-7">
        <CustomButton icon="./Arrow.svg" />
      </div>
    </>
  )
}
