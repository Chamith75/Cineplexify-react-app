import React, { useEffect, useState } from 'react';
import { nowPlayingMovies } from '../api/apicalls.ts';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const NowplayingComponent = () => {
  let navigate = useNavigate();
  let [nowPlayingMoviesList, setnowPlayingMoviesList] = useState([]);
  let getnowplayingmovies = async () => {
    let response = await fetch(nowPlayingMovies)
    let data = await response.json()
    console.log(data)
    setnowPlayingMoviesList(data.results)
  }

  

  useEffect(() => {
    getnowplayingmovies();
  }, [])

  let bookticket = (movie) => {
    navigate(`BookTickets/${movie.id}`);


  }
  return (
    <section >
      <div className='row d-flex justify-content-center flex-row  postionoing mt-5 position-position-relative'>{
        nowPlayingMoviesList.map((movie, index) => {
          return (


            <div key={index} className=" col-md-3 mb-4 d-flex justify-content-center postionoing ">
              <div className="container mt-5 flex ">
                <div className="card cardwidth shadow-lg p-3 mb-5 bg-body-tertiary rounded card-hover  " >

                  <div className="card-body me-3 flex-row position-static " >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
                    <h5 className="card-title">{movie.original_title}</h5>
                    {/* <p className="card-text">
                      {movie.overview
                      }
                    </p> */}

                    <p className="card-text  "><small className="text-muted">
                      <label className='form-label  '>Release date :</label>{movie.release_date}</small></p>
                    <p className="card-text"><small className="text-muted">
                      <label className='form-label '>Popularity :</label>{movie.popularity}</small></p>
                    <p className="card-text"><small className="text-muted">
                      <label>Rating :</label>{movie.vote_average}</small></p>
                    <div className='row justify-content-center p-3' >
                      <button className='btn btn-danger justify-content-center ' onClick={() => bookticket(movie)}>Book Now</button>
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


  );
}

export default NowplayingComponent;
