import React from 'react';

import TextInput from './TextInput.js';

const branch = (props) => {

  switch (props.type) {
    case 'text':
      return <TextInput {...props}/>; 
      break;
    
    case 'password':
      console.log('password');
      break;

    default:
      console.log("default");
  }
  return <div></div>
}

export default branch;
