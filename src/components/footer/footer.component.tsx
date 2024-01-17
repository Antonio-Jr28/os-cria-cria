import React from 'react'

import Logo from '../../assets/icon/logo-mobile.svg'

interface FooterProps {
  services: { name: string; description: string }[]
  medias: string[]
}

export const Footer: React.FC<FooterProps> = ({ services, medias }) => {
  return (
    <>
      <div className="flex flex-col pl-4 pr-4 md:flex-row md:justify-around text-center backFooterColor h-[870px] md:h-[320px] w-[1000px] rounded-t-[50px] mt-12">
        <div>
          <h2 className="text-bombing text-5xl text-center mt-8">
            Os Cria Cria
          </h2>
          <p className="w-auto md:w-[350px] mt-1">
            Empresa criada para o desenvolvimento e crescimento de pequenas
            empresas para grandes negócios.
          </p>
          <p className="text-black text-lg mt-8">
            <i className="fas fa-phone mr-4 text-black"></i>
            11 - 95427-7459
          </p>
          <p className="text-black text-lg mt-4">
            <i className="fas fa-envelope mr-4 text-black"></i>
            oscria.cria21@gmail.com
          </p>
          <p className="text-black text-lg mt-4">
            <i className="fas fa-map-marker-alt mr-4 text-black"></i>
            Rua: Montanhas, 61 Itaquera/SP
          </p>
        </div>

        <div>
          <h2 className=" text-4xl mt-8">Serviços</h2>

          <ul className="mt-8">
            {services?.map((service, index) => (
              <li key={index} className="text-black">
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className=" text-4xl mt-8">Redes Sociais</h2>

          <ul className="mt-8">
            {medias.map((rede, index) => (
              <li key={index}>{rede}</li>
            ))}
          </ul>
          <img className="pl-[80px] md:pl-[0]" src={Logo} alt="logo" />
        </div>
      </div>
    </>
  )
}
