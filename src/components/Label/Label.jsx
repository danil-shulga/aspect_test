import React from 'react';

function Label({props}) {
  const {caption, visible} = props

  return (
    <span style={{display: visible ? 'inline' : 'none' }}>
      {caption}
    </span>
  );
}

export default Label;