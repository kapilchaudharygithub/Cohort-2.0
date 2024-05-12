import SearchBar from "./SearchBar";
import Button from "./Button";
import { useState } from "react";
const SearchMenu = ({ isDarkMode, arr, setFilteredArr }) => {
  const [btnName, setBtnName] = useState("Filtered Foods");
  const [textSearchInput, setTextSearchInput] = useState("");
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-[75vw] mt-4  flex flex-col-reverse gap-y-4 md:flex-row items-center md:justify-between   `}
      >
        <SearchBar
          onChangeEvent={(e) => {
            setTextSearchInput(e.target.value);
            console.log(textSearchInput);
          }}
          textSearchInput={textSearchInput}
          isDarkMode={isDarkMode}
          textSearchEvent={() => {
            const originalArr = [...arr];
            const filteredArray = originalArr.filter((data) =>
              data.info.name
                .toLowerCase()
                .includes(textSearchInput.toLowerCase())
            );
            if (textSearchInput.trim().length > 0) {
              setFilteredArr(filteredArray);
              setTextSearchInput("");
            } else {
              setFilteredArr(originalArr);
            }
          }}
        />
        <Button
          buttonName={btnName}
          onClickHandler={() => {
            const originalArr = [...arr];
            const filteredArray = originalArr.filter(
              (data) => data.info.avgRating > 4
            );

            if (btnName === "Filtered Foods") {
              setBtnName("UnFilter Foods");
              setFilteredArr(filteredArray);
            } else {
              setBtnName("Filtered Foods");
              setFilteredArr(originalArr);
            }
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
