export const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First Name required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password1) {
    errors.password1 = 'Password required';
  } else if (values.password1.length < 7) {
    errors.password1 = 'Password is not strong enough';
  }

  if (!values.password2) {
    errors.password2 = 'Please reenter your password';
  } else if (values.password1 !== values.password2) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
};

export const warn = values => {
  const warnings = {};
  if (!values.password1) {
    // required so that values.password.length does not throw undefined error
  } else if (values.password1.length < 8) {
    warnings.password1 = 'You may want to consider a longer password';
  }
  return warnings;
};
