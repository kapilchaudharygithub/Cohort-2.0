import { useState } from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import toggleMenuHandler from "../../EventHandlers/toggleMenuHandler";
const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-full z-20 top-0 start-0 border-b-2   flex justify-between  p-2 flex-wrap flex-nowrap shadow-lg shadow-gray-600 ${
        isDarkMode
          ? "bg-slate-100 border-gray-900"
          : "bg-gray-600 border-blue-400"
      }`}
    >
      <NavLeft isDarkMode={isDarkMode} />
      <NavRight
        toggleMenu={() => {
          toggleMenuHandler(isMenuOpen, setIsMenuOpen);
        }}
        isMenuOpen={isMenuOpen}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
    </header>
  );
};
export default Nav;
