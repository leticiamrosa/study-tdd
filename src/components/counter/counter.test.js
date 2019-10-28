import React from 'react';
import Counter from './index';
import { shallow } from 'enzyme';

/**
 * factory function to create a ShallowWrapper for the App component
 * @function
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  return shallow(<Counter {...props} />);
};

/**
 * Return ShallowRapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - Value of data-test attribute for seach
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

it('render without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-counter');
  expect(appComponent.length).toBe(1);
});

it('render increment button', () => {
  const wrapper = shallow(<Counter />);
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

it('render counter display', () => {
  const wrapper = shallow(<Counter />);
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.length).toBe(1);
});

it('counter start at 0', () => {});
