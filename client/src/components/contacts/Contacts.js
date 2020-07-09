// pull in the contact from the state into this Contacts component, loop through them using map, create a list and output them by creating a ContactItem for each one

import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  // get access to any state associated with this context (ContactState)
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    // map through the contacts array
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
