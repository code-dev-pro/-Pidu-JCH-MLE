import Title from '@/components/title'
import Progressbar from '@/components/progress-bar'
import ButtonHelp from '@/components/button-help'
import ProgressNumber from '@/components/progress-number'
import CardAnswer from '@/components/card-answer'
import CustomButton from '@/components/button-long'
import useProgressStore from '@/store/tracking/tracker-progress'
import useExerciseStore from '@/store/data/exercise'
import useLevelStore from '@/store/level-progress'
import Feedback from '@/components/feedback'
import useQuizStore from '@/store/tracking/tracker-answer'
import { useState } from 'react'
import useFeedbackStore from '@/store/data/feedback'
import useAnswerStore from '@/store/selected-answer'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/tracking/tracker-auth'
import { ROUTES } from '@/const'

export default function Exercice() {
  const { progressNumber, increaseProgress } = useProgressStore() //Récupère la valeur actuelle de la progression et une fonction pour l'augmenter
  const { exercises } = useExerciseStore() // Récupère la liste des exercices
  const { level } = useLevelStore() // Récupère le niveau actuel
  const { setClickedIndex } = useAnswerStore() // Récupère une fonction pour enregistrer l'index de la réponse sélectionnée
  const { addAnswer } = useQuizStore() // Récupère une fonction pour enregistrer une réponse au quiz
  const { setValue } = useFeedbackStore() // Récupère une fonction pour définir une valeur dans le store de feedback
  const data = exercises[level - 1] // Sélectionne les données de l'exercice correspondant au niveau actuel
  const exerciseId = level // Identifiant de l'exercice basé sur le niveau actuel
  const questionId = progressNumber // Identifiant de la question basé sur le numéro de progression

  const title = data.questions[progressNumber - 1].question // Récupère le titre (question) de la question actuelle en fonction du numéro de progression
  const image = data.questions[progressNumber - 1].image // Récupère l'image associée à la question actuelle
  const choices = data.questions[progressNumber - 1].choices // Récupère les choix de réponse pour la question actuelle
  const help = data.questions[progressNumber - 1].help // Récupère l'aide éventuelle pour la question actuelle
  const question = data.questions[progressNumber - 1] // Récupère l'objet complet de la question actuelle
  const label = question.choices.find(choice => choice.iscorrect)?.label || '""' // Trouve le choix de réponse correct et récupère son label (texte affiché), sinon retourne une chaîne vide

  // Déclare un état pour stocker le choix sélectionné par l'utilisateur, qui peut être null par défaut
  const [selectedChoice, setSelectedChoice] = useState<{
    id: number
    label: string
    iscorrect: boolean
  } | null>(null)

  const navigate = useNavigate() // Hook pour gérer la navigation entre les pages
  const [showing, setShowing] = useState(false) // Déclare un état pour contrôler l'affichage d'un élément (ex: validation, feedback)
  // Fonction appelée pour changer la progression de l'exercice
  const onChangedProgress = () => {
    setClickedIndex(-1)
    setSelectedChoice(null)
    // Vérifie si la progression a atteint la dernière question (ici, la 5e question)

    if (progressNumber === data.questions.length) {
      navigate(`/${ROUTES.RESULT}`)
      return
    }
    // Incrémente la progression et cache l'affichage (ex: feedback)
    increaseProgress()
    setShowing(false)
  }
  // Fonction déclenchée lorsqu'un utilisateur valide son choix
  const onClickHandler = () => {
    const userId = useAuthStore.getState().userId

    if (!userId) {
      console.error('Aucun ID utilisateur trouvé !')
      return
    }

    if (!selectedChoice) return

    addAnswer(userId, exerciseId, questionId, selectedChoice.label, selectedChoice.iscorrect)
    setValue(selectedChoice.iscorrect ? 'success' : 'error')
    setShowing(!showing)
  }

  // Fonction appelée lorsqu'un utilisateur sélectionne une réponse
  const setTracking = (choice: { id: number; label: string; iscorrect: boolean }) => {
    setSelectedChoice(choice) // Met à jour l'état du choix sélectionné avec l'objet correspondant
  }

  return (
    <>
      <div className="w-full relative">
        <div className="flex flex-row gap-6 justify-center mt-12 p-5 ">
          <div className="max-w-16 max-h-16 mt-[-20px]">
            <ButtonHelp text={help} />
          </div>
          <Progressbar />
          <ProgressNumber
            className="text-2xl font-bold text-green-500 mt-[-10px]"
            currentColor="text-green-500"
          />
        </div>
        <Title tag="h1" title={title} className="mb-14" />
        <div className="flex justify-center">
          <div
            className="w-[235px] h-[231px] bg-[#FDF3F2] rounded-2xl bg-contain bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-14">
          {choices.map((choice, index) => (
            <CardAnswer
              onClickHandler={() => setTracking(choice)} // Passe la fonction setTracking avec le choix sélectionné lorsqu'on clique sur la carte
              key={choice.id}
              index={index}
              label={choice.label}
              iscorrect={choice.iscorrect}
            />
          ))}
        </div>
        <div className="flex justify-center gap-12 p-8" hidden={showing}>
          <CustomButton onClickHandler={onClickHandler} text="Valider" disabled={!selectedChoice} />
        </div>

        {showing && (
          <div className="mt-10 p-2 absolute w-full bottom-0 md:relative md:mt-6">
            <Feedback correctAnswer={label} increaseProgress={onChangedProgress} />
          </div>
        )}
      </div>
    </>
  )
}
