import saveCodeToDatabase from '@/services/service-code'
import generateCode from '@/utils'
import { useRef } from 'react'

export const CodeGenerator = () => {
  const codeRef = useRef<HTMLParagraphElement>(null)

  const handleGenerateCode = async () => {
    const newCode = generateCode()

    if (codeRef.current) {
      codeRef.current.textContent = newCode
    }

    await saveCodeToDatabase(newCode)
  }

  return (
    <>
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold">Code généré :</h2>
        <p ref={codeRef} className="text-lg font-bold">
          Cliquez sur le bouton pour générer un code
        </p>

        <button
          onClick={handleGenerateCode}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Générer un code
        </button>
      </div>
    </>
  )
}
