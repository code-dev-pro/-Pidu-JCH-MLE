function CardChild({ img, title }: { img: string; title: string }) {
  return (
    <div className="rounded-xl w-64 h-40 flex flex-col items-center justify-center p-4 border border-[#EAEEED] hover:bg-[#FFF7F0] hover:border-[#FF8B2D]">
      <img src={img} alt={title} className="w-16 h-16 object-contain mb-2" />
      <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
    </div>
  )
}

export default function CardLearning() {
  return (
    <div className="grid grid-cols-2 gap-24 place-items-center">
      <CardChild img="./Brain.svg" title="Brain training" />
      <CardChild img="./Travel.svg" title="Travel" />
      <CardChild img="./Job.svg" title="For Job" />
      <CardChild img="./Other.svg" title="Others" />
    </div>
  )
}
