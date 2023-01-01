import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Navbar from "./components/Navabar/Navbar";
import Suggestion from "./components/Suggestion/Suggestion";
import Scene from "./components/Scene/Scene";



function App() {

  const [movieItems, setMovieItems] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await Axios.get(`https://rimestube-backend.onrender.com/api/videos`).then(
      (response) => {
        setMovieItems(response.data);
        setSearchResult(response.data);
      }
    );
  };

  console.log(searchResult);
  return (
    <div className="App">
      <Navbar setSearchResult={setSearchResult} movieItems={movieItems} />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Movies searchResult={searchResult} />}
            exact
          />
          <Route
            path="/videos"
            element={<Scene searchResult={searchResult} />}
          />
          <Route
            path="/videos/:id"
            element={<VideoPlayer searchResult={searchResult} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
