import { useState } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  
  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default App;
