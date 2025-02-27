import { useState } from 'react'
import Picture from './picture'
import useLevelStore from '@/store/store-exercice'
import Title from './title'
import Progressbar from './progressbar'
import ProgressNumber from './progressnumber'
import CustomButton from './buttonlong'

interface IButtonLevelProps {
  level: number
}

function ButtonLocked() {
  return (
    <button aria-label="Bouton du prochain niveau verrouillé">
      <Picture src="./Lock.svg" alt="Bouton avec cadenas" className="cursor-pointer" />
    </button>
  )
}

function ButtonFlag() {
  const [showing, setShowing] = useState(false)

  const handleClick = () => {
    setShowing(!showing)
  }

  return (
    <>
      <button onClick={handleClick} aria-label="Bouton pour ouvrir le modal de démarrage">
        <Picture src="./Btn.svg" alt="Bouton vert avec drapeau" className="cursor-pointer" />
      </button>
      {showing && (
        <div className="relative w-[619px] h-[326px] bg-white rounded-[24px] shadow-lg text-center left-1/2 transform -translate-x-1/2">
          <div className="absolute -top-2 left-1/2 bg-white -translate-x-1/2 w-4 h-4 rotate-45"></div>
          <div className="p-10 font-bold text-xl">
            <Title tag="h2" title="Exercice n°1 : Question à choix unique sur les couleurs " />
          </div>
          <div className="flex flex-row ml-27 font-semibold">
            <ProgressNumber />
            <span className="mt-1">question</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-17">
            <div className="w-[412px] h-[7px]">
              <Progressbar />
            </div>
            <div className="text-lg">
              <CustomButton bgColor="orange" text="Commencer" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ButtonCheck() {
  return (
    <button aria-label="Bouton pour ouvrir le modal de démarrage">
      <Picture src="./Check.svg" alt="Bouton vert avec drapeau" className="cursor-pointer" />
    </button>
  )
}

function ButtonLevel(props: IButtonLevelProps) {
  const { level: levelStore } = useLevelStore()
  const level = props.level

  const setButtonsLevel = () => {
    if (level === levelStore) return <ButtonFlag />
    if (level > levelStore) return <ButtonLocked />
    if (level < levelStore) return <ButtonCheck />
    return null
  }
  return setButtonsLevel()
}

export default function ButtonWrapper() {
  return (
    <>
      <ButtonLevel level={1} />
      <ButtonLevel level={2} />
      <ButtonLevel level={3} />
      <ButtonLevel level={4} />
      <ButtonLevel level={5} />
    </>
  )
}
