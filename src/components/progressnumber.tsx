import useProgressStore from '@/store/tracking/tracker-progress'

interface ProgressNumberProps {
  className?: string
  colorNumber?: string
  currentColor?: string
  value?: number
  isEnd?: boolean
}
export default function ProgressNumber({
  className = '',
  currentColor = 'text-black',
  colorNumber = 'text-neutral-400',
  value,
  isEnd,
}: ProgressNumberProps) {
  const { progressNumber } = useProgressStore()
  const num = value ? value : progressNumber
  const total = isEnd ? 25 : 5
  return (
    <>
      <div className={className}>
        <span className={currentColor}>{num}/</span>
        <span className={colorNumber}>{total}</span>
      </div>
    </>
  )
}
