import React, { useState } from 'react'
import CardService from './card-service.component'

interface ServicesSectionProps {
  services: {
    name: string
    description: string
  }[]
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
}) => {
  const [openService, setOpenService] = useState<string | null>(null)
  const [showDescription, setShowDescription] = useState(false)

  const handleCardClick = (serviceName: string) => {
    setShowDescription(!showDescription)
    setOpenService((prevService) =>
      prevService === serviceName ? null : serviceName,
    )
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-bombing text-6xl md:text-8xl text-white md:text-start md:pl-28 md:mt-28 mt-11 text-center ">
        Serviços
      </h1>
      <div className="flex flex-wrap justify-evenly items-center mt-11">
        {services?.map((service, index) => (
          <CardService
            key={(service.name, index)}
            service={service}
            onCardClick={() => handleCardClick(service.name)}
            isOpen={openService === service.name}
          />
        ))}
      </div>
    </div>
  )
}
