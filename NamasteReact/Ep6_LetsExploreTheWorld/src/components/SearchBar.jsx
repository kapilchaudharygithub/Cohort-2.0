import Button from "./Button";
const SearchBar = ({
  isDarkMode,
  onChangeEvent,
  textSearchInput,
  textSearchEvent,
}) => {
  return (
    <div className="flex  overflow-x-hidden md:w-[90vw] w-full">
      <input
        type="input"
        placeholder="Search your favourite food item"
        className={`w-96  px-3 py-2 border-1 ${
          isDarkMode ? "border-gray-300" : "border-red-300"
        } rounded-l-lg focus:outline-none focus:ring ${
          isDarkMode ? "focus:border-blue-300" : "focus:border-red-300"
        } text-sm md:text-base`}
        value={textSearchInput}
        onChange={onChangeEvent}
      />
      <Button
        buttonName="Search"
        buttonClasses={`px-4 py-2  text-white font-semibold rounded-r-lg  focus:outline-none focus:ring focus:${
          isDarkMode ? "border-red-300" : "border-blue-300"
        } ${
          isDarkMode
            ? "bg-blue-500 hover:bg-red-600"
            : "bg-red-500 hover:bg-blue-600"
        }`}
        onClickHandler={textSearchEvent}
      >
        Search
      </Button>
    </div>
  );
};
export default SearchBar;
