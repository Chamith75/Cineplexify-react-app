import React, { useState } from 'react'
import Calendar from 'react-calendar';


const Calender = () => {
    const [date, setdate] = useState([]);
    const HandleDate = (date) => {
       
        
        setdate(date)
        console.log(date)

    }
    return (
        <div>
            <section>
                <div className='d-flex justify-content-center'>
                    <Calendar onChange={HandleDate} value={date} />  
                    

                    
                </div>
                <div>
                {date.toString()}
                </div>
                
            </section>

        </div>
    )
}

export default Calender
