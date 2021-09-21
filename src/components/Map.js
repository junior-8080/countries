import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

    const {
            lat,long
    } = props.match.params

    const location = {
        lat:parseInt(lat),
        lng:parseInt(long)
    }

    console.log(location)

    const zoom = 9

  
    return (
        <div style={{ height: '100vh', width: '100%' }}>
           <GoogleMapReact
             bootstrapURLKeys={{ key: '' }}
             defaultCenter={location}
             defaultZoom={zoom}
      />
        </div>

  
    );
}

export default Map;
