import Button from "../Button";
const NavRight = ({ toggleMenu, isMenuOpen, toggleDarkMode, isDarkMode }) => {
  const ButtonList = [
    {
      btnName: "Home",
      btnId: "HomeBtn",
    },
    {
      btnName: "About",
      btnId: "AboutBtn",
    },
    {
      btnName: "Contact",
      btnId: "ContactBtn",
    },
    {
      btnName: "Cart",
      btnId: "CartBtn",
    },
    {
      btnName: isDarkMode ? "Dark" : "Light",
      btnId: "darkBrightBtn",
      btnEvent: toggleDarkMode,
    },
  ];

  return (
    <nav
      className={`self-center text-xl sm:text-2xl font-semibold whitespace-nowrap  flex justify-between  flex-wrap relative  `}
    >
      <button onClick={toggleMenu} className="block md:hidden ">
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
          {ButtonList.map(({ btnName, btnId, btnUrl, btnEvent }) => (
            <li key={btnId}>
              <a
                href={btnUrl}
                className="block py-2 px-3 text-gray-900 rounded "
              >
                <Button
                  onClickHandler={btnEvent}
                  buttonName={btnName}
                  buttonClasses={`h-8 p-0 text-sm p-2 pl-3 pr-3 w-full md:w-auto${
                    isDarkMode
                      ? "bg-gray-300 hover:bg-slate-700 text-gray-950 hover:text-zinc-100 "
                      : "bg-slate-700 hover:bg-gray-300 text-zinc-100 hover:text-gray-950"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavRight;
