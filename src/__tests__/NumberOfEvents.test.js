import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow, mount } from "enzyme";

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

describe("<NumberOfEvents /> integration", () => {
  test('App passes "events" state as a prop to EvenList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });
