import { useState } from 'react'

export default function ProgressNumber() {
  const [currentQuestion, setCurrentQuestion] = useState(1)

  const count = () => {
    if (currentQuestion + 1 > 5) return
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <>
      <div className="text-2xl ">
        <span className="text-green-500">{currentQuestion}/</span>
        <span className="text-neutral-400">5</span>
      </div>
      <button onClick={count}>incrémenter</button>
    </>
  )
}
