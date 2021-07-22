import React from 'react';
import './App.css';
import IndianMap from './components/IndianMap/IndianMap';
import { firstTestFunction } from "./Scripts/ColoringFunctions";

function App() {

  const [functionCounter, setFunctionCounter] = React.useState(0)

  const functionHashMap = new Map([
    [0, NaN],
    [1, firstTestFunction]
  ]
  )
  return (
    <div className="App">
      <IndianMap colorFunction={functionHashMap.get(functionCounter)} />
      <button onClick={
        () => {
          setFunctionCounter((functionCounter + 1)%2)
        }
      }>ChangeColor</button>
    </div>
  );
}

export default App;
