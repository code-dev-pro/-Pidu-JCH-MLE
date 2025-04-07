function Timer({ timer }: { timer: string }) {
  return <img src={timer} alt="picture timer" />
}
function Title({ title }: { title: string }) {
  return <p className="text-lg font-semibold text-gray-900">{title}</p>
}
function Texte({ text }: { text: string }) {
  return <p className=" text-gray-600 text-sm">{text}</p>
}
export default function Card() {
  return (
    <>
      <div className="flex flex-wrap gap-4  ">
        <div className="flex flex-row items-center gap-4 p-4 border-1 border-gray-200 rounded-3xl pr-30 transition-all duration-300 hover:border-[#FF8B2D] hover:bg-[#FFF7F0]">
          <Timer timer="./10mins.svg" />
          <div className="flex flex-col text-left">
            <Title title="Rookie" />
            <Texte text="Study 10 minutes a day" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 p-4 bg-white border-1 border-gray-200 rounded-3xl pr-30 transition-all duration-300 hover:border-[#FF8B2D] hover:bg-[#FFF7F0]">
          <Timer timer="./30mins.svg" />
          <div className="flex flex-col text-left">
            <Title title="Athlete" />
            <Texte text="Study 30 minutes a day" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 p-4 bg-white border-1 border-gray-200 rounded-3xl pr-30 transition-all duration-300 hover:border-[#FF8B2D] hover:bg-[#FFF7F0]">
          <Timer timer="./60mins.svg" />
          <div className="flex flex-col text-left">
            <Title title="Master" />
            <Texte text="Study 60 minutes a day" />
          </div>
        </div>
      </div>
    </>
  )
}
