import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((prevState) =>
      Object.assign({}, prevState, calculate(prevState, buttonName)));
  }

  render() {
    return (
      <div id="app" className="app-class">
        <Display result={this.state.total} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
