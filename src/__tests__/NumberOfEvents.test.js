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
});




