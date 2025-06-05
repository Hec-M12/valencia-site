"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
}

export interface ContactFormData {
  nombre: string
  email: string
  mensaje: string
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo
        </label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre completo"
          className="w-full"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Correo electrónico
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          className="w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu consulta aquí..."
          rows={4}
          className="w-full"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>

      <Button 
        type="submit"
        className="w-full bg-instituto-blue hover:bg-instituto-blue/90 text-white py-3 text-lg font-semibold"
      >
        Enviar consulta
      </Button>
    </form>
  )
} 