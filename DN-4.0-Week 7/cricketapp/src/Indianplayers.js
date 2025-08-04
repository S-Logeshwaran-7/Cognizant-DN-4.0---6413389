import React from 'react'

export const Indianplayers = () => {
    
    const T20players = ['Virat Kohli', 'Rohit Sharma', 'Suryakumar Yadav', 'Hardik Pandya'];
    const RanjiTrophy = ['Ajinkya Rahane', 'Cheteshwar Pujara', 'Hanuma Vihari', 'Shubman Gill'];
    const AllPlayers=[...T20players,...RanjiTrophy];
    const [odd1, , odd2, , odd3, ,odd4]=AllPlayers;
    const [,even1, ,even2, , even3, , even4]=AllPlayers;
    return(
        <div>
            <h2>Odd Players</h2>
            <ul>
                <li>{odd1}</li>
                <li>{odd2}</li>
                <li>{odd3}</li>
                <li>{odd4}</li>
            </ul>
            <hr/>

            <h2>Even Players</h2>
            <ul>
                <li>{even1}</li>
                <li>{even2}</li>
                <li>{even3}</li>
                <li>{even4}</li>
            </ul>
            <hr/>

            <h2>List of Indian Players Merged:</h2>
            <ul>
                {AllPlayers.map((players,index)=>
                   <li key={index}> {players}</li>
                )}
            </ul>
        </div>
    );
    
}
