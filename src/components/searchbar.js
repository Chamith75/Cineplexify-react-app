import React, {  useEffect, useState } from 'react'
import { searchMovies } from '../api/apicalls.ts'
import Searchbarlist from './searchbarlist.js';
import '../App.css';

const Searchbar = () => {
  const [searchList, setsearchList] = useState([]);
  const [query, setquery] = useState('');

  let searchmovies = async (query) => {
    try {
      let response = await fetch(searchMovies(query));
      let data = await response.json();
      setsearchList(data.results)
      console.log(searchList)
      console.log(searchMovies(query))
    } catch (error) {
      console.error("error at search movies function")
    }

    
  }
  

  useEffect(() => {
    if (query ===! ''){
      searchmovies();
    }
    
   },[query])
  let handleinput = (event) =>{
  let {value} = event.target
    console.log(value)
    setquery(value)
    searchmovies(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    searchmovies(); // Call the search function
  };

  return (
    <div>
      <form className="d-flex " role="search" >
        <input className="form-control me-2 w-100 fixed" type="search" placeholder="Search" aria-label="Search" value={query} onChange={handleinput} />
        <button className="btn btn-outline-danger" type="button" onClick={handleSubmit} >Search</button>
      </form>
      {searchList.length > 0 &&  <Searchbarlist searchList={searchList}/>}

    </div>
  )
}

export default Searchbar ;
