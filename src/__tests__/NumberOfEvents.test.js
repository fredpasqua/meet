import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from "enzyme";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render an input field for the number of events", () => {
    expect(NumberOfEventsWrapper.find(".eventsToShow")).toHaveLength(1);
  });

  test("render 5 events to start", () => {
    expect(NumberOfEventsWrapper.state("eventsToShow")).toEqual(5);
  });

  test("input changes state of eventsToShow", () => {
    const eventObject = { target: { value: 11 } };
    NumberOfEventsWrapper.find(".eventsToShow").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("eventsToShow")).toEqual(11);
  });
});
