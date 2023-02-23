import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

import { StyledTitle, StyledContainer, StyledContactsTitle } from './App.styled';

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

  addContactformSubmit = ({ name, number }) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let prevCont = this.state.contacts.map(({ name }) =>
      name)
    if (prevCont.includes(name)) {
      alert(`${name} is already in contacts`);
      return
    } else {
        this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  render() {
    const contacts = this.getFilterName();
    return (
      <StyledContainer>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm onSubmit={this.addContactformSubmit} />

        <StyledContactsTitle>Contacts</StyledContactsTitle>
        <Filter filter={this.changeFilter} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </StyledContainer>
    );
  }
}
