import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // https://www.npmjs.com/package/@react-google-maps/api
import { GOOGLE_API_KEY } from "../../config";

const containerStyle = {
    width: '100%',
    height: '400px'
};
  
export default function Map({latitude, longitude}) {

    const center = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
    };

    // https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng#maps_event_click_latlng-javascript

    // https://stackoverflow.com/questions/65399542/react-google-maps-api-how-to-search-current-location-for-a-search-result

    return (
        <div>
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} >
                    <Marker
                    onClick={() => {
                        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
                    }}
                    position={center} /> { /* Child components, such as markers, info windows, etc. */ }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
