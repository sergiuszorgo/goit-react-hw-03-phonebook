import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchForm from "./components/SearchForm/SearchForm";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  // проверка на совпадение
  checkContact = (name) => {
    return this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  // добавление контакта
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (this.checkContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  // удаление контакта
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // рендер списка
  renderContacts = () => {
    const lowerName = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerName)
    );
  };

  // фильтр
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const rendered = this.renderContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <SearchForm filter={this.state.filter} inputForm={this.changeFilter} />
        <ContactList contacts={rendered} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
