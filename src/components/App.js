import React, { Component } from 'react';

import Card from '../containers/Card';
import CardNo from '../containers/CardNo';
import FlipButton from '../containers/FlipButton';
import ShuffleButton from '../containers/ShuffleButton';
import NextButton from '../containers/NextButton';
import PrevButton from '../containers/PrevButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
        <CardNo />
        <PrevButton />
        <FlipButton />
        <ShuffleButton />
        <NextButton />
      </div>
    );
  }
}

export default App;
