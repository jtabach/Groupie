export const validate = values => {
  const errors = {};

  if (!values.espnCookieS2) {
    errors.teamId = 'ESPN S2 Cookie required';
  }

  if (!values.espnCookieSwid) {
    errors.teamId = 'ESPN SWID Cookie required';
  }

  return errors;
};
