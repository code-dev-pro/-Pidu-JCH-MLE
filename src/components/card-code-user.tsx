import { useEffect, useState } from 'react'
import useAuthStore from '@/store/tracking/tracker-auth'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/const'

const CardCode = () => {
  const { codeUser } = useAuthStore()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${ROUTES.EXERCISE}`)
  }
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
    <button onClick={handleClick} aria-label="Code utilisateur">
      <div className="filter invert brightness-0 text-3xl mr-[7px] cursor-pointer animate-bounce hover:animate-none hover:scale-110 transition-all duration-300 active:scale-95">
        <p>{codeUser ? codeUser : 'Code non disponible'}</p>
      </div>
    </button>
  )
}

export default CardCode
