import React from "react";
import { shallow } from "enzyme";
import Event from "../Event.js";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });
  test("component renders an event Title", () => {
    expect(EventWrapper.find(".event-title").value).toEqual(mockData.summary);
  });

  test("component renders an event dateTime", () => {
    expect(EventWrapper.find(".eventDateTime")).toHaveLength(1);
  });
  test("component renders an event location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });
  test("component renders google calendar link", () => {
    expect(EventWrapper.find(".calendar-link")).toHaveLength(1);
  });
  test("component renders a description of event", () => {
    expect(EventWrapper.find(".event-description")).toHaveLength(1);
  });
});
