import useProgressStore from '@/store/tracking/exercise-progress'
import useExerciseStore from '@/store/data/exercise'
import useLevelStore from '@/store/tracking/level-progress'
interface ProgressNumberProps {
  className?: string
  colorNumber?: string
  currentColor?: string
  value?: number
  isEnd?: boolean
}
export default function ProgressNumber({
  className = '',
  currentColor = 'text-black',
  colorNumber = 'text-neutral-400',
  value,
  isEnd,
}: ProgressNumberProps) {
  const { progressNumber } = useProgressStore()
  const num = value !== undefined ? value : progressNumber
  const { exercises } = useExerciseStore()
  const { level } = useLevelStore()

  // Calcul dynamique du total de questions
  const totalQuestions = exercises.reduce((sum, exercise) => {
    return sum + exercise.questions.length
  }, 0)

  const total = isEnd ? totalQuestions : exercises[level - 1].questions.length
  return (
    <>
      <div className={className}>
        <span className={currentColor}>{num}/</span>
        <span className={colorNumber}>{total}</span>
      </div>
    </>
  )
}
