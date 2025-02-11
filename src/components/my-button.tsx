import { useState, useEffect, useRef } from 'react'

export default function MyButton() {
  const [clicked, setClicked] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = clicked ? 'lightblue' : 'white'
      console.log(clicked ? 'Le bouton est cliqué et bleu' : 'Le bouton est décoché et blanc')
    }
  }, [clicked])

  return (
    <button ref={buttonRef} onClick={() => setClicked(!clicked)}>
      {clicked ? 'Clicked !' : 'Click !'}
    </button>
  )
}
