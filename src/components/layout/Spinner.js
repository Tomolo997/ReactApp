import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="loading..." style={center} />
    </Fragment>
  );
};
const center = {
  width: '200px',
  height: '200px',
  display: 'block',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};
export default Spinner;
