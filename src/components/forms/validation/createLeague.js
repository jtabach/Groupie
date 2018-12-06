export const validate = values => {
  const errors = {};

  if (!values.leagueName) {
    errors.leagueName = 'League Name required';
  }

  if (!values.teamName) {
    errors.teamName = 'Team Name required';
  }
  return errors;
};
