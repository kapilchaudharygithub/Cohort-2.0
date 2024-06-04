import Nav from "./components/navbar/Nav";
import toggleDarkModeHandler from "./EventHandlers/toggleDarkModeHandler";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="relative flex flex-col justify-between min-h-[100vh] ">
      <div>
        <Nav
          isDarkMode={isDarkMode}
          toggleDarkMode={() => {
            toggleDarkModeHandler(isDarkMode, setIsDarkMode);
          }}
        />
        <main
          className={`w-full min-h-[81.2vh] border-t flex flex-col ${
            isDarkMode ? "bg-orange-400" : "bg-gray-700"
          } overflow-y-auto mt-11 sm:mt-13 md:mt-16`}
        >
          <Outlet />
        </main>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
