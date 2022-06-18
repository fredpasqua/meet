import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow, mount } from "enzyme";

describe("<NumberOfEvents /> component", () => {
                                                 let NumberOfEventsWrapper;

                                                 beforeAll(() => {
                                                   NumberOfEventsWrapper = shallow(
                                                     <NumberOfEvents />
                                                   );
                                                 });

                                                 test("render an input field for the number of events", () => {
                                                   expect(
                                                     NumberOfEventsWrapper.find(
                                                       ".eventsToShow"
                                                     )
                                                   ).toHaveLength(1);
                                                 });
                                               });

describe("<NumberOfEvents /> integration", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = mount(<NumberOfEvents />);
  });
  //   test("input changes state of eventsToShow", () => {
  //     const eventObject = { target: { value: 11 } };
  //     NumberOfEventsWrapper.find(".eventsToShow").simulate("change", eventObject);
  //     expect(NumberOfEventsWrapper.state("eventsToShow")).toEqual(11);
  //   });
});
