import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line
class App extends React.Component {
// eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
