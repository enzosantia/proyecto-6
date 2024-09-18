import React from 'react';
import {
        GoogleMap,
        withScripJs,
        withGoogleMaps

}   from 'reac-google-maps'; 

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