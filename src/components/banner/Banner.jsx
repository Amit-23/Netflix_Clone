import "./Banner.css";
import axios from "../../axios";
import { useState, useEffect } from "react";
import requests from "../../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
  async function fetchData() {
    try {
      const request = await axios.get(requests.fetchNetflixOriginals);

      if (request.data.results && request.data.results.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        setMovie(request.data.results[randomIndex]);
      } else {
        console.warn("API response has no results");
        
      }

      return request;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
}, []);


  

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "100% 100%",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <p className="banner_description">
          {truncate(movie?.overview,
            150
          )}
        </p>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
