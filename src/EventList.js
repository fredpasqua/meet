import React, { Component } from 'react';
import Event from './Event.js';
import { CriticalAlert } from "./Alert";

class EventList extends Component {
  state = {
    infoText: "",
  };

  isOnline = () => {
    if (!navigator.onLine) {
      this.setState({
        infoText:
          "App is currently offline. Some event data may not be up to date! Connect to the internet for the most updated info.",
      });
    } else {
      this.setState({ infoText: "" });
    }
  };

  componentDidMount() {
    this.isOnline();
  }

  render() {
    const { events } = this.props;
    return (
      <>
        <CriticalAlert text={this.state.infoText} />
        <ul className="EventList">
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default EventList;