import CardContainer from "./cards/CardContainer";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import SearchMenu from "./SearchMenu";

const Main = ({ isDarkMode }) => {
  const [arr, setArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState(arr);

  useEffect(() => {
    fetchData(setArr, setFilteredArr);
  }, []);

  return (
    <main
      className={`w-[100vw] h-full border-t flex flex-col   ${
        isDarkMode ? "bg-orange-400 " : "bg-gray-700"
      } mt-12 md:mt-16 overflow-y-auto`}
    >
      <SearchMenu
        isDarkMode={isDarkMode}
        arr={arr}
        setFilteredArr={setFilteredArr}
      />

      <CardContainer isDarkMode={isDarkMode} arr={filteredArr} />

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
};
export default Main;
