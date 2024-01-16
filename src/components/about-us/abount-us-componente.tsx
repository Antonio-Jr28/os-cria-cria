import { Divider } from '../ divider/divider.component'
import Logo from '../../assets/icon/logo-desktop.svg'

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around">
      <div className="flex flex-col items-center w-[350px] md:w-[500px]">
        <h1 className="text-bombing text-6xl mt-5">Quem somos</h1>
        <img src={Logo} />
        <h1>Isabelly Vitorino</h1>
        <p>Loren loren ipsum</p>

        <img src={Logo} />
        <h1>Antonio Gonçalves</h1>
        <p>Loren loren ipsum</p>
      </div>

      <div className="h-[100px]" />

      <div className="flex flex-col items-center w-[350px] md:w-[400px]">
        <div>
          <h1 className="text-bombing text-6xl mt-5 text-white">
            Os Cria Cria
          </h1>
        </div>
        <p className="text-white text-center text-lg font-bold mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vestibulum erat ut metus dictum, vel hendrerit justo bibendum. Ut ac
          urna nec risus tincidunt convallis. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Integer
          commodo urna eget facilisis vulputate. Curabitur laoreet turpis at
          augue facilisis, nec varius justo malesuada. Sed in risus ut ipsum
          hendrerit tristique. Sed interdum vestibulum enim, id aliquam est
          lacinia ac. Duis volutpat orci eget tortor fermentum, eget mattis
          sapien commodo. In hac habitasse
        </p>
      </div>
      <Divider />
    </div>
  )
}
