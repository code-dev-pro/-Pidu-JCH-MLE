import { useState } from 'react'

function Cercle() {
  return <button> O </button>
}

function Square() {
  const [value, setValue] = useState(null)

  function handleClick() {
    setValue('X')
  }
  return <button onClick={handleClick}> {value} </button>
}

export default function MyButton() {
  return (
    <>
      <Cercle />
      <Square />
      <Square />
    </>
  )
}
