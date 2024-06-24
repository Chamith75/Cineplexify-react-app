import React from 'react'
import { NavLink } from 'react-router-dom';
import movielogo from '../assets/movielogo2.png';
import Searchbar from './searchbar';

const Header = () => {
  return (
    <div >
        <section >

{/* nav bar starts here*/}
<section className='bg-tertiary shadow-sm '>
  <div className='col-12 d-flex ' >
     
        
    
    <ul className="nav stylelinks text-uppercase flex ">
        <li className='p-2'>
        <img src={movielogo} alt="Movie Logo" width="100" height="24"/>
        
        </li>
        
      <li className="nav-link">
        <NavLink to={"/"} className="text-decoration-none text-danger  ">
          nowPlayingMovies</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to={"/upcomingMovies"} className="text-decoration-none text-danger">
          upcomingMovies</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to={"/popularMovies"} className="text-decoration-none text-danger">
          popularMovies</NavLink>
      </li>
      
      <li className='mt-2 m-auto'>
      <Searchbar/>
      </li>
        
      
      
      
      
      <li className="nav-link">
        <NavLink to={"/profile"} className="text-decoration-none text-danger">
        <i className="bi bi-person"></i> Profile</NavLink>
      </li>
      {/* <li className="nav-link">
        <NavLink to={"/login"} className="text-decoration-none text-danger ">
        <i className="fa fa-sign-in" aria-hidden="true"></i> login</NavLink>
      </li> */}
      
      
      
      

    </ul>

  </div>
</section>

<section>
</section>


</section>
      
    </div>
  )
}

export default Header;
