import React from 'react'
import "../Pages.Style/Map.Style.css"
import {Link} from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {

 
  return (
    <div className='divMap'>
   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
<Link to="/"><button>Close</button></Link>
</div>

  )

}

export default Map
