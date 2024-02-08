import React from 'react';
import styles from './Button.module.css'

function Button({props}) {
  const { caption, width, height, visible} = props

  return (
    <button style={{ width, height, display: visible ? 'block' : 'none' }} className={styles.button}>
      {caption || 'defaultName'}
    </button>
  );
}

export default Button;