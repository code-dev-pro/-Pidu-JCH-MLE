import Title from '@/components/title'
import Progressbar from '@/components/progressbar'
import ButtonHelp from '@/components/buttonhelp'
import ProgressNumber from '@/components/progressnumber'
import CardAnswer from '@/components/card-answer'
import CustomButton from '@/components/buttonlong'
import Picture from '@/components/picture'

export default function Exercice() {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center p-7">
        <div className="max-w-16 max-h-16 mt-[-20px]">
          <ButtonHelp />
        </div>
        <Progressbar />
        <ProgressNumber
          className="text-2xl font-bold text-green-500 mt-[-10px]"
          currentColor="text-green-500"
        />
      </div>
      <Title tag="h1" title="Devine le mot" className="mb-7" />
      <Picture src="/Apple.svg" alt="image pomme" className=" block mx-auto gap-7" />
      <div className="flex flex-wrap gap-6 justify-center mt-7">
        <CardAnswer index={1} title="Apple" />
        <CardAnswer index={2} title="Orange" />
        <CardAnswer index={3} title="Apples" />
        <CardAnswer index={4} title="Coconut" />
      </div>
      <div className="flex justify-center gap-12 mt-7">
        <CustomButton icon="/Arrow.svg" />
      </div>
    </>
  )
}
