import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ReactPaginate from "react-paginate";
import "./Movies.css";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Movies = ({ searchResult, isLoading }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const videosPerPage = 60;

  const pagesVisited = pageNumber * videosPerPage;

  const displayVideos =
    searchResult &&
    searchResult
      .slice(pagesVisited, pagesVisited + videosPerPage)
      .map((movies) => {
        const { _id, duration } = movies;
        let time = duration;
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        return <MoviesCard {...movies} key={_id} />;
      });

  const pageCount = Math.ceil(searchResult.length / videosPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="movies__grid movies__container">{displayVideos}</div>

      <div className="pagination__box">
        <ReactPaginate
          previousLabel={<KeyboardDoubleArrowLeftOutlinedIcon />}
          nextLabel={<KeyboardDoubleArrowRightOutlinedIcon />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination__container"}
          previousLinkClassName={"prev__btn"}
          nextLinkClassName={"next__btn"}
          disabledClassName={"disable__btn"}
          activeClassName={"active__btn"}
        />
      </div>
    </>
  );
};

export default Movies;
