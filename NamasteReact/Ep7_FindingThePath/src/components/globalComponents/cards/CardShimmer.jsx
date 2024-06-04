const CardShimmer = ({ isDarkMode }) => {
  return (
    <div className={`card h-[300px] w-[240px]`}>
      <div
        className={`card h-[290px] hover:min-w-full w-[230px] rounded-md flex flex-col gap-y-3 p-3 ${
          isDarkMode ? "text-gray-800 bg-red-300" : "text-gray-200 bg-gray-600"
        }`}
      >
        <div
          className={`h-[150px] w-full  p-2 rounded-md ${
            isDarkMode ? " bg-red-400" : " bg-gray-400"
          } rounded-md`}
        ></div>
        <h3
          className={`text-lg font-medium h-[20px] w-[100%]  rounded-md ${
            isDarkMode ? " bg-red-400" : " bg-gray-400"
          }
        `}
        ></h3>
        <p
          className={`text-lg font-medium h-[20px] w-[100%]  rounded-md ${
            isDarkMode ? " bg-red-400" : " bg-gray-400"
          }
        `}
        ></p>
        <div className="metaData flex justify-between gap-x-3">
          <p
            className={`text-lg font-medium h-[20px] w-[50%]  rounded-md ${
              isDarkMode ? " bg-red-400" : " bg-gray-400"
            }
        `}
          ></p>
          <p
            className={`text-lg font-medium h-[20px] w-[50%]  rounded-md ${
              isDarkMode ? " bg-red-400" : " bg-gray-400"
            }
        `}
          ></p>
        </div>

        <div className="metaData flex justify-between gap-x-3">
          <p
            className={`text-lg font-medium h-[20px] w-[50%]  rounded-md ${
              isDarkMode ? " bg-red-400" : " bg-gray-400"
            }
        `}
          ></p>
          <p
            className={`text-lg font-medium h-[20px] w-[50%]  rounded-md ${
              isDarkMode ? " bg-red-400" : " bg-gray-400"
            }
        `}
          ></p>
        </div>
        <div className="metaData flex justify-between gap-x-3">
          <p
            className={`text-lg font-medium h-[20px] w-[50%]  rounded-md ${
              isDarkMode ? " bg-red-400" : " bg-gray-400"
            }
        `}
          ></p>

          <p
            className={`text-lg font-medium h-[20px] w-[50%]  rounded-md ${
              isDarkMode ? " bg-red-400" : " bg-gray-400"
            }
        `}
          ></p>
        </div>
      </div>
    </div>
  );
};
export default CardShimmer;
