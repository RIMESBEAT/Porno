import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Searchbar = ({ setSearchResult, movieItems }) => {
  const onHandleSubmit = (e) => e.preventDefault();
  const onSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(movieItems);

    const resultArray =
      movieItems &&
      movieItems.filter(
        (movies) =>
          movies.title.includes(e.target.value) ||
          movies.description.includes(e.target.value) ||
          movies.categories.includes(e.target.value)
      );

    setSearchResult(resultArray);
  };
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid black",
            borderRadius: "4px",
            transition: ".4s ease-in",
          }}
        >
          <input
            style={{
              padding: "8px .5rem ",
              outline: "none",
              border: "none",
            }}
            onChange={onSearchChange}
            placeholder="Search"
          />
          <SearchOutlinedIcon />
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
