import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    eventsToShow: 5,
    errorMsg: null,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    value < 1 || value > 32
      ? this.setState({
          eventsToShow: "",
          errorMsg: "must be between 1-32 please",
        })
      : this.setState({
          eventsToShow: value,
          errorMsg: null,
        });

    console.log(this.state.errorMsg);
    console.log(value);
  };

  render() {
    const { eventsToShow, errorMsg } = this.state;
    return (
      <>
        <label>Number of Events:</label>
        <div className="eventInput">
          <input
            label="Number of events"
            type="integer"
            className="eventsToShow"
            value={eventsToShow}
            onChange={this.handleInputChanged}
          />
          <p className="errorMsg" style={{ color: "red" }}>
            {errorMsg}
          </p>
        </div>
      </>
    );
  }
}

export default NumberOfEvents;
