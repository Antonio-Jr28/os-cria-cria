import { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Divider } from '../ divider/divider.component'
import { aboutUsStrings } from './about-us.strings'
import Isabelly from '../../assets/img/isabelly-about.svg'
import Antonio from '../../assets/img/antonio-about.svg'

export const AboutUs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.aboutItems, .aboutCria', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.aboutSection',
        // markers: true,
        start: 'top 520px',
        end: 'bottom 615px',
        scrub: true,
      },
    })
  }, [])
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-evenly aboutSection">
      <div className="flex flex-col items-center w-[350px] md:w-[600px] md:pl-20 aboutItems">
        <Divider />
        <h1 className="text-bombing text-6xl md:text-8xl mt-5 text-white">
          {aboutUsStrings.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center text-end md:pl-10 gap-5">
          <img
            className="w-[250px] h-[250px]"
            src={Isabelly}
            alt="Foto da coceo da empresa"
          />
          <div>
            <h1 className="text-2xl text-white">{aboutUsStrings.coCeo}</h1>
            <p className="mt-4 text-white">{aboutUsStrings.descriptionCoCeo}</p>
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

      <div className="flex flex-col items-center w-[350px] md:w-[400px] pt-36 pr-10 aboutCria">
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
    </section>
  )
}
