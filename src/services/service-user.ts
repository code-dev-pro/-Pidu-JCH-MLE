import useAuthStore from '@/store/tracking/auth'
import { API_URL } from '@/config/api'

const authenticateUser = async (code_user: string) => {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code_user }),
    })

    const data = await response.json()

    if (data.success) {
      useAuthStore.getState().setuser_id(data.user_id)
      console.log('Authentification réussie, ID:', data.user_id)
    } else {
      console.error("Erreur d'auth:", data.message)
    }
  } catch (error) {
    console.error('Erreur de requête:', error)
  }
}
export default authenticateUser
