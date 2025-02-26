import Picture from './picture'
import useLevelStore from '@/store/store-exercice'

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
  return (
    <button aria-label="Bouton pour ouvrir le modal de démarrage">
      <Picture src="./Btn.svg" alt="Bouton vert avec drapeau" className="cursor-pointer" />
    </button>
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
