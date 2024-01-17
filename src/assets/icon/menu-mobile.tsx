interface MenuIconProps {
  onClick: () => void
}

export const MenuIcon: React.FC<MenuIconProps> = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_3_67)">
        <path
          d="M36.1 7.5H38.5C39.6 7.5 40.5 8.4 40.5 9.5V12.5C40.5 13.6 39.6 14.5 38.5 14.5H18"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 14.5H9.5C8.4 14.5 7.5 13.6 7.5 12.5V9.5C7.5 8.4 8.4 7.5 9.5 7.5H30.8"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3 27.5H9.5C8.4 27.5 7.5 26.6 7.5 25.5V22.5C7.5 21.4 8.4 20.5 9.5 20.5H29.5"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 20.5H38.5C39.6 20.5 40.5 21.4 40.5 22.5V25.5C40.5 26.6 39.6 27.5 38.5 27.5H18.5"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 40.5H9.5C8.4 40.5 7.5 39.6 7.5 38.5V35.5C7.5 34.4 8.4 33.5 9.5 33.5H29.1"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.2 33.5H38.5C39.6 33.5 40.5 34.4 40.5 35.5V38.5C40.5 39.6 39.6 40.5 38.5 40.5H18.5"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_3_67"
          x="0"
          y="0"
          width="48"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.846474 0 0 0 0 0.729354 0 0 0 0 0.374217 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_3_67"
          />
        </filter>
      </defs>
    </svg>
  )
}
