import React from 'react';
//import JSONPretty from 'react-json-pretty';
//import 'react-json-pretty/src/JSONPretty.monikai.css';
import Item from '../components/Item'
const Column = (props) => {
     const item = props.id.children;
  return(
    item.map((itemId, index) => {
      return ( <div className="txt"> <Item key={index} id={itemId}/>  </div> );
    })
  )
}
export default Column;
