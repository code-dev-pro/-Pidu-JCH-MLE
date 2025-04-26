import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Picture from '@/components/picture'
import useLevelStore from '@/store/tracking/level-progress'
import Title from '@/components/title'
import Progressbar from '@/components/progress/progress-bar'
import ProgressNumber from '@/components/progress/progress-number'
import CustomButton from '@/components/button/button-long'
import useExerciseStore from '@/store/data/exercise'
import { ROUTES } from '@/const'
import useSound from 'use-sound'
import { useClickAway } from '@uidotdev/usehooks'
import { SOUND } from '@/const'

interface IButtonLevelProps {
  level: number
  title?: string
  className?: string
}

function ButtonLocked() {
  const [showing, setShowing] = useState(false)
  const [play] = useSound(`/${SOUND.WRONG}`, { volume: 0.25 })

  const handleClick = () => {
    setShowing(!showing)
    play()
  }
  const refModal = useClickAway(() => {
    setShowing(false)
  })
  return (
    <>
      <button onClick={handleClick} aria-label="Bouton du prochain niveau verrouillé">
        <Picture
          src="./img/components/locked.svg"
          alt="Bouton avec cadenas"
          className="cursor-pointer"
        />
      </button>

      {showing && (
        <div
          ref={refModal as React.Ref<HTMLDivElement>}
          className="fixed top-1/2 left-1/2 w-full max-w-[90%] sm:max-w-[456px] bg-white rounded-2xl shadow-lg text-center transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 sm:p-10"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <Picture
              src="./img/pidu/study.svg"
              alt="pidu"
              className="w-20 h-20 sm:w-[90px] sm:h-[90px]"
            />
            <p className="text-sm sm:text-base px-4">
              Tu dois valider l'exercice en cours pour pouvoir passer au suivant.
            </p>
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
  const title = data.exercise_title

  const navigate = useNavigate()

  const [play] = useSound(`/${SOUND.FAIL}`, { volume: 0.25 })
  const onClick = () => {
    navigate(`/${ROUTES.EXERCISE}`)
  }
  const handleClick = () => {
    setShowing(!showing)
    play()
  }
  const refModal = useClickAway(() => {
    setShowing(false)
  })

  return (
    <>
      <button
        onClick={handleClick}
        aria-label="Bouton pour ouvrir le modal de démarrage"
        className="circle pulse"
      >
        <Picture
          src="./img/components/flag.svg"
          alt="Bouton vert avec drapeau"
          className="cursor-pointer"
        />
      </button>
      {showing && (
        <div
          ref={refModal as React.Ref<HTMLDivElement>}
          className="fixed top-1/2 left-1/2 w-full max-w-[90%] sm:max-w-[619px] bg-white rounded-2xl shadow-lg text-center transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 sm:p-10"
        >
          <div className="font-bold text-lg sm:text-xl">
            <Title tag="h2" title={title} />
          </div>

          <div className="flex items-center justify-center mt-4">
            <ProgressNumber colorNumber="text-black" currentColor="text-black" />
            <span className="ml-2 text-sm sm:text-base">questions</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mt-6">
            <div className="w-full max-w-[412px] h-[7px]">
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
      <Picture
        src="./img/components/unlocked.svg"
        alt="Bouton vert avec drapeau"
        className="cursor-pointer"
      />
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
      <div className="relative h-screen ">
        <div className="absolute" style={{ top: '88%', left: '50%' }}>
          <ButtonLevel level={1} />
        </div>
        <div className="absolute" style={{ top: '75%', left: '40%' }}>
          <ButtonLevel level={2} />
        </div>
        <div className="absolute" style={{ top: '62%', left: '50%' }}>
          <ButtonLevel level={3} />
        </div>
        <div className="absolute" style={{ top: '50%', left: '40%' }}>
          <ButtonLevel level={4} />
        </div>
        <div className="absolute" style={{ top: '38%', left: '50%' }}>
          <ButtonLevel level={5} />
        </div>
        <div className="absolute" style={{ top: '27%', left: '40%' }}>
          <ButtonLevel level={6} />
        </div>
        <div className="absolute" style={{ top: '18%', left: '50%' }}>
          <ButtonLevel level={7} />
        </div>
      </div>
    </>
  )
}
