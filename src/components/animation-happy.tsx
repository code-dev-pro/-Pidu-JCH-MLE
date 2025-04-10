import { useRive } from '@rive-app/react-canvas'

interface AnimationProps {
  src: string
  alt: string
  className: string
}

function AnimationHappy({ src, alt }: AnimationProps) {
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
  })
  return <RiveComponent style={{ width: 100, height: 100 }} aria-label={alt} />
}
export default AnimationHappy
