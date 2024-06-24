import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { moviedetails } from '../api/apicalls.ts';
import '../App.css'
import Swal from 'sweetalert2';
import axios from "axios";

import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { reduxHandleBooktickets, reduxhandlemoviename, reduxhandlenumberofSeats, reduxhandleticketcategory, reduxhandletotalcost } from '../redux/User.slice.js';


const BookTickets = () => {
    const { ticketdata } = useSelector((state) => state.users)
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let { id } = useParams();

    let [moviedata, setmoviedata] = useState([]);
    // const [moviecast, setmoviecast] = useState([]);
    let getmoviedata = async () => {
        try {
            let response = await fetch(moviedetails(id));
            let data = await response.json();
            setmoviedata(data);
            console.log(data.production_companies)
            dispatch(reduxhandlemoviename(data.title))





        } catch (error) {
            console.error('Failed to fetch movie data:', error);
        }


    }

    const [nseats] = useState([
        1, 2, 3, 4, 5, 6
    ])



    // const [ticketdata, setticketdata] = useState()
    console.log(ticketdata)


    let handlenumberofSeats = (event) => {
        let { name, value } = event.target;
        let data = {

            name,
            value
        }
        dispatch(reduxhandlenumberofSeats(data))

    }
    let handleticketcategory = (event) => {
        let { name, value } = event.target;
        let data = {
            name, value
        }
        dispatch(reduxhandleticketcategory(data))


    }






    let HandleBooktickets = async () => {
        dispatch(reduxhandletotalcost())







        //  sweet alerts
        const { value: email } = await Swal.fire({
            title: "Enter email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",



        })

        if (email) {

            dispatch(reduxHandleBooktickets(email))
            let url = "http://localhost:3004/bookings";
            await axios.post(url, {...ticketdata , email})


            Swal.fire(`Entered email: ${email}`).then(() => {

                navigate('/Payment')
                
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
            });;
        }





    }


    console.log(moviedata.adult);
    // let getmoviecaste = async( ) => {
    //     let response = await fetch(castdetails(id))
    //     let data = await response.json()
    //     setmoviecast(data)
    //     console.log(data)
    // } 

    useEffect(() => {
        getmoviedata()
        console.log(moviedata)
        console.log(id)
        console.log(moviedetails(id))




    }, [])
    // useEffect(() => {
    //     getmoviecaste()
    //     console.log(moviecast)


    // } , [id])


    return (
        <div>
            <h1 className='row d-flex justify-content-center flex-row text-bg-danger'> About Movie</h1>
            <div className='row'>
                <section className='col-6' >
                    <div  >
                        <div  >
                            <div className='  btn-group p-5 justify-content-center card-hover ' >
                                {moviedata.genres && moviedata.genres.map((genre, index) => (
                                    <button className='btn btn-danger' key={index}>{genre.name}</button>
                                ))}
                            </div>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`}
                            className=' booking-ticket-cover-image card-hover p-5 mt-0 m-5'
                            alt={''}
                        />




                    </div>
                </section>

                <div className='col-6 p-5 '>
                    <div className='row text-movie-data '>
                        <h2 className='text-center mt-5 text-danger text-uppercase' name='moviename' value={moviedata.title}  >{moviedata.title}</h2>
                        <p className='text-center text-overview-style p-3 text-uppercase' >
                            {moviedata.overview}</p>

                        <p className='text-center  p-3 text-uppercase' >
                            <label>country origin :</label>{moviedata.origin_country}</p>
                        <p className='text-center  p-3 text-uppercase' >
                            <label>original language :</label>{moviedata.original_language}</p>
                        <p className='text-center  p-3 text-uppercase' >
                            <label>Rating :</label>{moviedata.vote_average}<i className="bi bi-star"></i> ({moviedata.vote_count})</p>
                        {/*select catgory section*/}
                        <section className='d-flex justify-content-center'>
                            <form>
                                <label className='form-label text-danger m-3'> select category   </label>
                                <div className=" btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="ticketCategory"
                                        value="premium+"
                                        id="btnradio1"
                                        autoComplete="off"
                                        onChange={handleticketcategory}

                                    />
                                    <label className="btn btn-outline-danger" htmlFor="btnradio1">premium + </label>

                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="ticketCategory"
                                        value="premium"
                                        id="btnradio2"
                                        autoComplete="off"
                                        onChange={handleticketcategory}
                                    />
                                    <label className="btn btn-outline-danger" htmlFor="btnradio2">premium</label>

                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="ticketCategory"
                                        value="economy"
                                        id="btnradio3"
                                        autoComplete="off"
                                        onChange={handleticketcategory}
                                    />
                                    <label className="btn btn-outline-danger" htmlFor="btnradio3">economy</label>
                                </div>
                            </form>

                        </section>

                        {/* no of seats with map */}
                        <section className='d-flex justify-content-center'>
                            <form>
                                <label className='form-label text-danger m-3'>How many seats?</label>

                                {
                                    nseats.map((item, index) => {
                                        return (
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" key={index}>
                                                <input

                                                    type="radio"
                                                    className="btn-check"
                                                    name="NumberofTickets"
                                                    id={`seats${index + 1}`}

                                                    value={index + 1}
                                                    onChange={handlenumberofSeats}

                                                />
                                                <label className="btn btn-outline-danger"
                                                    htmlFor={`seats${index + 1}`}>{item}</label>

                                            </div>
                                        )
                                    })
                                }






                            </form>
                        </section>








                        {/* confirm booking */}
                        <section>
                            <div className='d-flex justify-content-center p-3 m-3' >
                                <button className='btn btn-danger justify-content-center ' onClick={HandleBooktickets} >Book Tickets </button>
                            </div>

                        </section>

                    </div>


                </div>




            </div>


        </div>
    )
}

export default BookTickets
