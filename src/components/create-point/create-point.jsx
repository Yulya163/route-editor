import { useState } from 'react';
import './create-point.scss';

function CreatePoint({ onCreate }) {  
    
    const [newPointValue, setNewPointValue] = useState('');

    const handleChange = (evt) => {
        setNewPointValue(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();  
       
        if(newPointValue) { 
            onCreate((prevPoints) => [
                ...prevPoints, 
                {
                    id: Date.now(),
                    name: newPointValue,
                }
            ]);
            setNewPointValue('');
        }
        
    };

    return (
        <form             
            className='create-point'
            onSubmit={handleSubmit}
        >
            <input 
                className='create-point__input' 
                type='text' 
                name='point'
                value={newPointValue}
                onChange={handleChange}
                placeholder='Новая точка маршрута' 
            />
        </form>
    )
}

export default CreatePoint;