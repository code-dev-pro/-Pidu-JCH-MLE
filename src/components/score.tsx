interface ScoreProps {
  value: number
}

function Score({ value }: ScoreProps) {
  return <div className="text-xl font-bold text-[#FF8B2D]">{value}</div>
}

export default Score
