import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTime: true,
    };
  }

  onToggle = () => {
    this.setState(state => ({ showTime: !state.showTime }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.onToggle}>
          Toggle
        </button>

        {this.state.showTime && <Timer />}
      </div>
    );
  }
}

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 1);
  }

  onTick = () => {
    console.log('Timer: ' + this.state.time);

    this.setState(state => ({ time: state.time + 1 }));
  };

  componentWillUnmount() {
    // Remove this to see warning.
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default App;
