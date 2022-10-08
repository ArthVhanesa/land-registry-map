import React from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import GeojsonLayer from './GeojsonLayer';
import '../css/Map.css';

// specify the path to the marker files
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10,
    basemap: 'osm',
    geojsonvisible: true,
    visibleModal: false,
  };

  render() {
    var center = [this.state.lat, this.state.lng];
    var z = this.state.zoom;

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }

    return (
      <Map zoom={z} center={center}>
        {this.state.geojsonvisible && 
          <GeojsonLayer url="geojson.json" />
        }
        <GeojsonLayer url="https://storage.googleapis.com/mapsdevsite/json/google.json"/>
        <GeojsonLayer url="https://api.npoint.io/69fa3f6053a4172c0089" />
        {/* abhyuday json */}
        <GeojsonLayer url="https://api.npoint.io/f3c1b6212057e7b8155c"/>
      </Map>
    );
  }
};

export default MapComponent;