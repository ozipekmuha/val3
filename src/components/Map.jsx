import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React, { Component } from "react";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "400px",
    };

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 45.75683816221395,
          lng: 4.863408081610769,
        }}
      >
        <Marker
          position={{ lat: 45.75683816221395, lng: 4.863408081610769 }}
          title={"Paris"}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "VOTRE_CLE_API",
})(MapContainer);
