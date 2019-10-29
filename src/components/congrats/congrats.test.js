import React from "react";
import { shallow } from "enzyme";
import Congrats from "./index";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

/**
 * Factory function to create a shallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

it("renders no text when `success` props is false", () => {
  const success = false;
  const wrapper = setup({ success });

  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

it("renders no-empty congrats message when `success` prop is true", () => {
  const success = true;
  const wrapper = setup({ success });

  const message = findByTestAttr(wrapper, "component-message");
  expect(message.text().length).not.toBe(true);
});

it("does not throw warning with expected props", () => {
  const expectProps = { success: false };
  checkProps(Congrats, expectProps);
});
