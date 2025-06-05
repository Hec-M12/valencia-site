import React from "react"

interface FooterSectionProps {
  children: React.ReactNode
  title?: string
}

export default function FooterSection({ children, title }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h4 className="text-lg font-semibold text-instituto-yellow">{title}</h4>
      )}
      <div className="space-y-2">
        {children}
      </div>
    </div>
  )
} 