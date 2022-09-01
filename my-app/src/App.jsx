import { useState, useEffect } from 'react';
import Form from './components/Form/Form'
import Title from './components/Title/Title'
import RenderUsersList from './components/RenderUsersList/RenderUsersList'
import Filter from './components/Filter/Filter'


function App() {
// const [contacts, setContacts] = useState([]);
// const [filter, setFilter] = useState('');

    // const setFormFilter = e => {
    //     const { value } = e.target;
    //     setFilter(value);
    // }

    // const addContact = (newContact) => {
    //     contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
    //         ? alert(`${newContact.name}  is already in contacts`) :
    //         setContacts([...contacts, newContact])
    // }
          
    // const filterContacts = () => {
        
    //     const filterLowerCase = filter.toLowerCase();
    //     if (filter.length) {
    //         return contacts.filter(contact =>
    //             contact.name.toLowerCase().includes(filterLowerCase)
    //         );
    //     } else {
    //         return contacts;
    //     }         
    //         }
    
//     const deliteContact = (id) => {
//        setContacts( contacts.filter((contact) => contact.id !== id))
          
//             }

//     useEffect(() => {
//   const contacts = localStorage.getItem('contacts');
//         const parsedContacts = JSON.parse(contacts);

//            if (parsedContacts) {
//             setContacts(parsedContacts)
//         }
//     }, [])

//     useEffect(() => {
//        localStorage.setItem("contacts", JSON.stringify(contacts))
//    }, [contacts])
   
     return (
                    <div>
                <Title title={"Phonebook"} />
                
                <Form />
                <h2>Contacts</h2>
                <Filter />
             <RenderUsersList
                //  contacts={filterContacts()} deliteBtn={deliteContact}
             />
            </div>

        );
}

export default App
