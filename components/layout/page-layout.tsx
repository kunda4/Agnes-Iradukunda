import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
