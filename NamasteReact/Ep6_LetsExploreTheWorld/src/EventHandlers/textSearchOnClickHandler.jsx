const textSearchOnClickHandler = (
  arr,
  setFilteredArr,
  textSearchInput,
  setTextSearchInput
) => {
  const originalArr = [...arr];
  const filteredArray = originalArr.filter((data) =>
    data.info.name.toLowerCase().includes(textSearchInput.toLowerCase())
  );
  if (textSearchInput.trim().length > 0) {
    setFilteredArr(filteredArray);
    setTextSearchInput("");
  } else {
    setFilteredArr(originalArr);
  }
};
export default textSearchOnClickHandler;
