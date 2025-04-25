import { Answer } from '@/store/tracking/answer'

export const sortAnswersByExerciseId = (answers: Answer[]): Answer[] => {
  return [...answers].sort((a, b) => a.exercise_id - b.exercise_id)
}
