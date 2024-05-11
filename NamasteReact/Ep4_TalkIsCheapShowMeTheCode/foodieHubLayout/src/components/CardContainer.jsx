import Card from "./Card";
import { DATA } from "./data";
const CardContainer = ({ isDarkMode }) => {
  const arr =
    DATA.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div className={`flex  justify-center  w-full  mt-3`}>
      <div
        className={`cardContainer w-full sm:w-[90vw] min-h-[80vh] flex gap-x-3 gap-y-2  justify-center items-center flex-wrap  `}
      >
        {arr.map((data) => (
          <Card
            key={data.info.id}
            isDarkMode={isDarkMode}
            name={data.info.name}
            cuissines={data.info.cuissines}
            rating={data.info.avgRatingString}
            img={data.info.cloudinaryImageId}
            km={data.info.sla.lastMileTravelString}
            duration={data.info.sla.slaString}
            price={data.info.costForTwo}
            locality={data.info.locality}
            areaName={data.info.areaName}
          />
        ))}
        <Card isDarkMode={isDarkMode} name="Bhandara" />
      </div>
    </div>
  );
};
export default CardContainer;
