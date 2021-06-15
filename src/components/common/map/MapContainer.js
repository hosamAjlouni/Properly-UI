import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={17}
      // style={mapStyles}
      initialCenter={{ lat: 31.99785399581506, lng: 35.909001171178026 }}
      containerStyle={mapStyles}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC7wSsaDpZ9Bl0FtSStgq5MmQVtC-ZC7kg",
})(MapContainer);