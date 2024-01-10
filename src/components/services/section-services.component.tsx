import React from 'react'
import { Divider } from '../ divider/divider.component'

interface ServicesSectionProps {
  services: string[]
}
export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
}) => {
  return (
    <div className="pl-44 pt-10 pr-32">
      <h1 className="text-bombing text-8xl text-white">Serviços</h1>
      <ol className="grid md:grid-cols-2 gap-4 text-5xl pl-40 list-disc list-inside text-white pt-16">
        {services.map((service) => (
          <li>{service}</li>
        ))}
      </ol>
      <Divider />
      <h1 className="flex justify-end pr-20 text-bombing text-8xl text-white">
        Quem Somos?
      </h1>
    </div>
  )
}
