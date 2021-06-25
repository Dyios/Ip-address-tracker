import React from 'react'
import './Map.css'

import marker from '../../images/icon-location.svg'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet';

const myMarker = new L.Icon({
    iconUrl: marker,//require('./images/icon-location.svg'),
    iconRetinaUrl: marker,//require('./images/icon-location.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 50],
  });

function Map({pos}) {
    function ChangeView({ center }) {
        const map = useMap();
        map.setView(center);
        return null;
      }

    return (
        <MapContainer className='map' center={pos} zoom={16} scrollWheelZoom={false}>
        <ChangeView center={pos} /> 
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} icon={myMarker} >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Map
