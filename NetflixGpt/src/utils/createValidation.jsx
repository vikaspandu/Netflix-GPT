export const createValidation = (email, password) => {
  const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegix = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!emailRegix){
    return "Please enter a valid email address.";
  }
  if(!passwordRegix){
    return "Password is not valid";
  }
  return null;
}