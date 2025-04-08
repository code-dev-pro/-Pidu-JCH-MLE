import Title from '@/components/title'
import ContentCorrectAnswer from '@/components/card-correct-answer'
import CardReward from '@/components/card-reward'
import CustomButton from '@/components/buttonlong'
import useQuizStore from '@/store/tracking/tracker-answer'
import useTotalQuizStore from '@/store/tracking/tracker-total-answer'
import useProgressStore from '@/store/tracking/tracker-progress'
import useLevelStore from '@/store/store-level'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ROUTES } from '@/const'

export default function Result() {
  const { answers, resetAnswers } = useQuizStore() // Récupère les réponses de l'utilisateur et la fonction pour les réinitialiser
  const { resetProgress } = useProgressStore() // Récupère la fonction pour réinitialiser la progression
  const { addTotalAnswer } = useTotalQuizStore() // Récupère la fonction pour ajouter le total des réponses enregistrées
  const { nextLevel, level } = useLevelStore() // Récupère la fonction pour passer au niveau suivant et le niveau actuel
  const isFinished = useRef<boolean>(false) // Référence mutable pour savoir si le dernier niveau est atteint (évite un re-rendu)
  const resultCorrect = answers.filter(answer => answer.iscorrect).length // Calcule le nombre de réponses correctes
  const navigate = useNavigate() // Hook pour naviguer entre les pages

  // Fonction appelée lorsqu'on clique sur un bouton (ex: passer au niveau suivant ou terminer)
  const handleClick = () => {
    addTotalAnswer(answers) // Ajoute les réponses actuelles au total des réponses
    // Réinitialise les réponses et la progression du quiz
    // Vérifie si le dernier niveau est atteint
    resetAnswers()
    resetProgress()
    if (isFinished.current) {
      navigate(`/${ROUTES.COMPLETED}`) // Redirige vers la page de fin du quiz
    } else {
      nextLevel() // Passe au niveau suivant
      navigate(`/${ROUTES.LEVEL}`) // Redirige vers la page du niveau suivant
    }
  }
  // Met à jour isFinished pour savoir si l'utilisateur est au dernier niveau
  useEffect(() => {
    if (level === answers.length) {
      isFinished.current = true // Marque le quiz comme terminé
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]) // Exécuté à chaque changement du niveau

  return (
    <>
      <img src="./Background-Bilan2.svg" className="w-screen" alt="Background" />
      <Title tag="h1" title="Bilan exercice" className="p-5 text-center" />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-7 mt-5">
        <ContentCorrectAnswer value={resultCorrect} />
        <CardReward value={resultCorrect} />
      </div>
      <div className="flex justify-center gap-12 mt-7">
        <CustomButton icon="./Arrow.svg" onClickHandler={handleClick} />
      </div>
    </>
  )
}
