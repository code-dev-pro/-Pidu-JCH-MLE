function Child({ title }: { title: string }) {
  return <h1 className="text-3xl font-bold underline">{title}</h1>
}

export default function Parent() {
  return (
    <>
      <Child title="je suis un garçon" />
      <Child title="je suis une fille" />
    </>
  )
}
