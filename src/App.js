import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView"
import { useState, useEffect } from "react";
import MovieView from "./components/MovieView"
import NotFound from "./components/NotFound"
// import Search from "./components/Search";
// import NavBar2 from "./components/Navbar2";

function App() {


  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    if(searchText)
    {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=f06e799237d5a0a2f66c86b622aca3f8&language=en-US&query=${searchText}&page=1&include_adult=false
  `)
      .then(response=>response.json())
      .then(data => {
        setSearchResults(data.results)
      })

    }
  },[searchText])
  
  return (
    <div>
      <Navbar searchText={searchText} setSearchText = {setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route 
        path="/search" 
        element={<SearchView keyword={searchText} searchResults={searchResults} />}
        />
        <Route path="/movies/:id" element={<MovieView />}/>
        <Route path="*" element={<NotFound />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;
