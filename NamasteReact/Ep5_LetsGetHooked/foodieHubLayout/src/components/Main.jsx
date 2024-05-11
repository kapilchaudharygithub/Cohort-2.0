import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Button from "./Button";
import { DATA } from "./trial";
import { useState } from "react";
const Main = ({ isDarkMode }) => {
  const [arr, setArr] = useState(
    DATA.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
  const [btnName, setBtnName] = useState("Filt_Restrau");
  return (
    <main
      className={`w-[100vw] h-full border-t  ${
        isDarkMode ? "bg-orange-400 " : "bg-gray-700"
      } mt-12 md:mt-16 overflow-y-auto`}
    >
      <div className={`w-[80vw] mt-4 flex justify-between wrap `}>
        <SearchBar isDarkMode={isDarkMode} />{" "}
        <Button
          buttonName={btnName}
          onClickHandler={() => {
            const originalArr =
              DATA.data.cards[1].card.card.gridElements.infoWithStyle
                .restaurants;
            const filteredArr = originalArr.filter(
              (data) => data.info.avgRating > 4
            );
            if (JSON.stringify(arr) === JSON.stringify(originalArr)) {
              // If arr is the original array, set it to the filtered array
              setArr(filteredArr);
              setBtnName("All_Restraus");
            } else {
              // If arr is the filtered array, set it back to the original array
              setArr(originalArr);
              setBtnName("Filt_Restrau");
            }
          }}
          buttonClasses={` pl-3 pr-3 rounded-md text-base ${
            isDarkMode
              ? "bg-red-500 hover:bg-blue-300 text-gray-300 hover:text-gray-700"
              : "bg-blue-300 hover:bg-red-500 text-gray-700 hover:text-gray-300"
          }
          
          `}
        />
      </div>
      <CardContainer isDarkMode={isDarkMode} arr={arr} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
};
export default Main;
