import { Answer } from '@/store/tracking/answer'

export function sortExercises(data: Answer[]): Answer[] {
  return data.sort((a, b) => b.exercise_id - a.exercise_id || b.question_id - a.question_id)
}
