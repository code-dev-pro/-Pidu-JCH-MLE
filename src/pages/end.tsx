import CustomButton from '@/components/button/button-long'
import Picture from '@/components/picture'
import useLevelStore from '@/store/tracking/level-progress'
import useProgressStore from '@/store/tracking/exercise-progress'
import useTotalQuizStore from '@/store/tracking/total-answer'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/tracking/auth'
import { API_URL } from '@/config/api'
import { ROUTES, SOUND } from '@/const'
import { useEffect } from 'react'
import useSound from 'use-sound'

const colors = ['#ff0', '#ff6347', '#32cd32', '#1e90ff', '#ffa500']
const confettiCount = 50

export default function TheEnd() {
  const navigate = useNavigate()
  const { resetTotalAnswers } = useTotalQuizStore()
  const { resetProgress } = useProgressStore()
  const { setLevel } = useLevelStore()
  const { user_id } = useAuthStore()
  const [play] = useSound(`/${SOUND.FINISH}`, { volume: 0.25 })
  useEffect(() => {
    play()
  }, [play])
  async function deleteUserProgress(user_id: number) {
    try {
      const response = await fetch(`${API_URL}/delete/${user_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()
      if (response.ok) {
        console.log(result.message)
      } else {
        console.log('Erreur lors de la suppression, statut:', response.status, result.error)
      }
    } catch (err) {
      console.error('Erreur réseau ou serveur:', err)
    }
  }
  const handleClick = async () => {
    if (user_id) {
      await deleteUserProgress(user_id)

      resetTotalAnswers()
      resetProgress()
      setLevel(1)
      navigate(`/${ROUTES.LEVEL}`)
    } else {
      console.error('Utilisateur non authentifié')
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative confetti-container">
        <div className="flex flex-col items-center justify-center gap-15">
          <Picture src="./img/pidu/bye.svg" alt="pidu de fin" />
          <p className="text-xl sm:text-lg md:text-2xl">
            Merci d’avoir joué ! <br /> Tu es arrivé à la fin de cette aventure, mais ce n’est que
            le début… De nouvelles surprises arriveront prochainement.
            <br />À très bientôt pour la suite !
          </p>
          <CustomButton text="Rejouer" onClickHandler={handleClick} />
        </div>
        {[...Array(confettiCount).keys()].map((_, index) => (
          <div
            className="confetti"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
            key={`confetti_${index}`}
          />
        ))}
      </div>
    </>
  )
}
