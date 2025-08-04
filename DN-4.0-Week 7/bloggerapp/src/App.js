import logo from './logo.svg';
import './App.css';
import { Book } from './components/Book';
import { Course } from './components/Course';
import { Blog } from './components/Blog';

function App() {
  return (
    <div className="App">
      <div className="BookDetails">
        <h2>Book Details</h2>
        <Book/>
      </div>
      <div className="CourseDetails">
        <h2>Course Details</h2>
        <Course/>
      </div>
      <div className="BlogDetails">
        <h2>Blog Details</h2>
        <Blog/>
      </div>
    </div>
  );
}

export default App;
