import { UserPage } from "./UserPage"
import { useState } from "react";
export const Guest = () => {
    const [flag,setFlag] = useState(false);
  const flights = [
          { id: 1, number: 'AI101', destination: 'New York', time: '10:00 AM' },
          { id: 2, number: 'BA202', destination: 'London', time: '2:00 PM' },
          { id: 3, number: 'EK303', destination: 'Dubai', time: '6:00 PM' },
      ];
      
      const handleFlightBooking=()=>{
        setFlag(true);
      }
      if(flag){
        return <UserPage />
      }
    return (
      <div>
          <h1>Guest Page</h1>
          <h2>Flight List</h2>
          <ul>
              {flights.map(flight => (
                  <li key={flight.id}>
                      {flight.number} - {flight.destination} at {flight.time}
                  </li>
              ))}
          </ul>
          <button onClick={handleFlightBooking}>Log in</button>
      </div>
    )
}   
