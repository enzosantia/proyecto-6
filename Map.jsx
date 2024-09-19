import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    }from 'react-google-maps'; 

    const Map = () => {
        
        const [centrar, setCentrar] = useState({ lat: -38.9648026, lng: -68.0890925 });
        
        const eventMapClick = (event) => {
            setCentrar({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        };

        return (
            <GoogleMap
            center={centrar}
            onClick={eventMapClick}
            >
              <Marker position={center} />
            </GoogleMap>
        );    
    
    };

    export default WrappedMap = withScriptjs(
        withGoogleMap((props) => <Map {...props} />)
    );