export const validateData = (email, password) => {
  const testEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  const testPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!testEmail) return "Email Id is invalid";
  if (!testPassword) return "Password is incorrect";
  return null;
};
