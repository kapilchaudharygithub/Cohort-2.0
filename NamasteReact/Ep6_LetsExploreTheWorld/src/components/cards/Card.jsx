const Card = ({
  isDarkMode,
  name,
  cuissines,
  rating,
  km,
  price,
  img,
  duration,
  locality,
  areaName,
}) => {
  const CLOUDINARY =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <div className={`card  w-[240px]`}>
      <div
        className={`card min-h-[370px] hover:min-w-full w-[230px] rounded-md flex flex-col gap-y-3 p-1 ${
          isDarkMode ? "text-gray-800 bg-red-200" : "text-gray-200 bg-gray-600"
        }`}
      >
        <img
          src={`${CLOUDINARY}${img}`}
          alt=""
          srcSet=""
          className={`h-[150px] w-full border-2 p-2 ${
            isDarkMode ? "border-gray-400" : "border-blue-300"
          } rounded-md`}
        />
        <h3 className={`text-lg font-medium`}>{name}</h3>
        <p className="cuissines">{cuissines}</p>
        <div className="metaData flex justify-between">
          <p className="locality">{locality}</p>
          <p className="areaName">{areaName}</p>
        </div>

        <div className="metaData flex justify-between">
          <p className="rating p-1 bg-green-400 rounded-md">Rating {rating}</p>
          <p className="km">{km}</p>
        </div>
        <div className="metaData flex justify-between">
          <p className="price">{price}</p>

          <p className="duration">{duration}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
