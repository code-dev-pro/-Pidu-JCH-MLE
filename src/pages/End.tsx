import { useEffect } from 'react'
import Picture from '@/components/picture'

export default function TheEnd() {
  useEffect(() => {
    const generateConfetti = () => {
      const confettiCount = 100
      const colors = ['#ff0', '#ff6347', '#32cd32', '#1e90ff', '#ffa500']
      const container = document.querySelector('.confetti-container')

      if (!container) return

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div')
        confetti.classList.add('confetti')
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

        confetti.style.left = `${Math.random() * 100}vw`
        confetti.style.animationDelay = `${Math.random() * 2}s`
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`

        container.appendChild(confetti)
      }
    }

    generateConfetti()
  }, [])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative confetti-container">
        <div className="flex flex-col items-center justify-center gap-15">
          <Picture src="./Outside.svg" alt="pidu de fin" />
          <p className="text-2xl">
            Merci d’avoir joué ! <br /> Tu es arrivé à la fin de cette aventure, mais ce n’est que
            le début… De nouvelles surprises arriveront dans la prochaine version.
            <br />À très bientôt pour la suite !
          </p>
        </div>
      </div>

      <style>{`
        .confetti-container {
          position: relative;
          overflow: hidden;
        }

        .confetti {
          position: absolute;
          top: -10px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: confettiFall linear infinite;
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </>
  )
}
