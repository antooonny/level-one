import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";



function App() {
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count")) || 0
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  });

  
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>Click me</button>
      <h1>
        Clicked {count} times.
      </h1>
    </div>
  );
}

export default App;
