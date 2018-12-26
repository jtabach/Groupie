export const validate = values => {
  const errors = {};

  if (!values.leagueId) {
    errors.leagueId = 'League Id required';
  }

  return errors;
};
