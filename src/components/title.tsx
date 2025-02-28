type TTitle = 'h1' | 'h2' | 'h3'

interface ITitle {
  title: string
  tag: TTitle
  className?: string
}

export default function Title({ title, tag, className }: ITitle) {
  const Tag = tag
  return <Tag className={className}>{title}</Tag>
}
