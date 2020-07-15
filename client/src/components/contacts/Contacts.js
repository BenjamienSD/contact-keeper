// pull in the contact from the state into this Contacts component, loop through them using map, create a list and output them by creating a ContactItem for each one

import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
          <i className='far fa-hand-point-left large'> </i>
        </h4>
      </div>
    );
  }

  return (
    // map through the contacts array
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={350} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={350} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
