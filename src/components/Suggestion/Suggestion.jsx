import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

const Suggestion = ({searchResult}) => {

    
  return (
    <div>
      {searchResult &&
        searchResult.map((movie) => {
          return <MoviesCard movie={movie} />;
        })}
    </div>
  );
}

export default Suggestion