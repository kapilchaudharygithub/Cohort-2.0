import SearchBar from "./SearchBar";
import Button from "./Button";
import { useState } from "react";
import textSearchInputHandler from "../EventHandlers/textSearchInputHandler";
import textSearchOnClickHandler from "../EventHandlers/textSearchOnClickHandler";
import filterButtonOnClickHandler from "../EventHandlers/filterButtonOnClickHandler";
const SearchMenu = ({ isDarkMode, arr, setFilteredArr }) => {
  const [btnName, setBtnName] = useState("Filtered Foods");
  const [textSearchInput, setTextSearchInput] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-[75vw] mt-4  flex flex-col-reverse gap-y-4 md:flex-row items-center md:justify-between   `}
      >
        <SearchBar
          textSearchInput={textSearchInput}
          isDarkMode={isDarkMode}

          onChangeEvent={(e) => {
            textSearchInputHandler(e, setTextSearchInput);
          }}

          textSearchEvent={() =>
            textSearchOnClickHandler(
              arr,
              setFilteredArr,
              textSearchInput,
              setTextSearchInput
            )
          }
        />
        <Button
          buttonName={btnName}

          onClickHandler={() => {
            filterButtonOnClickHandler(
              arr,
              btnName,
              setBtnName,
              setFilteredArr
            );
          }}
          
          buttonClasses={` pl-3 pr-3 rounded-md text-base w-[30vw] md:w-auto h-[2.5rem] ${
            isDarkMode
              ? "bg-red-500 hover:bg-blue-300 text-gray-300 hover:text-gray-700"
              : "bg-blue-300 hover:bg-red-500 text-gray-700 hover:text-gray-300"
          }
  `}
        />
      </div>
    </div>
  );
};

export default SearchMenu;
