function Children({ title = 'je suis un titre' }: { title?: string }) {
  return <h1>{title}</h1>
}

export default function ComposantParent() {
  return (
    <>
      <Children />
      <Children title="je suis un garçon" />
    </>
  )
}
