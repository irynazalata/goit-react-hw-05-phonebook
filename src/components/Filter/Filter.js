import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, searchContact, contacts }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      appear={true}
      timeout={250}
      unmountOnExit
      classNames={styles}
    >
      <div className={styles.container}>
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            onChange={event => searchContact(event.target.value)}
            value={filter}
          />
        </label>
      </div>
    </CSSTransition>
  );
};

Filter.propTypes = {
  searchContact: PropTypes.func.isRequired,
};

export default Filter;
