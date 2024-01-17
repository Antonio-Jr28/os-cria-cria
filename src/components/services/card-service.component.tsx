import React, { useState } from 'react'

interface CardServiceProps {
  service: {
    name: string
    description: string
  }
}

export const CardService: React.FC<CardServiceProps> = ({ service }) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleCardClick = () => {
    setShowDescription(!showDescription)
  }

  return (
    <div
      className={`border border-yellow-600 items-center justify-center rounded-lg w-[250px] md:w-[400px] mt-3 ${
        showDescription ? 'bg-trasnparet' : ''
      }`}
      onClick={handleCardClick}
    >
      <h1 className="text-3xl text-center text-white p-2 md:p-5">
        {service?.name}
      </h1>
      {showDescription && (
        <p className="text-lg text-center text-white p-2 md:p-5">
          {service?.description}
        </p>
      )}
    </div>
  )
}
