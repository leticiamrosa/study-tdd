import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords({ guessedWords }) {
  let contents;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-intructions">Try to guess the secret word</span>
    );
  } else {
    const guessedWordsRows = guessedWords && guessedWords.map((word, i) => (
      <tr data-test="guessed-word" key={i}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letter</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }

  return <div data-test="component-guessed-words">{contents}</div>;
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
