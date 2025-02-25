import Picture from './picture'

export default function ButtonCercle() {
  return (
    <>
      <button aria-label="Bouton pour ouvrir le modal de démarrage">
        <Picture src="./Recent.svg" alt="Bouton vert avec drapeau" className="cursor-pointer" />
      </button>
      <button aria-label="Bouton du prochain niveau verrouillé">
        <Picture src="./Lock.svg" alt="Bouton avec cadenas" className="cursor-pointer" />
      </button>
    </>
  )
}
