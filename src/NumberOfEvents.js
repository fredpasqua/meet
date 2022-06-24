import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    errorMsg: null,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    value < 1 || value > 32
      ? this.setState({
          errorMsg: "must be between 1-32 please",
        })
      : this.setState({
          errorMsg: null,
        });
    this.props.updateEvents(undefined, value);
  };

  render() {
    const { errorMsg } = this.state;
    const { numberOfEvents } = this.props;
    return (
      <>
        <label className="NumOfEventsTitle">Number of Events:</label>
        <ErrorAlert text={errorMsg}></ErrorAlert>

        <div className="eventInput">
          <input
            label="Number of events"
            type="integer"
            className="eventsToShow"
            value={numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </div>
      </>
    );
  }
};

export default NumberOfEvents;
