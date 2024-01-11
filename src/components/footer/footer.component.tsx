import React from 'react'

import Logo from '../../assets/icon/logo-mobile.svg'

interface FooterProps {
  services: string[]
  medias: string[]
}

export const Footer: React.FC<FooterProps> = ({ services, medias }) => {
  return (
    <div className=" flex flex-row justify-around bg-yellow-600 h-[320px] w-[1000px] rounded-t-[50px]">
      <div>
        <h2 className="text-bombing text-4xl text-center mt-8">Os Cria Cria</h2>
        <p className="w-[300px] mt-1">
          Empresa criada para o desenvolvimento e crescimento de pequenas
          empresas para grandes negocios.
        </p>
        <p className="text-black text-lg mt-8">
          <i className="fas fa-phone mr-4 text-black"></i>
          11 - 95427-7459
        </p>
        <p className="text-black text-sm mt-4">
          <i className="fas fa-envelope mr-4 text-black"></i>
          oscria.cria21@gmail.com
        </p>
        <p className="text-black text-lg mt-4">
          <i className="fas fa-map-marker-alt mr-4 text-black"></i>
          Rua: Montanhas, 61 apto 309 Itaquera/SP
        </p>
      </div>

      <div>
        <h2 className="text-bombing text-4xl mt-8">Serviços</h2>

        <ol className="mt-8">
          {services.map((service) => (
            <li className="text-black">{service}</li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="text-bombing text-4xl mt-8">Redes Sociais</h2>

        <ul className="mt-8">
          {medias.map((redes) => (
            <li>{redes}</li>
          ))}
        </ul>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}
