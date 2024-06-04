import ButtonList from "../globalComponents/ButtonList";
const NavRight = ({ toggleMenu, isMenuOpen, toggleDarkMode, isDarkMode }) => {
  const buttonList = [
    {
      btnName: "Home",
      btnLink: "/",

      btnId: "HomeBtn",

      btnEvent: () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      },
    },
    {
      btnName: "Board",
      btnLink: "/board",
      btnId: "BoardBtn",
      btnEvent: () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      },
    },
    {
      btnName: "Contact",
      btnLink: "/contact",

      btnId: "ContactBtn",
      btnEvent: () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      },
    },
    {
      btnName: "Cart",
      btnLink: "/cart",

      btnId: "CartBtn",
      btnEvent: () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      },
    },
    {
      btnName: isDarkMode ? "Dark" : "Light",
      btnId: "darkBrightBtn",

      btnEvent: () => {
        if (isMenuOpen) {
          toggleDarkMode();
          toggleMenu();
        } else {
          toggleDarkMode();
        }
      },
    },
  ];
  const hamBurgerMenu = (
    <svg
      className={`w-5 h-5 ${isDarkMode ? "text-gray-950" : "text-gray-50"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );

  return (
    <nav
      className={`self-center text-xl sm:text-2xl font-semibold whitespace-nowrap  flex justify-between  flex-wrap relative  `}
    >
      <button onClick={toggleMenu} className="block md:hidden ">
        {hamBurgerMenu}
      </button>

      <div
        className={`md:flex  ${isMenuOpen ? "block" : "hidden"}  `}
        id="navbar-sticky"
      >
        <ul
          className={`absolute mt-12 right-0 z-10 flex flex-col  p-4 md:p-0 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:justify-between md:mt-0 border-2 md:border-0 md:static ${
            isDarkMode ? "border-gray-800" : "border-gray-500"
          }`}
        >
          <ButtonList buttonList={buttonList} isDarkMode={isDarkMode} />
        </ul>
      </div>
    </nav>
  );
};
export default NavRight;
