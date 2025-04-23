import LevelComponent from '@/components/level-component'
import { LevelComponentProps } from '@/components/level-component'

export default function Level({ user_id }: LevelComponentProps) {
  return <LevelComponent user_id={user_id} />
}
