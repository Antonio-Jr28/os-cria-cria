import { Carousel } from "./components/carousel/carousel-component";
import { Navbar } from "./components/navbar/navbar.components";

import Background from "../src/assets/banners/banner-1.png";
import BackgroundTwo from "../src/assets/banners/banner-2.png";

export const App = () => {
   const images = [Background, BackgroundTwo];

  return (
    <>
      <section className="bg-black">
        <Navbar redesItems={[]} data={[]} />
      </section>
      <section className="bg-gray-500 h-[500px]"><Carousel images={images} /></section>
    </>
  );
};
