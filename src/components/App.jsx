import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactformSubmit = data => {
    console.log(data);
    const contact = {
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  }


  render() {
    const normalisedFilter = this.state.filter.toLowerCase();
    const contacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalisedFilter));
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactformSubmit} />

        <h2>Contacts</h2>
        <Filter filter={this.changeFilter} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
