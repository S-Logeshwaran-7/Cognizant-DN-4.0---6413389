import { Guest } from './Guest';
import { useState } from 'react';

export const UserPage = () => {
    const [flag, setFlag] = useState(false);
    const flights = [
        { id: 1, number: 'AI101', destination: 'New York', time: '10:00 AM' },
        { id: 2, number: 'BA202', destination: 'London', time: '2:00 PM' },
        { id: 3, number: 'EK303', destination: 'Dubai', time: '6:00 PM' },
    ];
    const handleFlightBooking=(flight)=>{
        alert(`Flight ${flight.number} To ${flight.destination} is booked succesfully!`);
    }
    
      const handleUser=()=>{
        setFlag(true);
      }
      if(flag){
        return <Guest />
      }
  return (
    <div>
        <h1>User Page</h1>
        <h2>Flight List</h2>
        <ul>
            {flights.map(flight => (
                <li key={flight.id}>
                    {flight.number} - {flight.destination} at {flight.time}
                    <button onClick={()=> handleFlightBooking(flight)}>Book</button>
                </li>
            ))}
        </ul>
        <button onClick={handleUser}>Logout</button>
    </div>
  )
}
