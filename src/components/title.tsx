import React from 'react'

type TTitle = 'h1' | 'h2' | 'h3'

interface ITitle {
  title: string
  tag: TTitle
  className?: string
  text?: string
}

function Title({ title, tag, className, text }: ITitle) {
  const Tag = tag
  const textHelp = text ? text : title
  return <Tag className={className}>{textHelp}</Tag>
}

export default React.memo(Title)
