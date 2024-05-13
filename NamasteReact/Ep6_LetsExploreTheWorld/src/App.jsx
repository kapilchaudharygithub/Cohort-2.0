import { useState } from "react";
import Nav from "./components/navbar/Nav";
import Main from "./components/Main";
import toggleDarkModeHandler from "./EventHandlers/toggleDarkModeHandler";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={`app w-[100vw] h-[100vh] m-0 p-0 box-border bg-red-200 flex flex-col`}
    >
      <Nav
        isDarkMode={isDarkMode}
        toggleDarkMode={() => {
          toggleDarkModeHandler(isDarkMode, setIsDarkMode);
        }}
      />
      <Main isDarkMode={isDarkMode} />
    </div>
  );
};
export default App;
