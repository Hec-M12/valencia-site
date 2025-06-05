interface SectionTitleProps {
  title: string
  description?: string
  className?: string
}

export default function SectionTitle({ title, description, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-instituto-blue mb-4">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
} 