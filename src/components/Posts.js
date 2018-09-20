import React from 'react';
//import JSONPretty from 'react-json-pretty';
//import 'react-json-pretty/src/JSONPretty.monikai.css';
const Posts= (props) => {
  //const {settings} = props;
  //console.log(props)
if(props !== undefined){

//console.log(props.title);
return(

     <div> <p><strong>{props.title}</strong></p>{<p dangerouslySetInnerHTML={{__html:props.body}}/>}</div>
        //data2.map((colId, index) => {
        //  return ("Data post" );
        //})

 //console.log(data2[i].children);
        //return (

        //  <div key= {i}>

            //  <Column key= {i} colId= {i}/>
        //  <p dangerouslySetInnerHTML={{__html:props.columns.length}}/><JSONPretty id="json-pretty" json={props.columns.length}/> </div>
     );

       }

  }


export default Posts;
