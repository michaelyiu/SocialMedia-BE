import _ from 'lodash';
import Validator from 'validator';


function validateExperienceInput(data) {
  let errors: { title?: string, company?: string, from?: string } = {};

  data.title = !_.isEmpty(data.title) ? data.title : '';
  data.company = !_.isEmpty(data.company) ? data.company : '';
  data.from = !_.isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors),

  }
}

export { validateExperienceInput }