import { useEffect, useState } from 'react';
import { useYMaps } from '@pbe/react-yandex-maps';

import './create-point.scss';

function CreatePoint({ onCreate, currentMap }) { 
    const [pointCoords, setPointsCoords] = useState([]); 
    const [newPointValue, setNewPointValue] = useState('');    

    const ymaps = useYMaps(['Map']);  

    useEffect(() => {  
        if(ymaps && newPointValue) {
            ymaps.geocode(newPointValue)
            .then((res) => {         
                const firstGeoObject = res.geoObjects.get(0);    
                const coords = firstGeoObject.geometry.getCoordinates();                            
                setPointsCoords(coords);                   
            })
        }  
    }, [ymaps, newPointValue]);

    const handleInputChange = (evt) => setNewPointValue(evt.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();         

        onCreate((prevPoints) => [
            ...prevPoints, 
            {
                id: Date.now(),
                name: newPointValue,
                location: {
                    center: pointCoords,
                    zoom: 8
                }
            }
        ]);

        setNewPointValue('');         
        currentMap.setCenter(pointCoords, 14);             
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
                placeholder='Новая точка маршрута'                
                onChange={handleInputChange} 
                value={newPointValue}           
            />
        </form>
    )
}

export default CreatePoint;