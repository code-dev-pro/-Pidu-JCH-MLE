import Title from '@/components/title'
import CustomButton from '@/components/buttonlong'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const handleClick = () => {
    navigate('/Level')
  }
  const navigate = useNavigate()
  return (
    <>
      <img src="./Background-Home.svg" className="w-full max-w-screen" />
      <Title
        title="Bienvenue sur PIDU"
        tag="h1"
        className="mt-5 text-[#646A69] text-center text-2xl md:text-3xl lg:text-4xl"
      />
      <Title
        title="Pour apprendre l'anglais en s'amusant"
        tag="h2"
        className="mt-3 text-lg md:text-xl lg:text-2xl text-center"
      />
      <div className="flex justify-center mt-6">
        <CustomButton bgColor="green" text="Démarrer" onClickHandler={handleClick} />
      </div>
    </>
  )
}
