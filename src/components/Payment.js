import React, { useEffect } from 'react';


import '../App.css'; // Import the CSS file
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  let navigate = useNavigate();
  const { ticketdata   } = useSelector((state) => state.users);
 
  console.log("paymentpage" ,ticketdata )

  useEffect(() => {
    const { ticketCategory, NumberofTickets, price, email, moviename } = ticketdata;
    if (!ticketCategory || !NumberofTickets || !price || !email || !moviename) {
      navigate('/');
    }
  }, [ticketdata, navigate]);

  

  return (
    <div>
      <h1 className='row d-flex justify-content-center flex-row text-bg-danger p-2 '>Payment</h1>
      <div className='row d-flex justify-content-center'>
        <div className='col-3'>
          <div className='card payment-card card-hover p-3 m-auto'>
            <div className='card-body text-danger payment-card '>
              <h5>Ticket <i className="fa fa-ticket" aria-hidden="true"></i></h5>
              <div>
              <h5 className='card-title text-uppercase'>
                  <label className='form-label'>moviename:</label> {ticketdata.moviename}
                </h5>
                <h5 className='card-title text-uppercase'>
                  <label className='form-label'>TicketId:</label> {ticketdata.tickedId}
                </h5>
                <h5 className='card-title   '>
                  <label className='form-label d-inline'>Email:</label> {ticketdata.email}
                </h5>
                <h5 className='card-title text-uppercase'>
                  <label className='form-label'>Class:</label> {ticketdata.ticketCategory}
                </h5>
                <h5 className='card-title text-uppercase'>
                  <label className='form-label'>No of seats:</label> {ticketdata.NumberofTickets}
                </h5>
                <h5 className='card-title text-uppercase'>
                  <label className='form-label'>Total Cost:</label> { ticketdata.price}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
