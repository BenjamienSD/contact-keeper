import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ scale: '0.8', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};
