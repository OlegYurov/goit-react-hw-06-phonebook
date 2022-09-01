import {createReducer} from '@reduxjs/toolkit'
// import { ADD, DELETE, FILTER } from "./phoneBook-types";
import actions from './phoneBook-actions';


//   ---- БЕЗ TOOLKIT
// export const contacts = (state = [], { type, payload }) => {
//     switch (type) {
//         case ADD:
//             state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())
//                 ? alert(`${payload.name}  is already in contacts`) :
//                state = [...state, payload];
//         case DELETE:
//            return state.filter((contact) => contact.id !== payload);
//         default:
//             return state;
//     }
// };
// export const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case FILTER:
//             return payload;
//         default:
//             return state;
//     }
// }

// ---- HA TOOLKIT

export const contacts = createReducer([], {
    [actions.addContact]: (state, { payload }) =>
        state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())
            ? alert(`${payload.name}  is already in contacts`) :
            state = [...state, payload],
    
    [actions.deliteContact]: (state, { payload }) =>
        state.filter((contact) => contact.id !== payload),
});

export const filter = createReducer('', {
    [actions.filterContacts]: ( _, { payload }) => payload,   // _ вместо указания state используктся когда не указан стейт. линтер не выдает предупреждение!      
 }) 
