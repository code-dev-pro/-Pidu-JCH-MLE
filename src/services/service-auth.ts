const authenticateCode = async (code_user: string) => {
  try {
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code_user }),
    })

    return await response.json()
  } catch (error) {
    console.error('Erreur serveur:', error)
    return { success: false, message: 'Erreur serveur' }
  }
}
export default authenticateCode
