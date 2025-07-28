import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetail from './TrainerDetail'; // Ensure this matches the file name
import { trainersData } from './TrainersMock';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersData} />} />
          <Route path="/trainers/:id" element={<TrainerDetail trainers={trainersData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;