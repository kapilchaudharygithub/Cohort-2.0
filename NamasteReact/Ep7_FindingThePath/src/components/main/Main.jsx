import CardContainer from "../globalComponents/cards/CardContainer";
import { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import SearchMenu from "./SearchMenu";
// import SearchBar from "../globalComponents/search/SearchBar";
const Main = ({ isDarkMode }) => {
  const [arr, setArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState(arr);

  useEffect(() => {
    fetchData(setArr, setFilteredArr);
  }, []);

  return (
    <>
      <SearchMenu
        isDarkMode={isDarkMode}
        arr={arr}
        setFilteredArr={setFilteredArr}
      />

      <CardContainer isDarkMode={isDarkMode} arr={filteredArr} />
    </>
  );
};
export default Main;
