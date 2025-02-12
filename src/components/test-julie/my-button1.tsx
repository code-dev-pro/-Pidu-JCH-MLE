import { useState, useEffect, useRef } from 'react'

export default function MyButton1() {
  const [clicked, setClicked] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    console.log('je suis avant la condition et dans le useEffect')
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = clicked ? 'lightblue' : 'white'
      console.log(clicked ? 'Le bouton est cliqué et bleu' : 'Le bouton est décoché et blanc')
    }
    // if (clicked) {
    //   setClicked(false)
    // } else {
    //   setClicked(true)
    // }
  }, [clicked])
  console.log('je suis avant return')
  return (
    <button ref={buttonRef} onClick={() => setClicked(!clicked)}>
      {clicked ? 'Clicked !' : 'Click !'}
    </button>
  )
}
