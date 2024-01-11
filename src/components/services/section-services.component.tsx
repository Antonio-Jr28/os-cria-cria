import React from 'react'
import { Divider } from '../ divider/divider.component'
import { CardService } from './card-service.component'

interface Service {
  name: string
  description: string
}

interface ServicesSectionProps {
  services: Service[]
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-bombing text-8xl text-white md:text-start md:pl-28 md:mt-28 mt-11 text-center ">
        Serviços
      </h1>
      <div className="flex flex-wrap justify-evenly items-center mt-11">
        {services?.map((service, index) => (
          <CardService key={index} service={service} />
        ))}
      </div>
      <Divider />
    </div>
  )
}
