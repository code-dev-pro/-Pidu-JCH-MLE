import LevelComponent from '@/components/level-component'
import { LevelComponentProps } from '@/components/level-component'
import { SOUND } from '@/const'
import { useEffect } from 'react'
import useSound from 'use-sound'

export default function Level({ user_id }: LevelComponentProps) {
  const [play, { stop }] = useSound(`/${SOUND.CARTOON}`, { volume: 0.15 })

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])
  return <LevelComponent user_id={user_id} />
}
