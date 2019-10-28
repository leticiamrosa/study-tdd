import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './index';
import { findByTestAttr } from '../../../test/testUtils';

/**
 * Factory function to create a shallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it('renders no text when `success` props is false', () => {
  const success = false;
  const wrapper = setup({ success });

  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.test()).toBe('');
});

it('renders no-empty congrats message when `success` prop is true', () => {});
