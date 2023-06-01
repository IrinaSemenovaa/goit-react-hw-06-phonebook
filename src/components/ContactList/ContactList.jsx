import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/reduxSlices';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  
  let filteredContacts = [];
  if (Array.isArray(contacts)) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <div>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span> <span>{number}</span>
            <button onClick={() => dispatch(removeContact(id))} type="button">
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
