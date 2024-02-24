import React, {useState} from "react"
import SearchLocationInout from "./components/HomeMap"
import Mapcomponent from "./components/HomeMap"

function App() {
    const  {selectedLocation, setSelectedLocation} = useState(
        {
            lat: 28.7041,
            lng: 77.1025,
        }
    );
    return (
        <div style={{height: "100vh", width: "100% "}}>
            <SearchLocationInout setSelectedLocation={selectedLocation}/>
            <Mapcomponent selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        </div>
    )
}