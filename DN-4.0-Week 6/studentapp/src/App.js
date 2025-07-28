import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About"; // Make sure this path is correct

function App() {
  return (
    <div className="container">
      <Home />
      <Contact/>
      <About/>
    </div>
  );
}

export default App;