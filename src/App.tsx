import { Carousel } from './components/carousel/carousel-component'
import { Navbar } from './components/navbar/navbar.components'

import Banner from '../src/assets/banners/banner-1.png'
import BannerTwo from '../src/assets/banners/banner-2.png'
import BannerTree from '../src/assets/banners/banner-3.png'
import { ServicesSection } from './components/services/section-services.component'
import { ContactUs } from './components/contact-us/contact-us-form.component'
import { Footer } from './components/footer/footer.component'
import { AboutUs } from './components/about-us/abount-us-componente'
import { Divider } from './components/ divider/divider.component'

export const App = () => {
  const images = [Banner, BannerTwo, BannerTree]
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
      <section className="background-image background-image-desktop">
        <ServicesSection services={services} />
        <Divider />
      </section>

      <section className="background-about-us background-about-us-desktop">
        <AboutUs />
      </section>

      <section className="background-image-form">
        <ContactUs />
        <Divider />
      </section>

      <section className="flex justify-center items-end background-image-form ">
        <Divider />
        <Footer medias={socialMedia} services={services} />
      </section>
    </>
  )
}
