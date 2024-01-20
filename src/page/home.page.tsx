import { Divider } from '../components/ divider/divider.component'
import { AboutUs } from '../components/about-us'
import { Carousel } from '../components/carousel'
import { ContactUs } from '../components/contact-us'
import { Footer } from '../components/footer/footer.component'
import { Navbar } from '../components/navbar/navbar.components'
import { ServicesSection } from '../components/services/section-services.component'

import Banner from '../assets/banners/banner-1.svg'
import BannerTwo from '../assets/banners/banner-2.svg'
import Bannertree from '../assets/banners/banner-3.svg'
import { GradientDivider } from '../components/gradient-divider/gradient-divider.component'

export const HomePage = () => {
  const images = [Banner, BannerTwo, Bannertree]
  const services = [
    {
      name: 'Sites',
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
  const socialMedia = [
    { name: 'Instagram', link: 'https://www.instagram.com/oscria.cria/' },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61555736121745',
    },
    { name: 'Whatsapp', link: 'https://w.app/ePnYhg' },
  ]

  return (
    <>
      <Navbar redesItems={[]} data={[]} />
      <section className="flex flex-col justify-evenly bg-gray-900">
        <Carousel images={images} />

        <GradientDivider height="5px" colorStart="violet" colorEnd="violet" />

        <AboutUs />

        <ServicesSection services={services} />

        <Divider />

        <ContactUs />

        <Divider />
      </section>
      <div className="flex justify-center items-end bg-black">
        <Footer medias={socialMedia} services={services} />
      </div>
    </>
  )
}
