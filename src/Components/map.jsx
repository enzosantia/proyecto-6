import React from 'react';
import {
        GoogleMap,
        withScripJs,
        withGoogleMaps

}   from 'react-google-maps'; 

    const Map = (props) => {
        return (
            <GoogleMap/>
        );
    };

    export default withScripJs(
        withGoogleMaps(
            Map 
        )
    )