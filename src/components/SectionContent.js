import React, { Component } from "react";
import Text from '../components/Text';
import Grid from '../components/Grid';

class SectionContent extends Component {

  render () {
    // console.log(this.props.content);


           return "Inner Details";

  }
}
//style={{fontWeight: 'bold', color: 'red'}}
export default SectionContent;


/*
switch(content.component) {
  case "text":
  return <div className="grid-x"><h3>{ this.props.title }</h3><Text {...content}/> </div>
  case "grid":
  return <div className="grid-x"><Grid {...content} /></div>
  default:
  return ( <div className="grid-x"> <strong> {content.settings.text} </strong></div>);
}


*/
