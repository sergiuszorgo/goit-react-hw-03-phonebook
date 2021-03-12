import React, { Component } from "react";
import propTypes from "prop-types";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // добавление значений в state
  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  //   очистка формы
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  // отправка контакта
  pushContact = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form className={s.formList}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
          />
        </label>
        <button className={s.formBtn} onClick={this.pushContact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: propTypes.func,
};
