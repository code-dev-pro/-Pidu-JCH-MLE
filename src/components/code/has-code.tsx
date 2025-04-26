import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authenticateCode from '@/services/service-auth'
import useAuthStore from '@/store/tracking/auth'
import { ROUTES, SOUND } from '@/const'
import useSound from 'use-sound'
import { useGetExercise } from '@/services/service-answer'

export const HasCode = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setuser_id } = useAuthStore()
  const navigate = useNavigate()
  const [play] = useSound(`/${SOUND.CLICK}`, { volume: 0.25 })
  const { getExercise } = useGetExercise()

  const handleClick = () => {
    play()
  }

  const handleAuthCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userCode = inputRef.current?.value
    if (!userCode) {
      setMessage('Le code ne peut pas être vide.')
      return
    }

    setIsLoading(true)

    try {
      const response = await authenticateCode(userCode)

      if (response.success && typeof response.user_id === 'number' && response.user_id > 0) {
        setuser_id(response.user_id)
        await getExercise(response.user_id)
        setMessage('Code valide ✅')

        setTimeout(() => {
          setIsLoading(false)
          navigate(`/${ROUTES.LEVEL}`)
        }, 1000)
      } else {
        setMessage('Code invalide ❌')
        setTimeout(() => {
          if (inputRef.current) inputRef.current.value = ''
          setMessage('')
          setIsLoading(false)
        }, 1000)
      }
    } catch (error) {
      console.error('Erreur serveur:', error)
      setMessage('Erreur de connexion au serveur ❌')
      setTimeout(() => {
        if (inputRef.current) inputRef.current.value = ''
        setMessage('')
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col mt-2">
      <h2 className="text-xl font-semibold text-black">Entrez votre code</h2>
      <form onSubmit={handleAuthCode} className="flex flex-col items-center space-y-3">
        <input
          type="text"
          placeholder="Code utilisateur"
          ref={inputRef}
          required
          className="border p-2 rounded-md"
        />
        <button
          onClick={handleClick}
          type="submit"
          className="px-4 py-2 rounded-4xl bg-[#19C472] text-white cursor-pointer border-b-6 border-black/20 w-40 
          hover:scale-110 transition-transform duration-300"
          disabled={isLoading}
        >
          {isLoading ? 'Chargement...' : 'Valider'}
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  )
}
