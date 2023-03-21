import { useNavigate,Link } from "react-router-dom";
import { useRef } from 'react';

const Navbar = ({searchText, setSearchText }) => {
  const history  = useNavigate();
  const searchRef = useRef()

  const updateSearchText = (e) => {
    history('/search')
    setSearchText(e.target.value);
  }

  const searchIt = () => {
    const searchedItem = searchRef.current.value
    setSearchText(searchedItem)
  }

  // const handleSearchSubmit = (event) => {
  //   console.log("Target Value",event.target.value)
  //   event.preventDefault();
  //   console.log(`Searching for ${searchText}`);
  //   history('/search')
  //   setSearchText(event.target.value);
  //   // Implement your search logic here
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Brawser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" to="#">Action</a></li>
                      <li><a className="dropdown-item" to="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" to="#">Something else here</a></li>
                    </ul>
                  </li> */}
              <li className="nav-item">
                <Link className="nav-link disabled">Comming soon</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                ref={searchRef}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              <button 
              className="btn btn-outline-success" 
              type="search button" //>
               onClick=  {searchIt}>
                Search
              </button>

            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
