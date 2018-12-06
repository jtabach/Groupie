export const validate = values => {
  const errors = {};

  if (!values.leagueId) {
    errors.leagueName = 'League Name required';
  }

  if (!values.teamName) {
    errors.teamName = 'Team Name required';
  }
  return errors;
};
