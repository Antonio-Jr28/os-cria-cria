import { Divider } from '../ divider/divider.component'
import { aboutUsStrings } from './about-us.strings'
import Isabelly from '../../assets/img/isabelly-about.svg'
import Antonio from '../../assets/img/antonio-about.svg'

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around">
      <div className="flex flex-col items-center w-[350px] md:w-[500px]">
        <h1 className="text-bombing text-6xl md:text-8xl mt-5">
          {aboutUsStrings.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center pl-5">
          <img
            className="w-[200px] h-[200px]"
            src={Isabelly}
            alt="Foto da coceo da empresa"
          />
          <div>
            <h1 className="text-2xl">{aboutUsStrings.coCeo}</h1>
            <p className="mt-4">{aboutUsStrings.descriptionCoCeo} </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse pl-5 items-center">
          <img
            className="w-[200px] h-[200px]"
            src={Antonio}
            alt="Foto da coceo da empresa"
          />
          <div>
            <h1 className="text-2xl">{aboutUsStrings.ceo}</h1>
            <p className="mt-4">{aboutUsStrings.descriptionCeo}</p>
          </div>
        </div>
      </div>

      <div className="h-[80px]" />

      <div className="flex flex-col items-center w-[350px] md:w-[500px] pt-36">
        <h1 className="text-bombing text-6xl md:text-8xl mt-5 text-white">
          {aboutUsStrings.brand}
        </h1>
        <div className="w-[400px]">
          <p className="text-white text-center text-lg font-bold ">
            {aboutUsStrings.description}
          </p>
        </div>
        <Divider />
      </div>
    </div>
  )
}
