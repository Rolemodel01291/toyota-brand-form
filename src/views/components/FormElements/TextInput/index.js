import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
  },
}));

// Alphanumeric up to 7 characters
const registrationNumberRegex = /^[A-z0-9]{1,7}$/;
// Alphanumeric up to 7 characters pattern separated by commas
const registrationNumbersRegex = /^([A-z0-9]{1,7},)*[A-z0-9]{1,7}$/;
// Numeric starting with 11, 12, 13 and is 8 digits
const contractNumberRegex = /^1{1}(1|2|3)[0-9]{6}$/;
// Numeric starting with 11, 12, 13 and is 8 digits pattern separated by commas
const contractNumbersRegex = /^(1{1}(1|2|3)[0-9]{6},)*(1{1}(1|2|3)[0-9]{6})$/;
// Alpha with symbols used in names
const nameRegex = /^[A-z-' ]+$/;
// Numeric starting with 61 or 0 with a max length of 10 or 11 depending on the start
const phoneNumberRegex = /^(0|61)[0-9]{9}$/;
// Number phone number max length pattern
const numericPhoneNumberRegex = /^(0[0-9]{0,9}|6[0-9]{0,9}|61[0-9]{0,9})$/;
// Alphanumeric pattern
const alphanumericRegex = /^[A-z0-9]*$/;
// Numeric comma pattern
const numericCommaRegex = /^[0-9,]*$/;
// Alphanumeric comma pattern
const alphanumericCommaRegex = /^[A-z0-9,]*$/;
// Numeric pattern
const numericRegex = /^[0-9]*$/;

/**
 * @typedef {{name: string, value: boolean | undefined}} validate
 *
 * @param {object} props
 * @param {function} props.setValue
 * @param {validate} props.validate
 * @param {string} props.id
 * @param {string} props.type
 * @param {string | number} props.value
 * @param {string} props.title
 * @param {boolean} willValidate
 */
const TextInput = (props) => {
  const classes = useStyles();

  /**
   * Handles a form change
   *
   * @param {object} event React event
   * @param {object} event.target Form field
   * @param {string|number} event.target.value Form field value
   */
  const handleChange = ({ target: { value } }) => {
    /**
     * Set Value helper for props setValue function
     *
     * @param {string|number} value
     * @param {boolean} validationStatus
     */

    const setValueHelper = (value, validationStatus) => {
      props.setValue(props.id, value, {
        [Object.keys(props.validate)[0]]: validationStatus,
      });
    };

    switch (props.type) {
      case 'contractNumber':
        if (value.length < 9) {
          setValueHelper(value, contractNumberRegex.test(value));
        }
        break;
      case 'registrationNumber':
        if (value.length < 8 && alphanumericRegex.test(value)) {
          setValueHelper(value, registrationNumberRegex.test(value));
        }
        break;
      case 'phoneNumber':
        if (phoneNumberRegex.test(value)) {
          setValueHelper(value, true);
        } else if (value.length === 0 || numericPhoneNumberRegex.test(value)) {
          setValueHelper(value, false);
        }
        break;
      case 'number':
        if (numericRegex.test(value)) {
          setValueHelper(value, true);
        } else if (numericRegex.test(value)) {
          setValueHelper(null, false);
        }
        break;
      case 'name':
        if (nameRegex.test(value) || value.length === 0) {
          setValue(value);
        }
        break;
      case 'contractNumbers':
        if (contractNumbersRegex.test(value)) {
          setValueHelper(value, true);
        } else if (value.length >= 0 && numericCommaRegex.test(value)) {
          setValueHelper(value, false);
        }
        break;
      case 'registrationNumbers':
        if (registrationNumbersRegex.test(value)) {
          setValueHelper(value, true);
        } else if (value.length >= 0 && alphanumericCommaRegex.test(value)) {
          setValueHelper(value, false);
        }
        break;
      default:
        setValue(value);
        break;
    }
  };

  /**
   * @param {string | number} value
   */
  const setValue = (value) => {
    if (props.validate) {
      if (value !== '') {
        props.setValue(props.id, value, {
          [Object.keys(props.validate)[0]]: true,
        });
      } else {
        props.setValue(props.id, value, {
          [Object.keys(props.validate)[0]]: false,
        });
      }
    } else {
      props.setValue(props.id, value, {
        validate: true,
      });
    }
  };

  /**
   * @param {string} type
   */
  const fieldType = (type) => {
    switch (type) {
      case 'phoneNumber':
        return 'tel';
      default:
        return 'text';
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl fullWidth className={classes.root}>
        <TextField
          className={classes.number}
          value={props.value}
          label={props.title}
          type={fieldType(props.type)}
          onChange={handleChange}
          id={props.id}
        />

        {(props.willValidate === undefined ? true : props.willValidate) &&
          props.validate &&
          !props.validate[Object.keys(props.validate)[0]] && (
            <FormHelperText id="standard-helper-text">*Required</FormHelperText>
          )}
      </FormControl>
    </form>
  );
};

export default TextInput;
