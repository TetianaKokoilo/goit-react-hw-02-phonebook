import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  hanldeNameChange = e => {
    this.setState({ name: e.target.value });
  };

  hanldeNumberChange = e => {
    this.setState({number: e.target.value})
  }

  loginInputName = nanoid();
  loginInputnumber = nanoid();


  render() {
    return (
      <form>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.loginInputName}
          onChange={this.handleChange}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.loginInputnumber}
          onChange={this.handleChange}
        />
        <button type="submit">Add Contacts</button>
      </form>
    );
  }
}
