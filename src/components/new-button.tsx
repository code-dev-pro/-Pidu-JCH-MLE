import { useState, useEffect, useRef } from 'react'

function ButtonSquare() {
  const [value, setValue] = useState('')
  const ref = useRef(0)

  function handleClick() {
    setValue('X')
    ref.current = ref.current + 1
    console.log('Le bouton à était cliqué ' + ref.current + ' fois !')
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
