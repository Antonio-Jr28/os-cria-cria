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
    {
      name: 'Sites',
      description:
        'Transforme sua presença online com designs irresistíveis! 🚀 Seja para um site profissional, blog envolvente ou plataforma interativa, eu estou aqui para realizar suas ideias! 💻✨',
    },
    {
      name: 'Banner',
      description:
        'Transforme sua presença online com designs irresistíveis! 🚀 Seja para um site profissional, blog envolvente ou plataforma interativa, eu estou aqui para realizar suas ideias! 💻✨',
    },
    {
      name: 'Cards',
      description:
        'Transforme sua presença online com designs irresistíveis! 🚀 Seja para um site profissional, blog envolvente ou plataforma interativa, eu estou aqui para realizar suas ideias! 💻✨',
    },
    {
      name: 'Biografia',
      description:
        'Transforme sua presença online com designs irresistíveis! 🚀 Seja para um site profissional, blog envolvente ou plataforma interativa, eu estou aqui para realizar suas ideias! 💻✨',
    },
    {
      name: 'Release',
      description:
        'Transforme sua presença online com designs irresistíveis! 🚀 Seja para um site profissional, blog envolvente ou plataforma interativa, eu estou aqui para realizar suas ideias! 💻✨',
    },
    {
      name: 'Copywriting',
      description:
        'Transforme sua presença online com designs irresistíveis! 🚀 Seja para um site profissional, blog envolvente ou plataforma interativa, eu estou aqui para realizar suas ideias! 💻✨',
    },
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
      <section className="background-image background-image-desktop h-[700px]">
        <ServicesSection services={services} />
      </section>

      <section className="background-image-form h-[800px]">
        <ContactUs />
      </section>

      <section className="flex justify-center items-end background-image-form ">
        <Footer medias={socialMedia} services={services} />
      </section>
    </>
  )
}
