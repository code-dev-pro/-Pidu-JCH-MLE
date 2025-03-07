import Title from '@/components/title'
import CustomButton from '@/components/buttonlong'

export default function Home() {
  return (
    <>
      <img src="./Bg-Home.jpg" className="h-[422px]"></img>
      <Title title="Bienvenue sur PIDU" tag="h1" className="mt-16 text-[#646A69]" />
      <Title title="Pour apprendre l'anglais en s'amusant" tag="h2" className="mt-12 text-xl" />
      <div className="flex justify-center mt-14 text-xl">
        <CustomButton bgColor="green" text="Démarrer" />
      </div>
    </>
  )
}
