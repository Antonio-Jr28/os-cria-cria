import { useState } from 'react'

import tecno from '../../assets/icon/violet-technology.svg'
import writing from '../../assets/icon/violet-writing.svg'
import print from '../../assets/icon/violet-print.svg'

export const CardServices = () => {
  const [showTecno, setShowTecno] = useState(false)
  const [showSocialMedia, setShowSocialMedia] = useState(false)
  const [showPrint, setShowPrint] = useState(false)

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly">
      <div
        className="flex flex-col items-center border-2 backFooterColor border-white mt-10 rounded-2xl cursor-pointer w-[300px]"
        onClick={() => setShowTecno(!showTecno)}
      >
        <img src={tecno} className="w-[250px] h-[250px]" />
        <h2 className="text-white text-center text-3xl mb-5">Tecnologia</h2>
        {showTecno && (
          <>
            <ul className="flex flex-col text-white text-center mt-4 mb-5 items-center">
              <li className="border-2 border-white w-[200px] mt-3">Website</li>
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
        className="flex flex-col items-center border-2 backFooterColor border-white mt-10 rounded-2xl cursor-pointer w-[300px]"
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
              <li className="border-2 border-white w-[200px] mt-3">Releases</li>
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
        className="flex flex-col items-center border-2 backFooterColor border-white mt-10 rounded-2xl cursor-pointer w-[300px]"
        onClick={() => setShowPrint(!showPrint)}
      >
        <img src={print} className="w-[250px] h-[250px]" />
        <h2 className="text-white text-center text-3xl mb-5">
          Material Impressos
        </h2>
        {showPrint && (
          <>
            <ul className="flex flex-col text-white text-center mt-4 mb-5 items-center">
              <li className="border-2 border-white w-[200px] mt-3">Banners</li>
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
  )
}
