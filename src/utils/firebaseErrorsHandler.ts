export const firebaseErrorsHandler = (error: string) => {
  let message;
  let inputRef = "email";

  switch (error) {
    case "auth/email-already-in-use":
      message = "The email is already in use";
      break;
    case "auth/user-not-found":
      message = "This email is not registered";
      break;
    case "auth/invalid-password":
      message = "The password must be 6 char long";
      inputRef = "password";
      break;
    case "auth/invalid-email":
      message = "The email is not correct";
      break;
    case "auth/wrong-password":
      message = "The password is wrong";
      inputRef = "password";
      break;

    default:
      message = "Something's gone wrong";
  }
  return { message, inputRef };
};
