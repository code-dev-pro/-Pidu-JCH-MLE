import useAuthStore from '@/store/tracking/tracker-auth'

const authenticateUser = async (code_user: string) => {
  try {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code_user }),
    })

    const data = await response.json()

    if (data.success) {
      useAuthStore.getState().setUserId(data.userId)
      console.log('Authentification réussie, ID:', data.userId)
    } else {
      console.error("Erreur d'auth:", data.message)
    }
  } catch (error) {
    console.error('Erreur de requête:', error)
  }
}
export default authenticateUser
