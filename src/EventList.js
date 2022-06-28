import React, { Component } from 'react';
import Event from './Event.js';
import { InfoAlert } from "./Alert";

class EventList extends Component {
  state = {
    infoText: "",
  };

  isOnline = () => {
    if (!navigator.onLine) {
      this.setState({
        infoText:
          "App is currently offline. Some event data may not be accurate",
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
        <InfoAlert text={this.state.infoText} />
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