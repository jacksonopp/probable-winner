import React from 'react';

export default function () {
  return (
    <button
      onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    >reset</button>
  )
}