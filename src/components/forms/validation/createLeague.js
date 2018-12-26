export const validate = values => {
  const errors = {};

  if (!values.leagueName) {
    errors.leagueName = 'League Name required';
  }
  return errors;
};
