import Title from '@/components/title'
import CustomButton from '@/components/buttonlong'
import useExerciseStore from '@/store/data/exercise'
import { useEffect, useState } from 'react'
import { CodeGenerator } from '@/components/code-generator'
import { HasCode } from '@/components/has-code'

export default function Home() {
  const { isLoading, error, loadExercises } = useExerciseStore()
  const [showCodeGenerator, setShowCodeGenerator] = useState(false)
  const [showHasCode, setShowHasCode] = useState(false)

  useEffect(() => {
    loadExercises()
  }, [loadExercises])

  const handleStart = () => {
    setShowCodeGenerator(true) // Affiche CodeGenerator
    setShowHasCode(false) // Cache HasCode au cas où il était affiché
  }

  const handleShowHasCode = () => {
    setShowHasCode(true) // Affiche HasCode
    setShowCodeGenerator(false) // Cache CodeGenerator au cas où
  }

  return (
    <>
      <img src="./Background-Home.svg" className="w-screen" alt="Background" />
      <Title
        title="Bienvenue sur PIDU"
        tag="h1"
        className="mt-5 text-[#646A69] text-center text-2xl md:text-3xl lg:text-4xl"
      />
      <Title
        title="Pour apprendre l'anglais en s'amusant"
        tag="h2"
        className="mt-3 text-lg text-black md:text-xl lg:text-2xl text-center"
      />

      {isLoading && <p>Chargement...</p>}

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex gap-6">
              <CustomButton bgColor="green" text="Je veux un code" onClickHandler={handleStart} />
              <CustomButton
                bgColor="green"
                text="J'ai un code"
                onClickHandler={handleShowHasCode}
              />
            </div>
            {showCodeGenerator && <CodeGenerator />}
            {showHasCode && <HasCode />}
          </div>
        </>
      )}
    </>
  )
}
