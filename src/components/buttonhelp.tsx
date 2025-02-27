import Picture from './picture'
import { useState } from 'react'
import Title from './title'
export default function ButtonHelp() {
  const [showing, setShowing] = useState(false)

  const handleClick = () => {
    setShowing(!showing)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 rounded-xl hover:bg-neutral-100 cursor-pointer relative"
        aria-label="Aide sur le jeu"
      >
        <Picture src="./Guess-the-Word.svg" alt="Icône d'aide" />
      </button>
      {showing && (
        <div className="relative w-fit max-w-md p-4 bg-[#FBF4DC] rounded-2xl shadow-lg text-center left-1/2 transform -translate-x-1/2">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FBF4DC] rotate-45"></div>
          <button onClick={handleClick} aria-label="fermeture du modal" className="self-end">
            <Picture
              src="./Close-Circle.svg"
              alt="Icône de fermeture du modal"
              className="cursor-pointer absolute top-2 right-2"
            />
          </button>
          <Title tag="h2" title="phrase d'aide" />
        </div>
      )}
    </>
  )
}
