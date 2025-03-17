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
      <img src="./Background-Home.svg" className="w-screen" />
      <Title title="Bienvenue sur PIDU" tag="h1" className="mt-10 text-[#646A69]" />
      <Title title="Pour apprendre l'anglais en s'amusant" tag="h2" className="mt-6 text-xl" />
      <div className="flex justify-center mt-12 text-xl">
        <CustomButton bgColor="green" text="Démarrer" onClickHandler={handleClick} />
      </div>
    </>
  )
}
