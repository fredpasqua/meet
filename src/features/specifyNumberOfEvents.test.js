import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import App from "../App";
import { extractLocations } from "../api";
import { mockData } from "../mock-data";
import { mount, shallow } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper = mount(<App />);
    AppWrapper.update();
    given(
      "a user is logged in and the default number of events displays as 32",
      () => {
        expect(AppWrapper.state("numberOfEvents")).toBe(32);
      }
    );

    when("the user changes the number of events to display", () => {
      let input = AppWrapper.find(".eventsToShow").simulate("change", {
        target: { value: 3 },
      });
    });

    then("the user should see an updated number of events", () => {
      expect(AppWrapper.state("numberOfEvents")).toBe(3);
    });
  });
});
