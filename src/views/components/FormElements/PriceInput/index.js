import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '20px',
  },
}));

const currencyRegex = /^[0-9]*$/;
// const numericDecimal = /^[0-9]+(.[0-9]{0,2})?$/;

function PriceInput(props) {
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

    if (props.type === 'currency') {      
      if (currencyRegex.test(value)) {
        if(value===''){
          setValueHelper(value, false);
        } else {
          setValueHelper(value, true);
        }
      }
    } else {
      props.setValue(props.id, value, { blank: true });
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl fullWidth className={classes.root}>
        <InputLabel htmlFor={props.id}>{props.title}</InputLabel>
        <Input
          id={props.id}
          value={props.value}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              {props.percent ? '%' : props.years ? 'Years' : '$'}
            </InputAdornment>
          }
        />
        {(props.willValidate === undefined ? true : props.willValidate) &&
        props.validate &&
        !props.validate[Object.keys(props.validate)[0]] ? (
          <FormHelperText id="standard-helper-text">*Required</FormHelperText>
        ) : (
          props.helperText && (
            <FormHelperText className="helper-text">
              {props.helperText}
            </FormHelperText>
          )
        )}
      </FormControl>
    </form>
  );
}

export default PriceInput;
