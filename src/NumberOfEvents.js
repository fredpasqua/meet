import React, { Component } from "react";
import { ErrorAlert, CriticalAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    errorMsg: null,
    errorMsg2: null,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    console.log(value);
    !value
      ? this.setState({
          errorMsg2: "Enter a number from 1 to 32",
          errorMsg: null,
        })
      : value < 1 || value > 32
      ? this.setState({
          errorMsg: "must be between 1-32 please",
          errorMsg2: null,
        })
      : this.setState({
          errorMsg: null,
          errorMsg2: null,
        });
    this.props.updateEvents(undefined, value);
  };

  render() {
    const { errorMsg, errorMsg2 } = this.state;
    const { numberOfEvents } = this.props;
    return (
      <>
        <label className="NumOfEventsTitle">Number of Events to View:</label>
        <ErrorAlert text={errorMsg}></ErrorAlert>
        <CriticalAlert text={errorMsg2}></CriticalAlert>
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
