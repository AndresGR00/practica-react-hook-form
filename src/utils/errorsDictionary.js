export const ERRORS_DICTIONARY = {
  name: {
    nameIsRequired: "The name field is required",
  },
  email: {
    emailIsRequired: "The email field is required",
    emailPattern: 'The email must contain an "@" and end in ".com"',
  },
  password: {
    passwordIsRequired: "The password field is required",
    passwordPattern:
      "The password must include at least one number, one uppercase and one lowercase letter",
    passwordMinLength: "The password must be at least 8 characters long",
  },
};
