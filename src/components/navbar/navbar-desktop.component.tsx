import logoDesktop from "../../assets/icon/logo-desktop.svg";
import menuDesktop from "../../assets/icon/menu-desktop.svg";
import insta from "../../assets/icon/insta.svg";
import face from "../../assets/icon/facebook.svg";
import whats from "../../assets/icon/whats.svg";

const redesSociais = [
  { link: "", img: insta },
  { link: "", img: face },
  { link: "", img: whats },
];

export const NavbarDesktop = () => {
  return (
    <nav>
      <div>
        <div>
          <img src={menuDesktop} alt="Menu Desktop" />
          <img src={logoDesktop} alt="Logo Desktop" />

          <div>
            <ul>
              {redesSociais.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.img} alt={`Rede Social ${index + 1}`} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
