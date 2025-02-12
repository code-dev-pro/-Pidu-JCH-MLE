import { useState, useEffect, useRef } from 'react'

export default function MyButton3() {
  const [clicked, setClicked] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    console.log('je teste avec un tableau vide')
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = clicked ? 'lightblue' : 'white'
      console.log(clicked ? 'Le bouton est cliqué et bleu' : 'Le bouton est décoché et blanc')
    }
  }, [])

  return (
    <button ref={buttonRef} onClick={() => setClicked(!clicked)}>
      {clicked ? 'Clicked !' : 'Click !'}
    </button>
  )
}
