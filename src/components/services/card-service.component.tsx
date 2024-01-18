import React from 'react'

interface CardServiceProps {
  service: {
    name: string
    description: string
  }
  onCardClick: () => void
  isOpen: boolean
}

const CardService: React.FC<CardServiceProps> = ({
  service,
  onCardClick,
  isOpen,
}) => {
  return (
    <div
      className={`border border-yellow-600 hover:bg-violet-500 cursor-pointer items-center justify-center rounded-lg w-[250px] md:w-[400px] mt-3 ${
        isOpen ? 'bg-transparent' : ''
      }`}
      onClick={onCardClick}
    >
      <h1 className="text-3xl text-center text-white p-2 md:p-5">
        {service?.name}
      </h1>
      {isOpen && (
        <p className="text-lg text-center text-white p-2 md:p-5">
          {service?.description}
        </p>
      )}
    </div>
  )
}

export default CardService
