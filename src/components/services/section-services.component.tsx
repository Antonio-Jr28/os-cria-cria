import React from 'react'
import { CardServices } from './card-service.component'

interface ServicesSectionProps {
  services: {
    name: string
  }[]
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-bombing text-6xl md:text-8xl text-white md:text-start md:pl-28 md:mt-28 mt-20 text-center ">
        Serviços
      </h1>

      <CardServices />
    </div>
  )
}
