//mettre en place une fonction qui save le user
//fonction qui save les reponse en fonction de ce qu'on a definit avec l'Id du user
const saveCodeToDatabase = async (newCode: string) => {
  try {
    const response = await fetch('http://localhost:3000/code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code_user: newCode }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      console.log('Code enregistré avec succès !', data.data)
    } else {
      console.error('Erreur lors de l’enregistrement', data.message)
    }
  } catch (error) {
    console.error('Erreur réseau', error)
  }
}

export default saveCodeToDatabase
