import React, { useEffect } from 'react'
import useTotalQuizStore from '@/store/tracking/total-answer'
import Picture from '@/components/picture'
import CardValided from '@/components/card/card-valided'
import StatProgress from '@/components/progress/progress-bar-profile'
import { Answer } from '@/store/tracking/answer'
import useExerciseStore from '@/store/data/exercise'

export default function StatProfile() {
  const { totalAnswers } = useTotalQuizStore()
  const { exercises, loadExercises, isLoading, error } = useExerciseStore()

  useEffect(() => {
    loadExercises()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div>Chargement des exercices...</div>
  }

  if (error) {
    return <div>Erreur : {error}</div>
  }

  const groupedByExercise = new Map<number, Answer[]>()
  totalAnswers.forEach(answer => {
    const id = Number(answer.exercise_id) // conversion sécurisée
    if (!groupedByExercise.has(id)) {
      groupedByExercise.set(id, [])
    }
    groupedByExercise.get(id)!.push(answer)
  })

  const questionsPerExercise = exercises.reduce<Record<number, number>>((acc, ex) => {
    acc[ex.id] = ex.questions.length
    return acc
  }, {})

  const levels = Array.from(groupedByExercise.keys())

  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-10">
      {levels.map(level => {
        const answers = groupedByExercise.get(level) || []
        const totalQuestions = questionsPerExercise[level] || 1
        const progress = Math.min(Math.round((answers.length / totalQuestions) * 100), 100)

        const exercise = exercises.find(ex => ex.id === Number(level))

        const imageSrc = exercise?.image ? exercise.image : './img/default.webp'

        if (!exercise) {
          console.warn(`❌ Aucun exercice trouvé pour l'ID ${level}`)
        }

        return (
          <React.Fragment key={level}>
            <div className="rounded-2xl shadow-2xl shadow-gray-400 bg-white p-6 min-w-[80%] max-w-[80%] mx-auto">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Picture
                  src={imageSrc}
                  alt="illustration"
                  className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]"
                />
                <StatProgress progress={progress} />
                <p className="text-[#FF8B2D] text-lg sm:text-xl">{progress}%</p>
              </div>

              <div className="mt-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
                  {answers.reverse().map(answer => (
                    <div
                      key={answer.question_id}
                      className="flex justify-center w-full max-w-[90px] sm:max-w-[100px]"
                    >
                      <CardValided
                        status={answer.iscorrect ? 'correct' : 'incorrect'}
                        selected_choice={answer.selected_choice}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
