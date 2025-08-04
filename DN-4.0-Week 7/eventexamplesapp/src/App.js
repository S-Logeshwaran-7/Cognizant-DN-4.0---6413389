import { IncrementDecrement } from './components/IncrementDecrement';
import { CurrencyConverter } from './components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <IncrementDecrement></IncrementDecrement>
      <button onClick={()=>alert("Welcome")}>Say Welcome</button><br/>
      <button onClick={()=>alert("I was clicked")}>Click on Me</button>
      <CurrencyConverter></CurrencyConverter>
    </div>
  );
}

export default App;
