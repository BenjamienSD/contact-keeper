// pull in the contact from the state into this Contacts component, loop through them using map, create a list and output them by creating a ContactItem for each one

import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  // get access to any state associated with this context (ContactState)
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <div>
        <h4 className='card text-center'>
          Start adding contacts
          <br />
          <i class='far fa-hand-point-left large'> </i>
        </h4>
      </div>
    );
  }

  return (
    // map through the contacts array
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
