module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username can not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email can not be empty";
  } else {
    // regex from https://emailregex.com/
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regEx)) {
      errors.email = "Not a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password can not be empty";
  } else if (password !== confirmPassword) {
    errors.password = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username can not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password can not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
