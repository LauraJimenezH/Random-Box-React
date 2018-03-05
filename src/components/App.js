  import React, { Component } from 'react';
  import Box from './Box';

  function backgroundRandom() {

    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let colorEnd = '#' + randomColor;

    return colorEnd;

}

function FontRandom(){
  let fontFam =['family-1','family-2','family-3','family-4','family-5','family-6','family-7'];
  let FamRandom = fontFam[Math.floor(Math.random() * fontFam.length)];

  return FamRandom;
}

class App extends Component {
  constructor (...args){
    super(...args)
  }
  render() {
    let colorRandom = {backgroundColor: backgroundRandom()}
    return (
      <div>
     <Box backgroundColor={colorRandom} fontFamily={FontRandom()}/>
     </div>
    )   
  }
}

export default App;
