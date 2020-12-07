import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Notification.module.css';

const Notification = ({ contactExists }) => {
  return (
    <CSSTransition
      in={contactExists}
      appear={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.container}>
        <p className={styles.text}>Contact already exists!</p>
      </div>
    </CSSTransition>
  );
};

export default Notification;
