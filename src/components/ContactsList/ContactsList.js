import React from 'react';
import styles from './ContactsList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ searchContact, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {searchContact.map(({ id, name, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={styles}>
            <ContactsListItem
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            ></ContactsListItem>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ContactsList;
