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
    console.log(' condition useEffect sans valeur')
  }, [])

  return <button onClick={handleClick}> {value} </button>
}
console.log('je suis après return')
export default function NewButton2() {
  console.log('composant NewButton')
  return (
    <>
      <ButtonSquare />
      <ButtonSquare />
    </>
  )
}
