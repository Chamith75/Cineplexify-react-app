import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [input, setInput] = useState("");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchdata(input);
  }

  const handleInput = (event) => {
    let { value } = event.target;
    setInput(value);
  }

  const fetchdata = async (value = "") => {
    try {
      let url = "http://localhost:3004/bookings";
      let response = await fetch(url);
      let data = await response.json();

      if (value) {
        const result = data.filter(
          (booking) => value && booking.tickedId.toString() === value || booking.email.toString() === value
        );
        if (result.length > 0) {
          setBookings(result);
          setError(null);
        } else {
          setBookings([]);
          setError("No booking found for the provided ticket ID or email.");
        }
      } else {
        setBookings(data);
        setError(null);
      }
    } catch (error) {
      console.log("Error at fetch data function", error);
      setError("An error occurred while fetching data.");
    }
  }

  useEffect(() => {
    if (input ===! ''){
      fetchdata();
    }
  });

  return (
    <div>
      <h1 className='row d-flex justify-content-center flex-row text-bg-danger p-2 text-uppercase'>Your Bookings</h1>
      <section>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-4 m-3'>
            <form className="d-flex p-3" role="search" onSubmit={handleSubmit}>
              <input type='text' className='form-control' placeholder='Enter ticket ID or registered email' value={input} onChange={handleInput} />
              <button className="btn btn-outline-danger" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className='row d-flex justify-content-center'>
          <div className='col-6'>
            {error ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Ticket ID</th>
                    <th>Ticket Category</th>
                    <th>Number of Tickets</th>
                    <th>Price</th>
                    <th>Movie Name</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.email}</td>
                        <td>{user.tickedId}</td>
                        <td>{user.ticketCategory}</td>
                        <td>{user.NumberofTickets}</td>
                        <td>{user.price}</td>
                        <td>{user.moviename}</td>
                      </tr>

                    )
                  }
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
