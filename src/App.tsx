import { Carousel } from './components/carousel/carousel-component'
import { Navbar } from './components/navbar/navbar.components'

import Background from '../src/assets/banners/banner-1.png'
import BackgroundTwo from '../src/assets/banners/banner-2.png'
import { ServicesSection } from './components/services/section-services.component'

export const App = () => {
  const images = [Background, BackgroundTwo]

  return (
    <>
      <section className="bg-black">
        <Navbar redesItems={[]} data={[]} />
      </section>
      <section>
        <Carousel images={images} />
      </section>
      <section className="background-image h-[600px]">
        <ServicesSection />
      </section>
    </>
  )
}
