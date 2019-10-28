import React from 'react';
import Counter from './index';
import { shallow } from 'enzyme';
import { wrap } from 'module';

/**
 * factory function to create a ShallowWrapper for the App component
 * @function
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
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

describe('Component should render', () => {
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

  it('counter start at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
  });
});

describe('Increment', () => {
  it('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  it('clicking increment button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
  });
});

describe('Decrement', () => {
  it('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  it('clicking decrement button decrements counter display when state is greater than 0', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1);
  });

  it('error doesnt show when not need', () => {
    const counter = 0;
    const displayMessage = 'The counter is currently';
    const wrapper = setup(null, { displayMessage });

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(`${displayMessage} ${counter}`);
  });

  describe('counter is 0 and decrement is clicked', () => {
    // using a describe here, so i can use beforeEach for shared setup

    let wrapper;

    beforeEach(() => {
      wrapper = setup();

      // find button and click
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
      wrapper.update();
    });

    it('error shows', () => {
      const error = true;
      wrapper = setup(null, { error });

      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
      wrapper.update();

      expect(wrapper.state().error).toEqual(true);
    });

    it('counter still display 0', () => {
      const counter = 0;
      wrapper = setup(null, { counter });

      expect(wrapper.state().counter).toBe(0);
    });

    it('clicking increment clears the error', () => {
      const button = findByTestAttr(wrapper, 'increment-button');
      button.simulate('click');

      const error = false;
      wrapper = setup(null, { error });

      expect(wrapper.state().error).toBe(false);
    });
  });
});
