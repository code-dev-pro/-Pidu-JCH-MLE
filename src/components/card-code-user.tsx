import { useEffect, useState } from 'react'
import useAuthStore from '@/store/tracking/tracker-auth'
import Picture from './picture'

const CardCode = () => {
  const { codeUser } = useAuthStore()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (codeUser !== null) {
      setIsLoading(false)
    }
  }, [codeUser])

  if (isLoading) {
    return <p>Chargement...</p>
  }

  return (
    <div className="flex min-w-19 gap-3 h-7 rounded-2xl bg-[#095F38] relative">
      <div className="w-[30px] h-[30px]">
        <Picture
          src="./img/user.svg"
          alt="Score illustration"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="filter invert brightness-0 text-2xl mr-[7px]">
        <p>{codeUser ? codeUser : 'Code non disponible'}</p>
      </div>
    </div>
  )
}

export default CardCode
