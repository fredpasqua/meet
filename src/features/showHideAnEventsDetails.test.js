import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import Event from "../Event.js";
import { extractLocations } from "../api";
import { mockData } from "../mock-data";
import { shallow } from "enzyme";
const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("User can expand an event to see its details", ({
    given,
    when,
    then,
    and,
  }) => {
    let EventWrapper = shallow(<Event event={mockData} />);
    given("an event has been selected and is in its collapsed state", () => {});

    when("user presses a button to expand the event", () => {
      EventWrapper.find(".details-toggle-button1").simulate("click");
      expect(EventWrapper.state("basicView")).toBe(false);
    });
    then(
      "the user should see an expanded view of the event with greater details",
      () => {
        expect(EventWrapper.state("detailView")).toBe(true);
      }
    );

    and("be able to recollapse the event.", () => {
      EventWrapper.find(".details-toggle-button2").simulate("click");
      expect(EventWrapper.state("basicView")).toBe(true);
    });
  });
});
