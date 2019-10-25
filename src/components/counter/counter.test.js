import React from "react";
import Counter from "./index";
import { shallow } from "enzyme";

it("render without crashing", () => {
  const wrapper = shallow(<Counter />);
  const appComponent = wrapper.find("[data-test='component-counter'");
  expect(appComponent.length).toBe(1);
});
