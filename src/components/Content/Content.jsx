import React from 'react';
import styles from './Content.module.css';
import ContentByType from './ContentByType/ContentByType';
import { useSelector } from 'react-redux';

function Content(props) {

  const contentValue = useSelector(state => state.content)

  return (
    <div className={styles.content}>
      {contentValue.map((contentItem, index) => {
        return <ContentByType key={index} {...contentItem} />;
      })}
    </div>
  );
}

export default Content;
