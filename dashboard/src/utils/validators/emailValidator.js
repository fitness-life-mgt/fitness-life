import validator from 'validator';

function emailValidator(email){

    var emailError = '';
  
    if (validator.isEmail(email)) {
      emailError =  0
    } else {
        emailError =  1
    }

    return emailError;

}

export default emailValidator;



