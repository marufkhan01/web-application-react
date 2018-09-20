import React from 'react';
import Map from './Map';
const Item = (props) => {
    switch(props.id.component) {
      case "heading":
      return  <h3 dangerouslySetInnerHTML={{__html:props.id.settings.text}}/>
      case "text":
      return <p dangerouslySetInnerHTML={{__html:props.id.settings.text}}/>
      case "html":
      return <p dangerouslySetInnerHTML={{__html:props.id.settings.html}}/>;
      case "image":
      const url = "http://content.k-mit.se/storage/uploads/";
      const iClass = props.id.settings.image.path;
      const imgClass=  iClass.substring(0,5);
      return <div className={imgClass}><a href={props.id.settings.text}><img src={url+props.id.settings.image.path} alt="images" /></a></div>
      case "section":
      return <div> <Map
                      center ={{lat: 59.34563739999999, lng: 18.05807100000004}}
                      zoom= {15}
                      containerElement= {<div style={{ height: `300px` }} />}
                      mapElement={<div style={{ height: `90%` }} />} />
            </div>
      default:
      return <div> "Video" </div>
 }
}
export default Item;
