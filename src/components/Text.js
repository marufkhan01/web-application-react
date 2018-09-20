import React from 'react';

const Text = (props) => {
  //console.log(props);
  const {settings} = props;
  return (<p dangerouslySetInnerHTML={{__html:settings.text}}/>);
}

export default Text;
