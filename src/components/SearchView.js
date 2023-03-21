import Hero from "./Hero";
import { Link } from "react-router-dom";
import NoPoster from "../images/NoPoster.jpg"


//API=f06e799237d5a0a2f66c86b622aca3f8
//example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=f06e799237d5a0a2f66c86b622aca3f8&language=en-US&query=star%20wars&page=1&include_adult=false

const MovieCard = ({ movie }) => {
  let thePosterUrl;
  let noImageFlag=false
  if (movie.poster_path) {
    thePosterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    noImageFlag=false
  } else {
    thePosterUrl = NoPoster
    noImageFlag=false

  }
  
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
    
      <div className="card">
        <img src={thePosterUrl} className="card-img-top" alt={movie.original_title} />
        {noImageFlag && ( <p className="txt-over-img" >{movie.original_title}</p>)
         
        }
        
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary" >
            Show Details
          </Link>
        </div>
      </div>
      </div>

  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are Searching for ${keyword}`;
  const resultsHtml =
    searchResults &&
    searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />;
    });
    

  return (
    <>
      <Hero text={title} />
      {resultsHtml.length === 0
        ? <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <p className="leed text-center mt-5 fs-1 text-danger">
              No results found for: <strong>{keyword}</strong>.
            </p>
            <p className="leed text-center fs-1">Please try again.</p>
          </div>
        </div>
      </div>
        :<div className="container"><div className="row">{resultsHtml}</div></div>
         
      }

      {/* {resultsHtml ? 
          <div className="container">
            <div className="row">{resultsHtml}</div>
          </div>
      :
      <p>No search results</p>
} */}
    </>
  );
};
export default SearchView;
