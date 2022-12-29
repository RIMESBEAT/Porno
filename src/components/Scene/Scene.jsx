import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard'
import Suggestion from '../Suggestion/Suggestion'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const Scene = ({ searchResult }) => {

    const {id} = useParams()

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

     const pageCount =  Math.ceil(searchResult.length / videosPerPage);

     const changePage = ({ selected }) => {
       setPageNumber(selected);
     };


    
  return (
    <div style={{ width: "100%" }}>
      <div className="">
        <VideoPlayer />
      </div>
      <div className="movies__grid">
        {displayVideos}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
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

export default Scene