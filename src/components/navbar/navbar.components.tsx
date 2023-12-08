import { NavbarDesktop } from "./navbar-desktop.component";
import insta from "../../assets/icon/insta.svg";
import face from "../../assets/icon/facebook.svg";
import whats from "../../assets/icon/whats.svg";
import { NavbarMobile } from "./navbar-mobile.component";

interface MenuItem {
  label: string;
  link: string;
}

interface NavbarDesktopProps {
  redesItems: { link: string; img: string }[];
  data: MenuItem[];
}

export const Navbar: React.FC<NavbarDesktopProps> = () => {
  const redesSociais = [
    { link: "https://www.instagram.com/oscria.cria/", img: insta },
    { link: "", img: face },
    { link: "", img: whats },
  ];

  const menuItems = [
    { label: "Inicio", link: "/" },
    { label: "Sobre", link: "/sobre" },
    { label: "Serviços", link: "/servicos" },
    { label: "Fale Conosco", link: "/fale-conosco" },
  ];

  return (
    <div className="top-0">
      <NavbarDesktop redesItems={redesSociais} data={{ menuItems }} />
      <NavbarMobile menuItems={menuItems} />
    </div>
  );
};
