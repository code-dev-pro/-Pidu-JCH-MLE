import Picture from '@/components/picture'

interface ButtonProps {
  bgColor?: 'green' | 'orange'
  text?: string
  icon?: string
}

export default function CustomButton({ bgColor, text, icon }: ButtonProps) {
  const backgroundColor = bgColor === 'orange' ? '#FF8B2D' : '#19C472'

  const setContentButton = () => {
    if (text && text !== '') return <span className="font-semibold text-white">{text}</span>
    if (icon && icon !== '')
      return <Picture className="w-6 h-6 filter invert brightness-0" src={icon} alt="flèche" />
    return null
  }

  return (
    <button
      className="relative rounded-4xl w-[240px] h-[60px] flex items-center justify-center cursor-pointer"
      style={{ backgroundColor }}
      aria-label={text || 'Bouton avec icône'}
    >
      <Picture
        className="absolute top-1.5 left-2 w-[9px] h-[10px]"
        src="./Vector.svg"
        alt="vector"
      />
      {setContentButton()}
      <Picture
        className="absolute top-1.5 right-1 w-[30px] h-[15px]"
        src="./Ellipse.svg"
        alt="ellipse"
      />
    </button>
  )
}
