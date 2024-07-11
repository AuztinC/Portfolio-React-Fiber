import React from "react";

function ExitSvg({ scale }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="red"
      viewBox="0 0 15 15"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm10.146 3.354L7.5 8.207l-2.646 2.647-.708-.707L6.793 7.5 4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646-.707.708z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ExitSvg;