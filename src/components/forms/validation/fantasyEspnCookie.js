export const validate = values => {
  const errors = {};

  if (!values.espnCookieS2) {
    errors.espnCookieS2 = "ESPN S2 Cookie required";
  }

  if (!values.espnCookieSwid) {
    errors.espnCookieSwid = "ESPN SWID Cookie required";
  }

  return errors;
};
