interface FooterLinkProps {
  href: string
  text: string
}

export default function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <a 
      href={href} 
      className="block text-gray-300 hover:text-instituto-yellow transition-colors"
    >
      {text}
    </a>
  )
} 