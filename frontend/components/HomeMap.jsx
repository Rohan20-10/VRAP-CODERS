import React, {useState} from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
// import {VITE_GOOGLE_MAPS_API_KEY} from "dotenv";

const MapComponent = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "",
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <div style={{marginTop : "50px"}}>
            <GoogleMap
            mapContainerStyle={{
                height: "800px",
            }}
            center={{selectedLocation}}
            zoom={13}
            onLoad={onMapLoad}
            ></GoogleMap>
        </div>
    );
};


export default MapComponent;