import React from "react";

/**
 * @function
 * @param {object} props - React props
 * @return {JXS.Element} - rendered component (or null if `success prop` )
 */

export default function Congrats(props) {
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
