import { Map, Placemark, Polyline, useYMaps} from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

function MyMap({ points, setPoints, setCurrentMap }) {  
    const [pointsCenterArray, setPointsCenterArray] = useState([]); 
    const ymaps = useYMaps(['Map']);    

    useEffect(() => {
        if(points) {
            setPointsCenterArray(points.map(point => (
                point.location.center
            )))
        }
    }, [points])    

    return (                 
        <Map
            width={600}
            height={400} 
            defaultState={{
                center: [53.154540, 50.079721],            
                zoom: 14,
                controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl','geocode', 'geoObject.addon.editor', 'util.bounds']}                    
            className='map'
            instanceRef={(ref) => ref && setCurrentMap(ref)}                               
        >            
            {
                points && points.map(point => (
                    <Placemark 
                        geometry={point.location.center} 
                        modules={['geoObject.addon.balloon']}                      
                        properties={{
                            balloonContentBody: `${point.name}, ${point.location.center}`                            
                        }}
                        options={{
                            preset: 'islands#redIcon',
                            draggable: true
                        }}
                        key={point.id}
                        instanceRef={(ref) => {
                            ref && ref.events.add('dragend', (evt) => {
                                const coords = evt.get('target').geometry.getCoordinates(); 
                                ymaps.geocode(coords).then((res) => {
                                    const data = res.geoObjects.get(0).properties.getAll();   

                                    setPoints((prevPoints) => {
                                        const newPoint = {
                                            id: point.id,
                                            name: data.text,
                                            location: {
                                                center: coords,
                                                zoom: 8
                                            }
                                        };
                                        return prevPoints.map((prevPoint) => prevPoint.id !== newPoint.id ? prevPoint : newPoint);
                                    });                                                                                         
                                });
                            });
                        }}
                    />
                ))
            }
            <Polyline
                geometry={pointsCenterArray}
                options={{
                    balloonCloseButton: true,
                    strokeColor: '#000',
                    strokeWidth: 4,
                    strokeOpacity: 0.5,
                }}                
            />
        </Map>  
    )

}

export default MyMap;
