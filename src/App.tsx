import { Carousel } from './components/carousel/carousel-component'
import { Navbar } from './components/navbar/navbar.components'

import Background from '../src/assets/banners/banner-1.png'
import BackgroundTwo from '../src/assets/banners/banner-2.png'
import BackgoundTree from '../src/assets/banners/banner-3.png'
import { ServicesSection } from './components/services/section-services.component'
import { Divider } from './components/ divider/divider.component'
import { ContactUs } from './components/contact-us/contact-us-form.component'

export const App = () => {
  const images = [Background, BackgroundTwo, BackgoundTree]
  const services = [
    'Sites',
    'Banner',
    'Cards',
    'Cartão de visita',
    'Biografia',
    'Release',
    'Copywriting',
    'Diagramação',
  ]

  return (
    <>
      <section className="bg-black">
        <Navbar redesItems={[]} data={[]} />
      </section>
      <section>
        <Carousel images={images} />
      </section>
      <section className="background-image h-[1600px]">
        <ServicesSection services={services} />
      </section>

      <section className="background-image-form h-[800px]">
        <ContactUs />
      </section>
    </>
  )
}
