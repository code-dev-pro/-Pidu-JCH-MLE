export const data = [
  {
    id: 1,
    title: 'Exercice 1',
    questions: [
      {
        id: 1,
        image: '',
        question: "Choisi le bon fruit que tu vois sur l'image ?",
        choices: [
          { id: 1, label: 'Pomme', isCorrect: true },
          { id: 2, label: 'Poire', isCorrect: false },
          { id: 3, label: 'Orange', isCorrect: false },
          { id: 4, label: 'Banane', isCorrect: false },
        ],
        answer: 1,
      },
      {
        id: 2,
        question: 'Choisi le bon légume ?',
        image: '',
        choices: [
          { id: 1, label: 'Carotte', isCorrect: false },
          { id: 2, label: 'Poivron', isCorrect: false },
          { id: 3, label: 'Choux', isCorrect: false },
          { id: 4, label: 'Salade', isCorrect: true },
        ],
        answer: 4,
      },
    ],
  },
]
