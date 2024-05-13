const filterButtonOnClickHandler = (
  arr,
  btnName,
  setBtnName,
  setFilteredArr
) => {
  const originalArr = [...arr];
  const filteredArray = originalArr.filter((data) => data.info.avgRating > 4);

  if (btnName === "Filtered Foods") {
    setBtnName("UnFilter Foods");
    setFilteredArr(filteredArray);
  } else {
    setBtnName("Filtered Foods");
    setFilteredArr(originalArr);
  }
};

export default filterButtonOnClickHandler;
