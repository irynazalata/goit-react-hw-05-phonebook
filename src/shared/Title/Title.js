import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Title.module.css';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
      <h2 className={styles.title}>{title}</h2>
    </CSSTransition>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
