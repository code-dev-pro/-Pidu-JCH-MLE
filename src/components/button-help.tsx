import Picture from './picture'
import { useClickAway } from '@uidotdev/usehooks'
import * as React from 'react'
import useSound from 'use-sound'

interface ButtonHelpProps {
  text?: string
}
export default function ButtonHelp({ text }: ButtonHelpProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [play] = useSound('/sound/dragdrop.mp3', { volume: 0.25 })

  const refDiv = useClickAway(() => {
    setIsOpen(false)
  })

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true)
      play()
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
          className="absolute h-auto mt-19 w-dvw max-w-md p-4 bg-[#FBF4DC] rounded-2xl shadow-lg text-center left-1/2 transform -translate-x-1/2"
        >
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
