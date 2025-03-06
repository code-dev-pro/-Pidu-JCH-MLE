// Construire son jeu de données
// 5cadenas= 5exercices (5questions (4choix de reponses dont une correct))

// const exercices: [
//   {
//     id: 1
//     title: 'Exercice 1'
//     questions: [
//       {
//         id: 1
//         question: "Choisi le bon fruit que tu vois sur l'image ?"
//         choices: [
//           { id: 1; label: 'Pomme' },
//           { id: 2; label: 'Poire' },
//           { id: 3; label: 'Orange' },
//           { id: 4; label: 'Banane' },
//         ]
//         answer: 1
//         questions: [
//           {
//             id: 2
//             question: "Choisi le bon fruit que tu vois sur l'image ?"
//             choices: [
//               { id: 1; label: 'Pomme' },
//               { id: 2; label: 'Poire' },
//               { id: 3; label: 'Orange' },
//               { id: 4; label: 'Banane' },
//             ]
//             answer: 4
//           },
//         ]
//       },
//     ]
//   },
// ]

// jeu de données pour le tracking des QUESTIONS/REPONSES

// le tracker pour vérifier si la réponse est bonne ou mauvaise
// enregistrer les choix de réponses utilisateur

// Chaque exercice a :

// 5 exercices
// Chaque exercice contient 5 questions
// Chaque question est associée à une image
// L'utilisateur doit choisir 1 réponse parmi 4 choix

// structure des données :
// exerciseId : Numéro de l'exercice
// questionId : Numéro de la question
// imageUrl : Lien vers l'image affichée pour la question
// selectedAnswer : Réponse choisie par l'utilisateur ("1", "2", "3", "4")
// isCorrect : Boolean indiquant si la réponse est correcte (true ou false)

// const userResponses = [
//   {
//     exerciseId: 1,
//     questions: [
//       {
//         questionId: 1,
//         imageUrl: "img1.jpg",
//         selectedAnswer: "2",
//         isCorrect: true,
//       },
//       {
//         questionId: 2,
//         imageUrl: "img2.jpg",
//         selectedAnswer: "4",
//         isCorrect: false,
//       },
