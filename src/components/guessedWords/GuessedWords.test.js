import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import GuessedWords from './index';

let defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCounter: 3},
    { guessedWord: 'agile', letterMatchCounter: 1},
    { guessedWord: 'party', letterMatchCounter: 5},
  ]
};


/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it('doesnt throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] }); //both test can access wrapper
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-intructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = setup(); //both test can access wrapper
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  it('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  it('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNode.length).toBe(defaultProps.guessedWords.length)
  })
});
