import useSound from 'use-sound'
import Picture from '@/components/picture'

interface CardAudio {
  media: string
}

export default function CardAudio({ media }: CardAudio) {
  const [play] = useSound(media, { volume: 1.5 })
  const onClickHandler = () => {
    play()
  }
  return (
    <button
      onClick={onClickHandler}
      className="cursor-pointer hover:scale-130 transition-transform duration-300"
    >
      <Picture src="./img/components/icon-audio.svg" alt="audio" />
    </button>
  )
}
