import { useState } from 'react'

interface ProgressNumberProps {
  className?: string
  colorNumber?: string
  currentColor?: string
}
export default function ProgressNumber({
  className = '',
  currentColor = 'text-black',
  colorNumber = 'text-neutral-400',
}: ProgressNumberProps) {
  const [currentQuestion] = useState(1)

  return (
    <>
      <div className={className}>
        <span className={currentColor}>{currentQuestion}/</span>
        <span className={colorNumber}>5</span>
      </div>
    </>
  )
}
