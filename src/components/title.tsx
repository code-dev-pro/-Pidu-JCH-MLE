type TTitle = 'h1' | 'h2' | 'h3'

interface ITitle {
  title: string
  tag: TTitle
}

export default function Title({ title, tag }: ITitle) {
  if (tag === 'h1') return <h1>{title}</h1>
  if (tag === 'h2') return <h2>{title}</h2>
  if (tag === 'h3') return <h3>{title}</h3>
  return <h1>{title}</h1>
}
