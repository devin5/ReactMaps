import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  style = {
    margin: "3% auto",
    width: "400px",
    height: "400px",
  };

  render() {
    return (
      <>
        <h1>GoogleMapsReact</h1>
        <Map style={this.style} google={this.props.google} zoom={18}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>new york</h1>
            </div>
          </InfoWindow>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDqLlUOBpRgYeKTI7d3F6MI-MB1hylmxEs",
})(MapContainer);
