import React from 'react';
import styles from './RenderField.module.scss';

const RenderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        className={error && touched ? styles["error-input"] : ""}
        placeholder={placeholder || label}
        type={type}
        {...input}
      />
      {touched &&
        ((error && <span className={styles["error-message"]}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default RenderField;
