import { useState, useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tecno from '../../assets/icon/violet-technology.svg'
import writing from '../../assets/icon/violet-writing.svg'
import print from '../../assets/icon/violet-print.svg'

export const CardServices = () => {
  const el = useRef(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const [showTecno, setShowTecno] = useState(false)
  const [showSocialMedia, setShowSocialMedia] = useState(false)
  const [showPrint, setShowPrint] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.models-item',
            scrub: true,
            start: 'top 600px',
            end: 'bottom 500px',
          },
        })
        .fromTo(
          '#model-1',
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '#model-2',
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          '#model-3',
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
    }, el)
  }, [])

  return (
    <section className="serviceSection">
      <div
        className="flex flex-col md:flex-row items-center justify-evenly service"
        ref={el}
      >
        <div
          className="flex flex-col items-center border-2 backFooterColor border-white mt-10 rounded-2xl cursor-pointer w-[300px] models-item"
          id="model-1"
          onClick={() => setShowTecno(!showTecno)}
        >
          <img src={tecno} className="w-[250px] h-[250px]" />
          <h2 className="text-white text-center text-3xl mb-5">Tecnologia</h2>
          {showTecno && (
            <>
              <ul className="flex flex-col text-white text-center mt-4 mb-5 items-center">
                <li className="border-2 border-white w-[200px] mt-3">
                  Website
                </li>
                <li className="border-2 border-white w-[200px] mt-3">
                  Aplicativo Web
                </li>
                <li className="border-2 border-white w-[200px] mt-3">
                  Material digital
                </li>
              </ul>
              <a
                className="border text-white bg-violet-500 rounded-2xl w-[150px] text-center mb-4"
                href="#contact"
              >
                Fale Conosco
              </a>
            </>
          )}
        </div>

        <div
          className="flex flex-col items-center border-2 backFooterColor border-white mt-10 rounded-2xl cursor-pointer w-[300px] models-item"
          id="model-2"
          onClick={() => setShowSocialMedia(!showSocialMedia)}
        >
          <img src={writing} className="w-[250px] h-[250px]" />
          <h2 className="text-white text-center text-3xl mb-5">Social Media</h2>
          {showSocialMedia && (
            <>
              <ul className="flex flex-col text-white text-center mt-4 mb-5 items-center">
                <li className="border-2 border-white w-[200px] mt-3">
                  Biografias
                </li>
                <li className="border-2 border-white w-[200px] mt-3">
                  Copywriting
                </li>
                <li className="border-2 border-white w-[200px] mt-3">
                  Releases
                </li>
              </ul>
              <a
                className="border text-white bg-violet-500 rounded-2xl w-[150px] text-center mb-4"
                href="#contact"
              >
                Fale Conosco
              </a>
            </>
          )}
        </div>

        <div
          className="flex flex-col items-center border-2 backFooterColor border-white mt-10 rounded-2xl cursor-pointer w-[300px] models-item"
          id="model-3"
          onClick={() => setShowPrint(!showPrint)}
        >
          <img src={print} className="w-[250px] h-[250px]" />
          <h2 className="text-white text-center text-3xl mb-5">
            Material Impressos
          </h2>
          {showPrint && (
            <>
              <ul className="flex flex-col text-white text-center mt-4 mb-5 items-center">
                <li className="border-2 border-white w-[200px] mt-3">
                  Banners
                </li>
                <li className="border-2 border-white w-[200px] mt-3">Faixas</li>
                <li className="border-2 border-white w-[200px] mt-3">
                  Panfletos
                </li>
              </ul>
              <a
                className="border text-white bg-violet-500 rounded-2xl w-[150px] text-center mb-4"
                href="#contact"
              >
                Fale Conosco
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
