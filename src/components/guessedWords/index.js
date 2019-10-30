import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords() {
  return <div />;
}

GuessedWords.protTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
