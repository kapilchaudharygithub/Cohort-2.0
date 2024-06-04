import Card from "./Card";
const CardRender = ({ arr, isDarkMode }) =>
  arr?.map((data) => (
    <Card
      key={data?.info?.id}
      isDarkMode={isDarkMode}
      name={data?.info?.name}
      cuissines={data?.info?.cuisines.join(",  ")}
      rating={data?.info?.avgRatingString}
      img={data?.info?.cloudinaryImageId}
      km={data?.info?.sla.lastMileTravelString}
      duration={data?.info?.sla.slaString}
      price={data?.info?.costForTwo}
      locality={data?.info?.locality}
      areaName={data?.info?.areaName}
    />
  ));
export default CardRender;
