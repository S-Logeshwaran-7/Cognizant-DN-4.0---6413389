import React from 'react'

export const ListofPlayers = () => {
  const players=[
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 92 },
    { name: 'KL Rahul', score: 65 },
    { name: 'Shikhar Dhawan', score: 45 },
    { name: 'Rishabh Pant', score: 78 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Jasprit Bumrah', score: 30 },
    { name: 'Mohammed Shami', score: 25 },
    { name: 'Yuzvendra Chahal', score: 40 },
    { name: 'Suryakumar Yadav', score: 88 }
  ];

  const lowScore=players.filter(players => players.score<70);
  return(
    <div> 
      <h2>List of Players</h2>
      <ul>
        {players.map((players,index) => (
          <li key={index}> {players.name} : {players.score}
          </li>))}
      </ul>
      <hr/>
      <h2>List of Players having Score Less than 70</h2>
      <ul>
        {lowScore.map((players,index)=>(
          <li key={index}>{players.name} : {players.score}
          </li>))}
      </ul>
    </div>
  );
}
