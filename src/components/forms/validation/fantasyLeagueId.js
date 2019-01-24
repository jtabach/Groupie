export const validate = values => {
  const errors = {};

  if (!values.fantasyLeagueId) {
    errors.fantasyLeagueId = 'ESPN Fantasy League Id required';
  }

  return errors;
};
