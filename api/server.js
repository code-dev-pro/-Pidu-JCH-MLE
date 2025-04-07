require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { neon } = require('@neondatabase/serverless')

// Initialisation de la connexion à la base de données
let sql
try {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL environment variable is not set')
  }
  sql = neon(process.env.DATABASE_URL)
} catch (error) {
  console.error('Error initializing database connection:', error)
}

// Création de l'application Express
const app = express()
app.use(cors())
app.use(express.json())

// Création d'un routeur pour les routes API
const apiRouter = express.Router()

// Route de test pour vérifier que le serveur fonctionne
apiRouter.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' })
})

// Route de test pour vérifier que le serveur fonctionne
apiRouter.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Middleware pour gérer les erreurs de base de données
apiRouter.use((req, res, next) => {
  if (!sql) {
    return res.status(500).json({
      error: 'Database connection not available',
      message:
        'The server could not connect to the database. Please check the DATABASE_URL environment variable.',
    })
  }
  next()
})

// Route pour récupérer tous les exercices
apiRouter.get('/exercises', async (req, res) => {
  try {
    const exercisesWithDetails = await sql`
      SELECT 
        e.id_exercise AS exercise_id, 
        e.title_exercise AS exercise_title,
        json_agg(
          json_build_object(
            'id', q.id_question, 
            'question', q.question_question, 
            'image', q.image_question,
            'help', q.help_question,
            'choices', (
                SELECT json_agg(
                    json_build_object(
                        'id', c.id_choice, 
                        'label', c.label_choice, 
                        'iscorrect', c.iscorrect_choice
                    ) ORDER BY c.id_choice ASC
                ) 
               FROM choice c 
                WHERE c.question_id = q.id_question
            )
          )ORDER BY q.id_question ASC
        ) AS questions
      FROM exercise e
      LEFT JOIN question q ON q.exercise_id = e.id_exercise
      GROUP BY e.id_exercise, e.title_exercise
      ORDER BY e.id_exercise ASC
    `

    res.json(exercisesWithDetails)
  } catch (error) {
    console.error('Erreur lors de la récupération des exercices :', error)
    res.status(500).json({ error: 'Impossible de récupérer les exercices' })
  }
})

apiRouter.post('/code', async (req, res) => {
  try {
    const { code_user } = req.body

    const generatedCode = code_user

    const result = await sql`
      INSERT INTO "user" ("code_user") 
      VALUES (${generatedCode}) 
      RETURNING "id_user", "code_user"
    `

    res.status(201).json({
      success: true,
      data: result[0],
    })
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du code:", error.message || error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
})

apiRouter.post('/auth', async (req, res) => {
  try {
    const { code_user } = req.body
    console.log('Code utilisateur reçu:', code_user)

    if (!code_user) {
      return res.status(400).json({ success: false, message: 'Code requis.' })
    }

    const result = await sql`SELECT * FROM "user" WHERE "code_user" = ${code_user}`

    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Code valide !',
        userId: result[0].id_user,
      })
    } else {
      res.status(404).json({ success: false, message: 'Code invalide.' })
    }
  } catch (error) {
    console.error('Erreur serveur:', error)
    res.status(500).json({ success: false, message: 'Erreur serveur.' })
  }
})

apiRouter.post('/answers', async (req, res) => {
  try {
    const { userId, exerciseId, questionId, selectedChoice, iscorrect } = req.body

    console.log('Données reçues :', { userId, exerciseId, questionId, selectedChoice, iscorrect })

    if (
      !userId ||
      !exerciseId ||
      !questionId ||
      selectedChoice === undefined ||
      iscorrect === undefined
    ) {
      console.error(' Données incomplètes :', {
        userId,
        exerciseId,
        questionId,
        selectedChoice,
        iscorrect,
      })
      return res.status(400).json({ error: 'Données incomplètes' })
    }

    await sql`
      INSERT INTO answers (user_id, exercise_id, question_id, selected_choice, iscorrect) 
           VALUES (${Number(userId)}, ${Number(exerciseId)}, ${Number(questionId)}, ${String(selectedChoice)}, ${Boolean(iscorrect)})
    `

    res.status(201).json({ message: 'Réponse enregistrée' })
  } catch (error) {
    console.error('Erreur:', error)
    res.status(500).json({ error: 'Erreur serveur', details: error.message })
  }
})

apiRouter.get('/level/:userId', async (req, res) => {
  const { userId } = req.params

  try {
    const result = await sql`
      SELECT exercise_id, question_id, selected_choice, iscorrect
      FROM answers
      WHERE user_id = ${userId}
      ORDER BY exercise_id , question_id 
    `

    if (result.length > 0) {
      res.json(result)
    } else {
      res.status(404).json({ error: 'Aucune progression trouvée pour cet utilisateur' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
})

apiRouter.post('/progress/:userId', async (req, res) => {
  const { userId } = req.params
  const { exercise_id, question_id, selected_choice, iscorrect } = req.body

  try {
    const result = await sql`
      INSERT INTO answers (user_id, exercise_id, question_id)
      VALUES (${userId}, ${exercise_id}, ${question_id})
      ON CONFLICT (user_id, exercise_id, question_id) 
      DO UPDATE SET selected_choice = ${selected_choice}, iscorrect = ${iscorrect}

    `

    console.log('Progression mise à jour :', result)
    if (result) {
      res.json({ message: 'Progression mise à jour avec succès' })
    } else {
      res.status(400).json({ error: 'Erreur lors de la mise à jour de la progression' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
})

apiRouter.post('/delete/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const result = await sql`
      DELETE FROM answers WHERE user_id = ${userId}
    `

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Progression supprimée avec succès' })
    } else {
      res
        .status(200)
        .json({ message: 'Aucune progression trouvée, suppression effectuée avec succès.' })
    }
  } catch (err) {
    console.error('Erreur de requête:', err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
})

// Utilisation du routeur pour les routes API
app.use('/api', apiRouter)

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  })
}

module.exports = app
