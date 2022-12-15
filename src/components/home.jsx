import React, { useState, useEffect } from "react";
import Card from "./card";
import "./card.scss";
import Image from "../images/images.png";
const Home = () => {
  const [data, setdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;

  const fetchfrommoviedb = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setdata(data.results);
        console.log(data.results);
      });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchfrommoviedb(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    fetchfrommoviedb(FEATURED_API);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="maxginx">
    <img src={Image} alt="" srcSet="" style={{marginTop:"15px"}} />
      <header>
        <form onSubmit={handleOnSubmit} className="float-right d-flex justify-content-end">
          <div className="input-group mb-3 inpdiv">
            <input
              type="search"
              className="form-control"
              value={searchTerm}
              onChange={handleOnChange}
              placeholder="Search for the movie"
              aria-describedby="button-addon2"
            />
          </div>
        </form><hr />
      </header>
      <h3>Most recent Movies</h3>
      <div className="d-flex justify-content-center flex-wrap ">
        {data.length > 0  &&
          data.map((movie) => <Card key={movie.id} {...movie} />)
          }
      </div>
    </div>
  );
};

export default Home;
