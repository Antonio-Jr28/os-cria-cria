import { Divider } from '../ divider/divider.component'
import { aboutUsStrings } from './about-us.strings'
import Isabelly from '../../assets/img/isabelly-about.svg'
import Antonio from '../../assets/img/antonio-about.svg'

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-evenly">
      <div className="flex flex-col items-center w-[350px] md:w-[600px]">
        <h1 className="text-bombing text-6xl md:text-8xl mt-5 text-white">
          {aboutUsStrings.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center pl-10">
          <img
            className="w-[250px] h-[250px]"
            src={Isabelly}
            alt="Foto da coceo da empresa"
          />
          <div>
            <h1 className="text-2xl text-white">{aboutUsStrings.coCeo}</h1>
            <p className="mt-4 text-white">
              {aboutUsStrings.descriptionCoCeo}{' '}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            className="w-[250px] h-[250px]"
            src={Antonio}
            alt="Foto da coceo da empresa"
          />
          <div>
            <h1 className="text-2xl text-white">{aboutUsStrings.ceo}</h1>
            <p className="mt-4 text-white">{aboutUsStrings.descriptionCeo}</p>
          </div>
        </div>
      </div>

      <div className="h-[80px]" />

      <div className="flex flex-col items-center w-[350px] md:w-[400px] pt-36">
        <h1 className="text-bombing text-6xl md:text-8xl mt-5 text-white">
          {aboutUsStrings.brand}
        </h1>
        <div className="w-[400px] pl-8 pr-8 md:pl-0 md:pr-0">
          <p className="text-white text-justify text-lg font-bold mt-10">
            {aboutUsStrings.description}
          </p>
        </div>
        <Divider />
      </div>
    </div>
  )
}
