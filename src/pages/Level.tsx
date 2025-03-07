import Avatar from '@/components/card-avatar'
import CardRewardLevel from '@/components/card-reward-level'
// import ButtonLocked from '@/components/button-cercle'

export default function Level() {
  return (
    <>
      <img src="/Bg-L.jpg" alt="background" className="absolute inset-0 w-full h-full" />
      <div className="absolute top-0 left-0 flex flex-row p-4">
        <div className="relative p-2">
          <Avatar />
        </div>
        <div className="flex flex-row gap-7 p-7">
          <CardRewardLevel />
          <CardRewardLevel />
        </div>
      </div>
      {/* <div className="relative">
        <ButtonLocked />
      </div> */}
    </>
  )
}
