import { useState, useEffect } from 'react'

export default function MyButton() {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) {
      console.log('Le bouton a été cliqué !')
    }
  }, [clicked])

  const handleClick = () => {
    setClicked(true)
  }

  const labelButton = clicked ? 'Clicked !' : 'Click !'
  return <button onClick={handleClick}>{labelButton}</button>
}
