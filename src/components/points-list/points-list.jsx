import { Reorder } from 'framer-motion';
import PointsItem from '../points-item/points-item';

import './points-list.scss';

function PointsList({ points = [], setPoints, onRemove }) {
    
    return (
        <Reorder.Group 
            axis="y" 
            values={points} 
            onReorder={setPoints} 
            className='points-list'
        >        
            {
                points.map(point => (
                    <PointsItem 
                        point={point} 
                        key={point.id}
                        onRemove={onRemove}/>
                ))
            }
        </Reorder.Group>        
    )
}

export default PointsList