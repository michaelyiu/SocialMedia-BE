import _ from 'lodash';
import Validator from 'validator';


function validateRegisterInput(data) {
  let errors: { name?: string, email?: string, password?: string, password2?: string } = {};
  data.name = !_.isEmpty(data.name) ? data.name : '';
  data.email = !_.isEmpty(data.email) ? data.email : '';
  data.password = !_.isEmpty(data.password) ? data.password : '';
  data.password2 = !_.isEmpty(data.password2) ? data.password2 : '';
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }
  return {
    errors,
    isValid: _.isEmpty(errors),

  }
}


export { validateRegisterInput }