import { useState, useEffect, useRef } from 'react'

function ButtonSquare() {
  const [value, setValue] = useState('')
  const ref = useRef(0)
  console.log('je suis après ma déclaration de mon useRef')

  function handleClick() {
    setValue('X')
    ref.current = ref.current + 1
    console.log('Le bouton à était cliqué ' + ref.current + ' fois !')
  }

  useEffect(() => {
    console.log('je suis dans ma condition useEffect')
    if (value !== '') {
      console.log(`Le bouton contient : ${value}`)
    }
  }, [value])

  return <button onClick={handleClick}> {value} </button>
}
console.log('je suis après ma condition')
export default function NewButton() {
  console.log('composant NewButton')
  return (
    <>
      <ButtonSquare />
      <ButtonSquare />
    </>
  )
}
