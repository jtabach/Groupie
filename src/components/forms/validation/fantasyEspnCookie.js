export const validate = values => {
  const errors = {};

  if (!values.fantasyLeagueId) {
    errors.teamId = 'ESPN Fantasy Team Id required';
  }

  return errors;
};
