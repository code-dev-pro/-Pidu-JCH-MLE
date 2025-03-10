import Picture from '@/components/picture'

export default function TheEnd() {
  const confettiCount = 100
  const colors = ['#ff0', '#ff6347', '#32cd32', '#1e90ff', '#ffa500']

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
        {[...Array(confettiCount).keys()].map((_, index) => {
          return (
            <div
              className="confetti"
              style={{
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
              key={`confetti_${index}`}
            />
          )
        })}
      </div>
    </>
  )
}
