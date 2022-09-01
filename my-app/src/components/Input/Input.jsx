import React from 'react'
import FormName from '../FormName/FormName'
import PropTypes from 'prop-types'

function Input({contact, nameUser,handleInputValue}) {
  
  return (
    <>
      <FormName children={"Name"} />
      <input value={nameUser} onChange={handleInputValue}
        placeholder="Enter name..."
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
      />
      <FormName children={"Number"} />
      <input value={contact} onChange={handleInputValue}
        placeholder="Enter number..."
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
    </>  

    
     
  )
}

Input.propTypes = {
  contact: PropTypes.string,
  nameUser: PropTypes.string,
  handleInputValue: PropTypes.func.isRequired,
}

export default Input