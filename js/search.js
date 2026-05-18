const search = function () {
  const input = document.querySelector(".search-block > input");
  const searchBtn = document.querySelector(".search-block > button");
  let searchValue = "";

  input.addEventListener("input", (event) => {
    searchValue = event.target.value;
  });
  searchBtn.addEventListener("click", () => {
    console.log(searchValue);
  });
};

search();
