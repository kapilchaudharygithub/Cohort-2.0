import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
const Main = ({ isDarkMode }) => {
  return (
    <main
      className={`w-[100vw] h-full border-t  ${
        isDarkMode ? "bg-orange-400 " : "bg-gray-700"
      } mt-12 md:mt-16 overflow-y-auto`}
    >
      <div className={`w-[80vw] mt-4`}>
        <SearchBar isDarkMode={isDarkMode} />
      </div>
      <CardContainer isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
};
export default Main;
