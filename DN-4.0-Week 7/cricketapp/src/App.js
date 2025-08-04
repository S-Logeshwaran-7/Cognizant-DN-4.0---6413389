import './App.css';
import { ListofPlayers } from './ListofPlayers';
import { Indianplayers } from './Indianplayers';
import { useState } from 'react';

function App() {
  const [flag,setFlag]=useState(true);
  return (
    <div className='App'>
      <h2>Cricket Review</h2>
      <button {...() => setFlag(!flag)}>
        (Current: {flag ? 'List of Players' : 'Indian Players'})</button>
        {flag ? <ListofPlayers/> : <Indianplayers/>}
    </div>
  );
}

export default App;
