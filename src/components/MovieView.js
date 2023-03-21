import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoPoster from "../images/NoPoster.jpg";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true); //by default its loading means true

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f06e799237d5a0a2f66c86b622aca3f8&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    let posterPath;
    let filmOverview;
    if (movieDetails) {
      if (movieDetails.poster_path) {
        posterPath = `https://www.themoviedb.org/t/p/w500/${movieDetails.poster_path}`;
      } else {
        posterPath = NoPoster;
      }
      if (movieDetails.overview) {
        filmOverview = movieDetails.overview;
      } else {
        filmOverview = `noOverview`;
      }

      const backdropUrl = `https://www.themoviedb.org/t/p/original${movieDetails.backdrop_path}`;
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt={movieDetails.original_title}
                  className=" img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{filmOverview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
  // console.log(id);
};

export default MovieView;
