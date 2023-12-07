import { useEffect, useRef, useState } from "react";
import logo from "../../assets/icon/logo.svg";
import { MenuIcon } from "../../assets/icon/menu-mobile";

interface NavbarMobileProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains?.(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="flex flex-row items-center justify-around md:hidden cursor-pointer h-[150px]"
      ref={menuRef}
    >
      <img className="w-[120px] h-[120px]" src={logo} alt="Imagem da marca" />
      <div className="cursor-pointer" onClick={toggleMenu}>
        <MenuIcon onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="absolute top-36 left-7 right-7 bg-black z-10 border rounded-md shadow-md">
          <ul className="flex flex-col items-center text-gray-400 md:flex-row md:items-center gap-4 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-yellow-400 hover:text-white"
                  href={item.link}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
