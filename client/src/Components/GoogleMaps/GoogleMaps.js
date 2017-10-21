/* eslint-disable no-undef */
import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MapStyle from "./MapStyle.json";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
<GoogleMap
  defaultZoom={15}
  center={new google.maps.LatLng(props.lat, props.lng)}
  heading={0}
  clickableIcons={false}
  mapTypeId={"roadmap"}
  defaultOptions={{ styles: MapStyle, disableDefaultUI: true }}
  >

    {<Marker position={new google.maps.LatLng(props.lat, props.lng)} defaultIcon="/imgs/mapmarker.png" />}

  </GoogleMap>
)

class PostMap extends React.PureComponent {
  state = {
  }



  render() {
    return (
      <MyMapComponent
        lat={this.props.lat}
        lng={this.props.lng}
      />
    )
  }


}

export default PostMap;
