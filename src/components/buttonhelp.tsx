import Picture from './picture'
import { useClickAway } from '@uidotdev/usehooks'
import * as React from 'react'

interface ButtonHelpProps {
  text?: string
}
export default function ButtonHelp({ text }: ButtonHelpProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const refDiv = useClickAway(() => {
    setIsOpen(false)
  })

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="p-2 rounded-xl hover:bg-neutral-100 cursor-pointer relative"
        aria-label="Aide sur le jeu"
      >
        <Picture src="./Guess-the-Word.svg" alt="Icône d'aide" />
      </button>
      {isOpen && (
        <div
          ref={refDiv as React.Ref<HTMLDivElement>}
          className="relative w-dvw max-w-md p-4 bg-[#FBF4DC] rounded-2xl shadow-lg text-center left-1/2 transform -translate-x-1/2"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FBF4DC] rotate-45"></div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="fermeture du modal"
            className="self-end"
          >
            <Picture
              src="./Close-Circle.svg"
              alt="Icône de fermeture du modal"
              className="cursor-pointer absolute top-2 right-2"
            />
            {text}
          </button>
        </div>
      )}
    </>
  )
}
