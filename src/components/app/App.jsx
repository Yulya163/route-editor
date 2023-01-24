import CreatePoint from '../create-point/create-point';
import { defaultPoints } from '../../mock';
import PointsList from '../points-list/points-list';
import './App.scss';
import map from '../../img/map-stub.png';
import { useState } from 'react';

function App() {
  const [points, setPoints] = useState(defaultPoints);

  const onRemove = (id) => {
    setPoints(points.filter(point => point.id !== id))
  };

  return (
    <div className="app">
      <div className="wrapper">
        <CreatePoint onCreate={setPoints}/>  
        <PointsList points={points} setPoints={setPoints} onRemove={onRemove}/>
      </div>
      <div className="map">
        <img className='map__img' src={map} alt="" />
      </div>
    </div>
  );
}

export default App;
