import React from 'react';
import styles from './WorkSpace.module.css'
import Input from '../Input/Input';
import Content from '../Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, clearNewContent, clearPath, setNewContent, setPath } from '../../store';


function WorkSpace(props) {
  const store = useSelector(store => store)
  const newContent = useSelector(store => store.newContent)
  const path = useSelector(store => store.path)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addContent(path, newContent))
    dispatch(clearPath())
    dispatch(clearNewContent())
  }

  return (
    <div className={styles.workSpace}>
      <div className={styles.controlsPanel}>
        <Input value={path} action={setPath} label='Путь' />
        <Input value={newContent} action={setNewContent} label='Новое значение' />
        <button onClick={handleClick}>Применить</button>
      </div>
      <Content />
    </div>
  );
}

export default WorkSpace;