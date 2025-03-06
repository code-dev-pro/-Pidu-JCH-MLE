import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  )
}

export default Layout
