import type { ReactNode } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface SinglePageLayoutProps {
  children: ReactNode
}

export function SinglePageLayout({ children }: SinglePageLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  )
}
