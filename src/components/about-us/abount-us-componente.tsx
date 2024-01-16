import { Divider } from '../ divider/divider.component'
import Logo from '../../assets/icon/logo-desktop.svg'
import { aboutUsStrings } from './about-us.strings'

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around">
      <div className="flex flex-col items-center w-[350px] md:w-[500px]">
        <h1 className="text-bombing text-6xl mt-5">Quem somos</h1>
        <img src={Logo} />
        <h1>{aboutUsStrings.coCeo}</h1>
        <p>{aboutUsStrings.descriptionCoCeo} </p>

        <img src={Logo} />
        <h1>{aboutUsStrings.ceo}</h1>
        <p>{aboutUsStrings.descriptionCeo}</p>
      </div>

      <div className="h-[100px]" />

      <div className="flex flex-col items-center w-[350px] md:w-[400px]">
        <div>
          <h1 className="text-bombing text-6xl mt-5 text-white">
            {aboutUsStrings.brand}
          </h1>
        </div>
        <p className="text-white text-center text-lg font-bold mt-20">
          {aboutUsStrings.description}
        </p>
      </div>
      <Divider />
    </div>
  )
}
