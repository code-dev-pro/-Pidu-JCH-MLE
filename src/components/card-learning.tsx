import { useEffect, useState } from 'react'

function CardChild({ img, title }: { img: string; title: string }) {
  return (
    <div className="rounded-xl w-64 h-40 flex flex-col items-center justify-center p-4 border border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]">
      <img src={img} alt={title} className="w-16 h-16 object-contain mb-2" />
      <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
    </div>
  )
}

export default function CardLearning() {
  const [categories, setCategories] = useState<{ img: string; title: string }[]>([])

  useEffect(() => {
    fetch('http://localhost:3003/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`)
        }
        return response.json()
      })
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Erreur lors de la récupération des catégories :', error))
  }, [])

  return (
    <div className="grid grid-cols-2 gap-24 place-items-center">
      {Array.isArray(categories) ? (
        categories.map((category, index) => (
          <CardChild key={index} img={category.img} title={category.title} />
        ))
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  )
}
