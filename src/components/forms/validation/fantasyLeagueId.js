export const validate = values => {
  const errors = {};

  if (!values.fantasyLeagueId) {
    errors.leagueId = 'ESPN Fantasy League Id required';
  }

  return errors;
};
