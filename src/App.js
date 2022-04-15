import './App.css';
import { useState, useEffect } from 'react';
import Canvas from './Canvas';

function App() {

  // const [ballRadius, setBallRadius] = useState(0.2);
  // const [ballColor, setBallColor] = useState()
  // const [ballVelocity, setBallVelocity] = useState(1.0);

  return (
    <div className="App">
      <Canvas width={800} height={600}/>
    </div>);
}

export default App;
