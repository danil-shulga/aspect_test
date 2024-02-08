import React from 'react';
import styles from './Input.module.css'
import { useDispatch, useSelector } from 'react-redux';

function Input(props) {
  const { label, action, value } = props;

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(action(e.target.value))
  }

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>
        {label}
      </label>
        <input value={value} onChange={(e) => handleChange(e)}></input>
    </div>
  );
}

export default Input;
