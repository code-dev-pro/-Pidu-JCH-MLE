import { useEffect, useState } from 'react'
import useAuthStore from '@/store/tracking/tracker-auth'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/const'

const CardCode = () => {
  const { code_user } = useAuthStore()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${ROUTES.PROFILE}`)
  }
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (code_user !== null) {
      setIsLoading(false)
    }
  }, [code_user])

  if (isLoading) {
    return <p>Chargement...</p>
  }

  return (
    <button onClick={handleClick} aria-label="Code utilisateur">
      <div className="filter invert brightness-0 text-3xl mr-[7px] cursor-pointer animate-bounce hover:animate-none hover:scale-110 transition-all duration-300 active:scale-95">
        <p>{code_user ? code_user : 'Code non disponible'}</p>
      </div>
    </button>
  )
}

export default CardCode
