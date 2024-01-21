import logoDesktop from '../../assets/icon/logo.svg'

interface MenuItem {
  label: string
  link: string
}

interface Data {
  menuItems: MenuItem[]
}

interface NavbarDesktopProps {
  redesItems: { link: string; img: string }[]
  data: Data
}

export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({
  redesItems,
  data,
}) => {
  return (
    <div className="hidden md:sticky md:flex md:flex-row md:items-center md:justify-evenly bg-gray-900 h-[100px]">
      <div className="flex">
        <img
          className="w-[80px] h-[80px]"
          src={logoDesktop}
          alt="Logo Desktop"
        />
      </div>

      <div>
        <ul className="flex flex-row items-center gap-4 p-4">
          {data?.menuItems?.map((item, index) => (
            <li key={index}>
              <a
                className="text-yellow-400 hover:text-white text-2xl"
                href={item.link}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6">
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
    </div>
  )
}
