import { Reorder } from 'framer-motion';
import './points-item.scss';

function PointsItem({ point, onRemove }) {
    const {
        name,        
        id,
    } = point;    

    return (
        <Reorder.Item 
            className='points-item'
            value={point}
            whileDrag={{
                scale: 1.1,
                boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)',              
            }}
        >
            {name}
            <button 
                type='button'
                onClick={() => onRemove(id)}
            >X</button>
        </Reorder.Item>
    )
}

export default PointsItem;