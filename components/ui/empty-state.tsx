import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  actionLabel: string
  actionHref: string
}

export function EmptyState({ icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="mb-6">{icon}</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{description}</p>
      <Link href={actionHref}>
        <Button size="lg">{actionLabel}</Button>
      </Link>
    </div>
  )
}
