/*global google*/
import React, {Component} from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps"
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class Map extends Component {

render(){

  return(
    <GoogleMap
      defaultZoom={this.props.zoom}
      defaultCenter={this.props.center}>

      <MarkerWithLabel
      position={this.props.center }
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "#950d0d" ,color:"#ffffff", fontSize: "25px", padding: "5px"}} >
      <div>K-Mit</div>
    </MarkerWithLabel>

    </GoogleMap>
  )
}
        }

export default withGoogleMap(Map);
