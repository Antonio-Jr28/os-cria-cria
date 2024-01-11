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
      <h1 className="flex justify-end pr-20 text-bombing text-8xl text-black pt-1">
        Quem Somos?
      </h1>

      <h2 className="w-[900px] text-white pl-[220px] pt-[200px] font-semibold text-lg">
        Lorem ipsum dolor sit amet. In alias soluta sit earum nihil aut neque
        reprehenderit. Et animi libero eos ipsa quia eum dolor praesentium ad
        ipsum nostrum est unde repellat. Ea optio vitae eum architecto
        laudantium id provident eius. Ut commodi Quis in dicta tempora sed
        placeat sunt qui itaque reiciendis est quisquam doloremque. Et voluptas
        assumenda vel repudiandae autem 33 quia veritatis. Qui numquam eveniet
        qui expedita dolor id consequatur velit et consequatur velit qui esse
        doloribus sed dolor molestiae aut autem tempore. Eos facilis
        voluptatibus vel quasi totam sit provident beatae vel quasi totam et
        tempora autem qui eligendi voluptatum qui consectetur mollitia. Est
        doloribus sed dolor molestiae aut autem tempore. Eos facilis
        voluptatibus vel quasi totam sit provident beatae vel quasi totam et
        tempora autem qui eligendi voluptatum qui consectetur mollitia. Est
        excepturi voluptas in natus blanditiis vel culpa nobis. Quo fuga
        voluptatibus vel quasi totam sit provident beatae vel quasi totam et
        tempora autem qui eligendi voluptatum qui consectetur mollitia. Est
        excepturi voluptas in natus blanditiis vel culpa nobis. Quo fuga
        incidunt ex vitae culpa At vero tempora.
      </h2>
    </div>
  )
}
