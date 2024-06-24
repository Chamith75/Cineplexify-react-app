import React, { useEffect, useState } from 'react'
import { popularMovies } from '../api/apicalls.ts';

const PopularMoviComponet = () => {
  const [PopularMovieList, setPopularMovieList] = useState([]);
  const getPopularMovies = async( ) =>{
    let response =await fetch(popularMovies);
    let data = await response.json();
    setPopularMovieList(data.results);
   


  }

  useEffect(()=>{
    getPopularMovies()
  })

  return (
    <div>
      <section >
      <div className='row d-flex justify-content-center  mt-5'>{
        PopularMovieList.map((movie, index) => {
          return (
            
             
                <div key={index} className=" col-md-3 mb-4 d-flex justify-content-center postionoing ">
                  <div className="container mt-5 ">
                    <div className="card cardwidth shadow-lg p-3 mb-5 bg-body-tertiary rounded card-hover " >
                                        
                      <div className="card-body me-3  " >
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
                        <h5 className="card-title">{movie.original_title}</h5>
                        
                        
                        <p className="card-text  "><small className="text-muted">
                        <label className='form-label  '>Release date :</label>{movie.release_date}</small></p>
                        <p className="card-text"><small className="text-muted">
                          <label className='form-label '>Popularity :</label>{movie.popularity}</small></p>
                        <p className="card-text"><small className="text-muted">
                          <label>Rating :</label>{movie.vote_average}</small></p>
                          
                        
                      </div>
                    </div>
                  </div>
                </div>
              
            
          )
    
    
        })
        }
    
    
    </div>
    </section>
        
      
    </div>
  )
}

export default PopularMoviComponet
