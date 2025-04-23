import Picture from '@/components/picture'

interface CardValidedProps {
  status?: 'correct' | 'incorrect' | 'pending'
  selected_choice: string
}

function CardValided({ status, selected_choice }: CardValidedProps) {
  const iconColor =
    status === 'correct'
      ? './img/check-icon.svg'
      : status === 'incorrect'
        ? './img/Checked.svg'
        : './img/check-gray.svg'

  return (
    <div className="flex space-x-4">
      <div
        className={`${
          status === 'correct'
            ? 'bg-[#DFF8EC]'
            : status === 'incorrect'
              ? 'bg-[#FBF4DC]'
              : 'bg-[#F6F6F9]'
        } rounded-[13px] w-[177px] h-[76px] flex items-center justify-center p-4`}
      >
        <div className="flex flex-col items-center space-y-2">
          <Picture className="w-[35px] h-[35px]" src={iconColor} alt="icon" />
          <p className="text-sm text-gray-700 text-center">{selected_choice}</p>
        </div>
      </div>
    </div>
  )
}
export default CardValided
