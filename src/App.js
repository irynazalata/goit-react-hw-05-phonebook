import React, { Component } from 'react';
import Title from './shared/Title/Title';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import Notification from './shared/Notification/Notification';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const newContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    contactExists: false,
    existingName: '',
  };

  componentDidMount() {
    const persistedContacts =
      JSON.parse(localStorage.getItem('contacts')) || newContacts;
    this.setState({
      contacts: persistedContacts,
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleNewContact = contact => {
    let { contacts } = this.state;
    if (contacts.find(({ name }) => name === contact.name)) {
      this.setState({ contactExists: true, existingName: contact.name });
      setTimeout(
        () => this.setState({ contactExists: false, existingName: '' }),
        2500,
      );
      return;
    }
    contacts = [...contacts, contact];
    this.setState({ contacts });
  };

  handleChange = ({ target }) => {
    const title = target.value;
    this.setState({ title });
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleContactSearch = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts, contactExists, existingName } = this.state;
    return (
      <>
        <Notification name={existingName} contactExists={contactExists} />
        <Title title="phonebook" />
        <Form addContact={this.handleNewContact} />
        <Filter
          searchContact={this.handleFilter}
          value={filter}
          contacts={contacts}
        />
        <CSSTransition in={contacts.length > 0} timeout={0} unmountOnExit>
          <ContactsList
            searchContact={this.handleContactSearch()}
            deleteContact={this.deleteContact}
          />
        </CSSTransition>
      </>
    );
  }
}

export default App;
