

import {  Route, Routes } from 'react-router-dom';
import './App.css';
import NowplayingComponent from './components/NowplayingComponent';
import UpComingComponent from './components/UpComingComponent';
import PopularMoviComponet from './components/popularMoviComponet';
import Profile from './components/profile';
import Login from './components/Login';
import Header from './components/header';
import BookTickets from './components/BookTickets';
import Payment from './components/Payment';




function App() {

  return (<>
  <Header/>
    
    <Routes>
      <Route path='/' element={<NowplayingComponent/>} />
      <Route path='/upcomingMovies' element={<UpComingComponent/>}  />
      <Route path='/popularmovies' element={< PopularMoviComponet/>}  />
      <Route path='/profile' element={< Profile/>}  />
      <Route path='/login' element={< Login/>}  />
      <Route path='/Payment' element={<Payment/>} />
      <Route path='BookTickets'> 
      <Route path = ':id'  element={<BookTickets/>} ></Route>
      
      </Route>
    </Routes>
  </>



  )




}

export default App;
