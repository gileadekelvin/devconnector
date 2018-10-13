const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  // required fields
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.field = !isEmpty(data.field) ? data.field : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (validator.isEmpty(data.school)) {
    errors.school = "School name field is required";
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (validator.isEmpty(data.field)) {
    errors.field = "Field of study is required";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  if (!isEmpty(data.to)) {
    if (data.current === "true") {
      errors.current =
        "You can't add a Final date if the current option is enabled";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
