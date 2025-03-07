import Title from '@/components/title'
import ContentCorrectAnswer from '@/components/card-correct-answer'
import CardReward from '@/components/card-reward'
import CustomButton from '@/components/buttonlong'
export default function Result() {
  return (
    <>
      <div className="w-full h-[250px] bg-[url(./Background-Bilan.svg)] bg-cover"></div>
      <Title tag="h1" title="Bilan exercice" className="p-5" />
      <div className="flex flex-row items-center justify-center gap-7 mt-5">
        <ContentCorrectAnswer />
        <CardReward />
      </div>
      <div className="flex justify-center gap-12 mt-7">
        <CustomButton text="Rejouer" />
      </div>
    </>
  )
}
