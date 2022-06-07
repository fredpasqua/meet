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

  test("component renders an event location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("clicking show details should change event state", () => {
    EventWrapper.find(".details-toggle-button1").simulate("click");
    expect(EventWrapper.state("basicView")).toBe(false);
    expect(EventWrapper.state("detailView")).toBe(true);
  });
  test("component renders google calendar link on expanded view", () => {
    expect(EventWrapper.find(".googleCalLink")).toHaveLength(1);
  });
  test("clicking show details renders a description of event", () => {
    expect(EventWrapper.find(".event-description")).toHaveLength(1);
  });
});
    