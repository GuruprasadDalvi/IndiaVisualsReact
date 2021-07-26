import React ,{ useEffect }  from 'react';
import './App.css';
import IndianMap from './components/IndianMap/IndianMap';
import { firstTestFunction,LokSabhaMembersStateWise, populatedLoksabhaMap} from "./Scripts/ColoringFunctions";

function App() {

  const [functionCounter, setFunctionCounter] = React.useState(0)

  const functionHashMap = new Map([
    [0, NaN],
    [1, firstTestFunction],
    [2, LokSabhaMembersStateWise]
  ])
  useEffect(()=>{populatedLoksabhaMap()},[])
  return (
    <div className="App" >
      <IndianMap colorFunction={functionHashMap.get(functionCounter)} />
      <button onClick={
        () => {
          setFunctionCounter((functionCounter + 1)%3)
        }
      }>ChangeColor</button>
    </div>
  );
}

export default App;
