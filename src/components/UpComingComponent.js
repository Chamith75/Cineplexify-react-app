import React, { useEffect, useState } from 'react'
import { upcomingMovies } from '../api/apicalls.ts';

const UpComingComponent = () => {
  

  const [upcomingMovieslist, setupcomingMovieslist] = useState([]);

  const getupcomingMovies = async () => {
    let respone = await fetch(upcomingMovies);
    let data = await respone.json();
    setupcomingMovieslist(data.results)
    
    

  }
  useEffect(() => {
    getupcomingMovies()
  })

  return (
    <div>
      <section >
      <div className='row d-flex justify-content-center  mt-5'>{
        upcomingMovieslist.map((movie, index) => {
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
                          <div className='row justify-content-center p-3' >
                          <button className='btn btn-danger  '>Notify-me</button>
                          </div>
                        
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

export default UpComingComponent
