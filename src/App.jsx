import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Details from './Components/Details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Details/>
    </>
  )
}

export default App
