import { Exercise } from '@/store/data/exercise'
import { API_URL } from '@/config/api'

export const fetchExercises = async (): Promise<Exercise[]> => {
  try {
    const response = await fetch(`${API_URL}/exercises`)

    if (!response.ok) {
      throw new Error('Erreur lors du chargement des exercices!')
    }

    const exercices = await response.json()
    console.log(exercices)
    if (Array.isArray(exercices)) {
      return exercices
    } else {
      throw new Error("Les données retournées ne sont pas un tableau d'exercices")
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des exercices:', error)
    throw error
  } finally {
    console.log('Requête API terminée (succès ou échec)')
  }
}
