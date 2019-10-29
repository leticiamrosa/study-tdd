import React from "react";
import PropTypes from "prop-types";

/**
 * @function
 * @param {object} props - React props
 * @return {JXS.Element} - rendered component (or null if `success prop` )
 */

function Congrats(props) {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="component-message">
          Congratulations! You guessed the world!
        </span>
      </div>
    );
  }

  return <div data-test="component-congrats"></div>;
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
