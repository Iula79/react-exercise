import React, { Component } from 'react';

import Clock from './Clock';
import CountDown from './CountDownClock';
import CountDownWordClock from './CountDownWordClock';
import Picker from './ColorPicker';
import GradientPicker from './GradientPicker';
import CustomGradientPicker from './CustomGradientPicker';

class App extends Component {
  state = {
    background: 'cornflowerblue',
  };

  changeColor = (color) => {
    this.setState({ background: color })
  }

  render() {
    return (
      <div
        style={{
         background: this.state.background,
          height: '100vh',
        }}
      >
        <Clock hours="1" minutes="23" seconds="45"/>
        <CountDown seconds="10"/>
        <CountDownWordClock />
        <Picker updateBackgroundColor={this.changeColor}/>
        <GradientPicker />
        <CustomGradientPicker />
      </div>
    );
  }
}

export default App;

// Adding it all together...
// import React, { Component } from 'react';
//
// import Clock from './Clock/solution';
// import CountDownClock from './CountDownClock/solution';
// import CountDownWordClock from './CountDownWordClock/solution';
// import ColorPicker from './ColorPicker/solution';
// import GradientPicker from './GradientPicker/solution';
// import CustomGradientPicker from './CustomGradientPicker/solution';
//
// class App extends Component {
//   state = {
//     background: 'peachpuff',
//   };
//
//   render() {
//     return (
//       <div
//         style={{
//           background: this.state.background,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//         }}
//       >
//         <Clock hours={1} minutes={1} seconds={1} />
//         <CountDownClock from={10} />
//         <CountDownWordClock from={10} />
//         <ColorPicker label="Pick Color" onSelect={background => this.setState({ background })} />
//         <GradientPicker
//           label="Pick Gradient"
//           onSelect={background => this.setState({ background })}
//         />
//         <CustomGradientPicker onChange={background => this.setState({ background })} />
//       </div>
//     );
//   }
// }
//
// export default App;
