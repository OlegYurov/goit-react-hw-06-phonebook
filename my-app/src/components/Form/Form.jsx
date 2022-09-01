import { useState } from 'react'
import { connect } from 'react-redux';
import FormBtn from '../FormBtn/FormBtn'
import Input from '../Input/Input'
import { v4 as uuidv4 } from 'uuid';
import css from './Form.module.css';
import PropTypes from 'prop-types';
import actions from '../Redux/phoneBook-actions'


function Form({ getContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const setForm = e => {
  const { value, name } = e.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
    
    case 'number':
      setNumber(value);
      break;

    default:
  return;
  };
      
  }
  
     const  submitForm = e => {
        e.preventDefault();
       
        const createContact = {
          name: name,
          number: number,
          id: uuidv4(),
        };
        getContact(createContact);  
         setName('');
        setNumber('');
  };
  
  return ( 
       <form className={css.form} onSubmit={submitForm}>
        <Input contact={number} nameUser={name} handleInputValue={setForm} />
        <FormBtn textBtn={"Add contact"} />          
      </form>      
     );
}

Form.propTypes = {
 getContact: PropTypes.func.isRequired,
}


const mapDispatchToProps = dispatch => {
  return {
    getContact: (newContact) => dispatch(actions.addContact(newContact)),
  }
}

export default connect(null,mapDispatchToProps)(Form);

