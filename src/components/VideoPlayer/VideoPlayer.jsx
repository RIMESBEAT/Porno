import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import VideoDisplay from "../VidoeDisplay/VideoDisplay";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./Videoplayer.css";
import ReactPaginate from "react-paginate";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const VideoPlayer = ({ searchResult }) => {
  const [movieItems, setMovieItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setIsLoading(true);
    await Axios.get(`http://localhost:4000/api/videos/${id}`)
      .then((response) => {
        setMovieItems(response.data);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

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
    <div className="video__player-container">
      <div className="display__content">
        <div className="main__player">
          {isLoading ? (
            "LOADING>>>>>>>"
          ) : (
            <VideoDisplay {...movieItems} key={id} />
          )}
        </div>

        <div className="adsbox">ads here</div>
      </div>

      <div className="movies__grid">{displayVideos}</div>
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
    </div>
  );
};

export default VideoPlayer;
