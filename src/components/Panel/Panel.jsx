import React from 'react';
import styles from './Panel.module.css';
import ContentByType from '../Content/ContentByType/ContentByType';

function Panel({ props, content }) {
  const { width, height, visible } = props;

  return (
    <div
      style={{ width, height, display: visible ? 'block' : 'none' }}
      className={styles.panel}>
      {content?.length > 0
        ? (content.map((contentItem, index) => {
            return <ContentByType key={index} {...contentItem} />;
          }))
        : ''}
    </div>
  );
}

export default Panel;
