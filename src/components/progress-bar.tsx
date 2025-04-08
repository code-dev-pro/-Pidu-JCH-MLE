import useProgressStore from '@/store/tracking/tracker-progress'

export default function Progressbar() {
  const newProgressBar = useProgressStore().progressBar
  console.log(newProgressBar)
  return (
    <>
      <div className="w-full max-w-[895px] bg-[#FFF7F0] rounded-full h-[16px] overflow-hidden">
        <div
          className="bg-[#FF8B2D] rounded-full h-[16px] transition-[width] duration-300"
          style={{ width: `${newProgressBar}%` }}
        />
      </div>
    </>
  )
}
