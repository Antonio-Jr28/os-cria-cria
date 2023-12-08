import { useEffect, useRef, useState } from "react";
import logoDesktop from "../../assets/icon/logo.svg";
import { MenuIcon } from "../../assets/icon/menu-mobile";

interface MenuItem {
  label: string;
  link: string;
}

interface Data {
  menuItems: MenuItem[];
}

interface NavbarDesktopProps {
  redesItems: { link: string; img: string }[];
  data: Data;
}

export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({
  redesItems,
  data,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains?.(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="hidden md:sticky md:flex items-center justify-around bg-black h-[180px] shadow-white shadow-lg">
      <div className="cursor-pointer" onClick={toggleMenu}>
        <MenuIcon onClick={toggleMenu} />
      </div>

      <img
        className="w-[140px] h-[140px] shadow-md"
        src={logoDesktop}
        alt="Logo Desktop"
      />

      <div className="flex">
        {redesItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container"
          >
            <img
              src={item.img}
              alt={`Rede Social ${index + 1}`}
              className="social-icon"
            />
          </a>
        ))}
      </div>

      {isMenuOpen && (
        <div className="absolute top-18 left-60 right-[300] bg-black z-10 border rounded-md shadow-md">
          <ul className="flex flex-row items-center gap-4 p-4">
            {data?.menuItems?.map((item, index) => (
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
