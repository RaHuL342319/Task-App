export const validateField = (name, value, signupData) => {
  switch (name) {
    case "name":
      if (value.length === 0) {
        return "name is required";
      } else if (value.length < 4) {
        return "Name should be atleast of 4 letter";
      }
      return "";
    case "email":
      //Display error message if the email is empty or not in correct format, using regular expression.
      if (!value) {
        return "Email is required";
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
        return "Email is invalid";
      }
      //if not empty and correct email format, then entered data is updated in formData
      return "";
    case "password":
      if (!value) {
        return "Password is required";
      }
      if (value.length < 8) {
        return "Password must be at least 8 characters";
      }
      return "";
    case "confirmPassword":
      if (!value) {
        return "Confirm Password is required";
      }
      if (value !== signupData.password) {
        return "Passwords do not match";
      }
      return "";
  }
};
