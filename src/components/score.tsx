interface ScoreProps {
  value: number | null
}

function Score({ value }: ScoreProps) {
  return <div className="text-2xl font-bold text-[#FF8B2D]">{value}</div>
}

export default Score
