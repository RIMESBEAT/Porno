import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TextField } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";

const Navbar = ({ setSearchResult, movieItems }) => {
  const [searchToggle, setSearchToggle] = useState(false);

  const onSearchIcon = () => setSearchToggle(!searchToggle);
  return (
    <div className="nav__container">
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>
              RIMES<span style={{ color: "orangered" }}>TUBE</span>
            </h1>
          </Link>
        </div>
        <div className="list__items">
          <ul className="links">
            <Link to="/">NEW</Link>
            <Link to="/">POPULAR</Link>
            <Link to="/">BDSM</Link>
            <Link to="/">LESBIAN</Link>
          </ul>
          <div className="search__box">
            <div className={searchToggle ? "" : "hidden"}>
              <Searchbar
                movieItems={movieItems}
                setSearchResult={setSearchResult}
              />
            </div>
            <div className="search__icon-sm" onClick={onSearchIcon}>
              {searchToggle ? <CloseOutlinedIcon /> : <SearchOutlinedIcon />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
