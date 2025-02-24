import Picture from './picture'
export default function ButtonHelp() {
  return (
    <button
      className="p-2 rounded-xl hover:bg-neutral-100 cursor-pointer"
      aria-label="Aide sur le jeu"
    >
      <Picture src="./Guess-the-Word.svg" alt="Icône d'aide" />
    </button>
  )
}
