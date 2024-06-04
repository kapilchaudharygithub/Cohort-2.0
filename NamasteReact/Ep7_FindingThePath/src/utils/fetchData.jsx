import axios from "axios";

const fetchData = async (setArr,setFilteredArr) => {
  try {
    const response = await axios.get(
      "https://kapilchaudharygithub.github.io/users-api-server/db.json"
    );

    const arr =
      response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
   

    if (arr && arr.length > 0) {
      setArr(arr);
      setFilteredArr(arr);
      console.log("Rendered from API");
    } else {
      throw new Error("Empty response from API");
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
