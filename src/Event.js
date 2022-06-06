import React, { Component } from "react";

class Event extends Component {
  state = {
    basicView: true,
    detailView: false,
  };

  showDetails = () => {
    this.setState({
      basicView: false,
      detailView: true,
    });
  };

  hideDetails = () => {
    this.setState({
      basicView: true,
      detailView: false,
    });
  };
  render() {
    const { event } = this.props;
    return (
      <>
        <div className="event-basics">
          <h2 className="event-title">{event.summary}</h2>
          <p className="eventDateTime">
            {`${event.start.dateTime} (${event.start.timeZone})`}
          </p>
          <p className="location">{`@${event.summary} | ${event.location}`}</p>
          {this.state.basicView ? (
            <button
              onClick={this.showDetails}
              className="details-toggle-button1"
            >
              show details
            </button>
          ) : null}
        </div>
        <div className="event-details">
          {this.state.detailView ? (
            <>
              <p className="about-event">About event:</p>
              <a href={event.htmlLink}>See details on Google Calendar</a>
              <p className="event-description">{event.description}</p>
              <button
                onClick={this.hideDetails}
                className="details-toggle-button1"
              >
                hide details
              </button>
            </>
          ) : null}
        </div>
      </>
    );
  }
}
export default Event;
