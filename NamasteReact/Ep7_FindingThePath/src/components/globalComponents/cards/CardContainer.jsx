import CardRender from "./CardRender";
import CardShimmerRender from "./CardShimmerRender";
const CardContainer = ({ isDarkMode, arr }) => {
  return (
    <div className={`flex  justify-center  w-full  mt-3`}>
      <div
        className={`cardContainer w-full sm:w-[90vw] min-h-[80vh] flex gap-x-3 gap-y-2  justify-center items-center 	items-baseline	 flex-wrap  `}
      >
        {arr?.length === 0 ? (
          <CardShimmerRender isDarkMode={isDarkMode} />
        ) : (
          <CardRender arr={arr} isDarkMode={isDarkMode} />
        )}
      </div>
    </div>
  );
};
export default CardContainer;
