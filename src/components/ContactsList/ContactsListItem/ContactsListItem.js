import React from 'react';
import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.contact}>{name}</p>
      <p className={styles.contact}>{number}</p>
      <button
        type="button"
        className={styles.btn}
        onClick={() => deleteContact(id)}
      >
        X
      </button>
    </li>
  );
};

export default ContactsListItem;
