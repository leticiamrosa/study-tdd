import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * how test render component
 */

it("render without crashing", () => {
  const wrapper = shallow(<App />);
  // const appComponent = wrapper.find("[data-test='apollo-provider'");
  expect(wrapper.length).toBe(1);
});
