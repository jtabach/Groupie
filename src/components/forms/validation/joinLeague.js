export const validate = values => {
  const errors = {};
  console.log(values);

  if (!values.leagueId) {
    errors.leagueId = 'League ID required';
  }

  if (!values.teamName) {
    errors.teamName = 'Team Name required';
  }
  return errors;
};
