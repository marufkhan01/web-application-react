import React, { Component } from "react";
import Grid from '../components/Grid';
import Posts from './Posts';
class Content extends Component {
  render () {
      return this.props.content.map((content,index) => {
        switch(content.component) {
          case "grid":
          return <div className="grid-x grid-padding-x"><Grid key={index}{...content} /></div>
          default:
          return ( <div className="grid-x"> <Posts key={index} {...content} /></div>);
        }
      })
  }
}
export default Content;
