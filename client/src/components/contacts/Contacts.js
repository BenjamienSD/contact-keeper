// pull in the contact from the state into this Contacts component, loop through them using map, create a list and output them by creating a ContactItem for each one

import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  // get access to any state associated with this context (ContactState)
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.lenth === 0 && !loading) {
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
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={350}
                  classNames='item'>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={350}
                  classNames='item'>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
