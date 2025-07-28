import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-pair">
          <button
            className="counter-button"
            onClick={() => this.updateEntry()}
          >
            Login
          </button>
          <span className="counter-text">
            {this.state.entrycount} People Entered!!!
          </span>
        </div>
        <div className="counter-pair">
          <button
            className="counter-button"
            onClick={() => this.updateExit()}
          >
            Exit
          </button>
          <span className="counter-text">
            {this.state.exitcount} People Left!!!
          </span>
        </div>
      </div>
    );
  }
}

export default CountPeople;