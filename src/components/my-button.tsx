import { useState } from 'react'

export default function MyButton() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }
  const labelButton = clicked ? 'Clicked !' : 'Click !'
  return <button onClick={handleClick}>{labelButton}</button>
}
