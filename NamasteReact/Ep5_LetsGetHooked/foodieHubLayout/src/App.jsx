// import Header from "./Header";
import { useState } from "react";
import Nav from "./components/navbar/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={`app w-[100vw] h-[100vh] m-0 p-0 box-border bg-red-200 flex flex-col`}
    >
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main isDarkMode={isDarkMode} />
      {/* <Footer /> */}
    </div>
  );
};
export default App;
