import LevelComponent from '@/components/level-component'
import { LevelComponentProps } from '@/components/level-component'

export default function Level({ userId }: LevelComponentProps) {
  return <LevelComponent userId={userId} />
}
