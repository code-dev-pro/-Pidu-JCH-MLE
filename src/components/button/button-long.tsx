import Picture from '@/components/picture'
import useSound from 'use-sound'
import { SOUND } from '@/const'
interface ButtonProps {
  bgColor?: 'green' | 'orange'
  text?: string
  icon?: string
  onClickHandler?: () => void
  disabled?: boolean
  className?: string
}

export default function CustomButton({
  onClickHandler,
  bgColor,
  text,
  icon,
  disabled,
}: ButtonProps) {
  const [play] = useSound(`/${SOUND.CLICK}`, { volume: 0.25 })

  const handleClick = () => {
    play()
    if (onClickHandler) onClickHandler()
  }

  const backgroundColor = bgColor === 'orange' ? '#FF8B2D' : '#19C472'

  const setContentButton = () => {
    if (text && text !== '') return <span className="font-semibold text-white">{text}</span>
    if (icon && icon !== '')
      return <Picture className="w-6 h-6 filter invert brightness-0" src={icon} alt="flèche" />
    return null
  }

  const buttonStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:scale-110 transition-transform duration-300'

  return (
    <button
      className={`relative rounded-4xl w-[240px] h-[60px] flex items-center justify-center cursor-pointer border-b-6 border-black/20 ${buttonStyles}`}
      style={{ backgroundColor }}
      aria-label={text || 'Bouton avec icône'}
      onClick={handleClick}
      disabled={disabled}
    >
      <Picture
        className="absolute top-1.5 left-2 w-[9px] h-[10px]"
        src="./img/components/vector-button.svg"
        alt="vector"
      />
      {setContentButton()}
      <Picture
        className="absolute top-1.5 right-1 w-[30px] h-[15px]"
        src="./img/components/ellipse-button.svg"
        alt="ellipse"
      />
    </button>
  )
}
