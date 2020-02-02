import React from 'react';
import { Field, ErrorMessage } from 'formik';

import './GenericInputField.css';

const GenericInputField = ({ data, ...props }) => (
  data.map(({label, name, type}) => (
    <div
      key={label}
      className={`GenericInputField${props.errors[name] && props.touched[name] ? ' has-error' : ''}`}
    >
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} />
      <ErrorMessage className="error-message" component="span" name={name} />
    </div>
  ))
);

export default GenericInputField;
