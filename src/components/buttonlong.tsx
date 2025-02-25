import Picture from '@/components/picture'

interface ButtonProps {
  bgColor?: 'green' | 'orange'
  text?: string
  icon?: string
}

export default function CustomButton({ bgColor, text, icon }: ButtonProps) {
  const backgroundColor = bgColor === 'orange' ? '#FF8B2D' : '#19C472'

  return (
    <button
      className="relative rounded-4xl w-44 h-10 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor }}
      aria-label={text || 'Bouton avec icône'}
    >
      <Picture className="absolute top-1 left-1" src="./Vector.svg" alt="vector" />
      {text ? (
        <span className="font-semibold text-white">{text}</span>
      ) : (
        <Picture className="w-6 h-6 filter invert brightness-0" src={icon!} alt="fléche" />
      )}

      <Picture className="absolute top-0 right-1 w-5 h-5" src="./Ellipse.svg" alt="ellipse" />
    </button>
  )
}
