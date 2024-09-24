import React from 'react';

export function triangleSymbolPointingLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <polygon
        points="0,9 18,18 18,0"
        fill="#000000" />
    </svg>
  );
}

export function triangleSymbolPointingRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <polygon
        points="0,0 0,18 18,9"
        fill="#000000" />
    </svg>
  );
}
