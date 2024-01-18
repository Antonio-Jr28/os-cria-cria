import { Divider } from '../components/ divider/divider.component'
import { AboutUs } from '../components/about-us'
import { Carousel } from '../components/carousel'
import { ContactUs } from '../components/contact-us'
import { Footer } from '../components/footer/footer.component'
import { Navbar } from '../components/navbar/navbar.components'
import { ServicesSection } from '../components/services/section-services.component'

import Banner from '../assets/banners/banner-1.svg'
import BannerTwo from '../assets/banners/banner-2.svg'
import BannerTree from '../assets/banners/banner-3.svg'

export const HomePage = () => {
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

      <section
        id="about"
        className="background-about-us background-about-us-desktop"
      >
        <AboutUs />
      </section>

      <section
        className="background-image background-image-desktop"
        id="services"
      >
        <ServicesSection services={services} />
        <Divider />
      </section>

      <section className="background-image-form" id="contact">
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
