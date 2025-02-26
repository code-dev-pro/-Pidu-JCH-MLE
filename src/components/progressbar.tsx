import { useState } from 'react'

export default function Progressbar() {
  const [progress, setprogress] = useState(0)
  const count = () => {
    if (progress + 20 > 100) return
    setprogress(progress + 20)
  }

  return (
    <>
      <div className="w-full max-w-[895px] bg-gray-200 rounded-full h-[16px] overflow-hidden">
        <div
          className="bg-[#FF8B2D] rounded-full h-[16px] transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button onClick={count}>incrémenter</button>
    </>
  )
}
