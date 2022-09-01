// import {ADD, DELETE, FILTER} from './phoneBook-types'
import { v4 as uuidv4 } from 'uuid';
import { createAction } from "@reduxjs/toolkit";

// ---- БЕЗ TOOLKIT

// const addContact = ({ id, name, number }) => ({
//     type: ADD,
//     payload: {
//         id,
//         name,
//         number,
//     }
// });

// const deliteContact = (id) => ({
//     type: DELETE,
//     payload: id,
// });

// const filterContacts = value => ({
//     type: FILTER,
//     payload: value,
// })

// ---- HA TOOLKIT

const addContact = createAction('contacts/Add');

const deliteContact = createAction('contacts/Delete');

const filterContacts = createAction('contacts/Filter');
 
 
export default { addContact, deliteContact,filterContacts };