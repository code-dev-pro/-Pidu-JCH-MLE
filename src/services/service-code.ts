//mettre en place une fonction qui save le user
//fonction qui save les reponse en fonction de ce qu'on a definit avec l'Id du user
import { API_URL } from '@/config/api'

const saveCodeToDatabase = async (newCode: string) => {
  try {
    const response = await fetch(`${API_URL}/code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code_user: newCode }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      console.error('Erreur lors de l’enregistrement', data.message)
    }
  } catch (error) {
    console.error('Erreur réseau', error)
  }
}

export default saveCodeToDatabase
