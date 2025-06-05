import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ContactButtonProps {
  icon: LucideIcon
  text: string
  variant?: "default" | "outline"
  className?: string
  onClick?: () => void
}

export default function ContactButton({
  icon: Icon,
  text,
  variant = "outline",
  className = "",
  onClick
}: ContactButtonProps) {
  const baseClasses = "w-full py-4 text-lg font-semibold flex items-center justify-center space-x-3"
  const variantClasses = variant === "default" 
    ? "bg-green-600 hover:bg-green-700 text-white" 
    : "border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white"

  return (
    <Button
      variant={variant}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      <Icon size={24} />
      <span>{text}</span>
    </Button>
  )
} 