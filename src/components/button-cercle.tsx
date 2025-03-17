import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Picture from './picture'
import useLevelStore from '@/store/store-level'
import Title from './title'
import Progressbar from './progressbar'
import ProgressNumber from './progressnumber'
import CustomButton from './buttonlong'
import useExerciseStore from '@/store/data/exercise'

interface IButtonLevelProps {
  level: number
  title?: string
}

function ButtonLocked() {
  const [showing, setShowing] = useState(false)

  const handleClick = () => {
    setShowing(!showing)
  }

  return (
    <>
      <button onClick={handleClick} aria-label="Bouton du prochain niveau verrouillé">
        <Picture src="./Lock.svg" alt="Bouton avec cadenas" className="cursor-pointer" />
      </button>

      {showing && (
        <div className="relative w-[456px] h-[220px] bg-white rounded-[24px] shadow-lg text-center left-1/2 transform -translate-x-1/2">
          <div className="absolute -top-2 left-1/2 bg-white -translate-x-1/2 w-4 h-4 rotate-45"></div>

          <button
            onClick={() => setShowing(false)}
            className="absolute top-4 right-4"
            aria-label="Fermer le modal"
          >
            <Picture src="./Close-Circle.svg" alt="Fermer" className="w-6 h-6 cursor-pointer" />
          </button>

          <div className="p-10 font-bold text-base flex flex-col items-center justify-center">
            <Picture src="./Pidu-study.svg" alt="pidu" className="w-[90px] h-[90px]" />
            <p>Tu dois valider l'exercice en cours pour pouvoir passer au suivant</p>
          </div>
        </div>
      )}
    </>
  )
}

function ButtonFlag() {
  const [showing, setShowing] = useState(false)
  const { exercises } = useExerciseStore()
  const { level } = useLevelStore()
  const data = exercises[level - 1]
  const title = data.title

  const navigate = useNavigate()
  const onClick = () => {
    navigate('/exercice')
  }
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
            <Title tag="h2" title={title} />
          </div>
          <div className="flex flex-row ml-26">
            <ProgressNumber colorNumber="text-black" currentColor="text-black" />
            <span className="ml-1.5">questions</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-17">
            <div className="w-[412px] h-[7px]">
              <Progressbar />
            </div>
            <div className="text-lg">
              <CustomButton bgColor="orange" text="Commencer" onClickHandler={onClick} />
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
