import React from 'react'
import css from './RenderUsersList.module.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from '../Redux/phoneBook-actions'

function RenderUsersList({contacts, deliteBtn}) {
  return (
    <ul>
            {contacts.map(({name,number, id }) => (
              <li className={css.list_item}
                key={id}>
                <p>{name}:</p>
                <p>{number}</p>
                    <button onClick={() => deliteBtn(id)}>Delete</button>

                </li>
            ))
            
            }
        </ul>
  )
}

RenderUsersList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
      ).isRequired,
  deliteBtn: PropTypes.func.isRequired,
};


const searchContacts = (allContacts, filter) => {
  const filterLowerCase = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLowerCase));
}


const mapStateToProps = ({ contacts, filter }) => ({
    contacts: searchContacts(contacts,filter),
});


// const mapStateToProps = state => {
//   const { contacts, filter } = state;
  
//   const visibleContacts = searchContacts(contacts,filter);
//   return {
//   contacts: visibleContacts,
// }};


const mapDispatchToProps = dispatch => {
 return {
    deliteBtn: (id) => dispatch(actions.deliteContact(id)),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderUsersList) 