import { useState, useEffect } from 'react'

function ButtonSquare() {
  const [value, setValue] = useState('')

  function handleClick() {
    setValue('X')
  }
  useEffect(() => {
    if (value !== '') {
      console.log(`Le bouton contient : ${value}`)
    }
  }, [value])

  return <button onClick={handleClick}> {value} </button>
}

export default function NewButton() {
  return (
    <>
      <ButtonSquare />
      <ButtonSquare />
    </>
  )
}
