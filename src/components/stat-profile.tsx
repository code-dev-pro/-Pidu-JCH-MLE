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

        console.log('BUG TITLE EXERCICE=>', answers)

        return (
          <React.Fragment key={level}>
            <div className="rounded-2xl w-[1255px] h-[250px] shadow-2xl shadow-gray-400 bg-white">
              <div className="flex flex-row justify-center items-center mt-5 gap-5">
                <Picture src={imageSrc} alt="illustration" className="w-[90px] h-[90px]" />
                <StatProgress progress={progress} />
                <p className="text-[#FF8B2D] text-xl">{progress}%</p>
              </div>
              <div className="w-[100%]">
                <div className="flex flex-row gap-5 justify-start mt-5">
                  {answers.reverse().map(answer => (
                    <div key={answer.question_id} className="w-[20%] flex justify-center">
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
