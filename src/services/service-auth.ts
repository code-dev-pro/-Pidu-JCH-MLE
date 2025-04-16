import { API_URL } from '@/config/api'
import useAuthStore from '@/store/tracking/tracker-auth'

const authenticateCode = async (code_user: string) => {
  try {
    const response = await fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code_user }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      useAuthStore.getState().setUserId(data.userId)
      useAuthStore.getState().setCodeUser(code_user)
      useAuthStore.getState().setAvatarId(data.avatar_id)

      return data
    } else {
      return { success: false, message: 'Code invalide.' }
    }
  } catch (error) {
    console.error('Erreur serveur:', error)
    return { success: false, message: 'Erreur serveur' }
  }
}

export default authenticateCode
