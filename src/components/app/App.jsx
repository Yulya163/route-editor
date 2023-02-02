import { useState } from 'react';
import PointsList from '../points-list/points-list';
import CreatePoint from '../create-point/create-point';
import MyMap from '../my-map/my-map';

import './app.scss';

function App() {
  const [points, setPoints] = useState([]);    
  const [currentMap, setCurrentMap] = useState(null);

  return (    
    <div className="app">
      <div className="wrapper">          
        <CreatePoint onCreate={setPoints} currentMap={currentMap} />  
        <PointsList points={points} setPoints={setPoints}/>
      </div>           
      <MyMap points={points} setPoints={setPoints} setCurrentMap={setCurrentMap}/>
    </div>    
  );
}

export default App;
