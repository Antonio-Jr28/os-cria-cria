import { Carousel } from './components/carousel/carousel-component'
import { Navbar } from './components/navbar/navbar.components'

import Background from '../src/assets/banners/banner-1.png'
import BackgroundTwo from '../src/assets/banners/banner-2.png'
import BackgoundTree from '../src/assets/banners/banner-3.png'
import { ServicesSection } from './components/services/section-services.component'
import { ContactUs } from './components/contact-us/contact-us-form.component'
import { Footer } from './components/footer/footer.component'

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
  const socialMedia = ['Instagram', 'Facebook', 'Github']

  return (
    <>
      <section className="bg-black">
        <Navbar redesItems={[]} data={[]} />
      </section>
      <section>
        <Carousel images={images} />
      </section>
      <section className="background-image h-[1700px]">
        <ServicesSection services={services} />
      </section>

      <section className="background-image-form h-[800px]">
        <ContactUs />
      </section>

      <section className="flex justify-center items-end background-image-form h-[360px]">
        <Footer medias={socialMedia} services={services} />
      </section>
    </>
  )
}
