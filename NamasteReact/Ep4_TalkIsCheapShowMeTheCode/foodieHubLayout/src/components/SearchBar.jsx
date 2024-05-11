const SearchBar = ({ isDarkMode }) => {
  return (
    <div className="flex items-center justify-center overflow-x-hidden md:w-[90vw] w-full">
      <input
        type="input"
        placeholder="Search your favourite food item"
        className={`w-96  px-3 py-2 border-1 ${
          isDarkMode ? "border-gray-300" : "border-red-300"
        } rounded-l-lg focus:outline-none focus:ring ${
          isDarkMode ? "focus:border-blue-300" : "focus:border-red-300"
        } text-sm md:text-base`}
      />
      <button
        className={`px-4 py-2  text-white font-semibold rounded-r-lg  focus:outline-none focus:ring focus:${
          isDarkMode ? "border-red-300" : "border-blue-300"
        } ${
          isDarkMode
            ? "bg-blue-500 hover:bg-red-600"
            : "bg-red-500 hover:bg-blue-600"
        }`}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
