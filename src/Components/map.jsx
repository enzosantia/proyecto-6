import React from 'react';
import {
        GoogleMap,
        withScripJs,
        withGoogleMaps

}   from 'react-google-maps'; 

    const Map = (props) => {
        return (
            <GoogleMap defaultZoom={10}
            defaultCenter={{ lat :-38.9648026 , lng :-68.0890925 }}
            />
        );
    };

    export default withScripJs(
        withGoogleMaps(
            Map
        )
    )