import React from 'react';
import Column from './Column';
const Grid = (props) => {
if(props.columns !== undefined){
        const data2 = props.columns;
return(
        data2.map((colId, index) => {
          return (<div  className="medium-auto cell"><Column key={index} id={colId}/> </div>);
        })
     );
  }
}
export default Grid;
