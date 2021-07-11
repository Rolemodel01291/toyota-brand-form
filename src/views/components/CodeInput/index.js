import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Session, Forms } from '../../../api';
import { userLoggedIn } from '../../../state/ducks/user/actions';
import {
  BEGIN_APPLICATION_PAGE,
  AUTHORISATION_TOKEN_STORAGE_KEY,
  FORM_ID_STORAGE_KEY,
} from '../../../utilities';
import { formDataFromStorage } from '../../../utilities/storage';
import { StyledButton } from '../../styled/Containers';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    width: '100%',
  },
  margin: {
    marginTop: '30px',
  },
  textField: {
    width: '100%',
  },
  width: {
    width: '100%',
    minWidth: '200px',
  },
  button: {
    marginTop: '80px',
    width: '100%',
    '& .MuiButtonBase-root': {
      width: '100%',
      borderRadius: '20px',
    },
  },
  color: {
    backgroundColor: '#eb0a1e',
    '& span': {
      color: '#FFFFFF',
    },
    '&:hover': {
      backgroundColor: '#D1091B',
    },
  },
}));

export default function InputAdornments(props) {
  const brand = useSelector((store) => store.brand.brand);
  const data = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const classes = useStyles(data);
  const history = useHistory();
  const [values, setValues] = React.useState({
    code: '',
    sendEmail: false,
    emailValid: false,
  });

  useEffect(() => {
    if (data.token) {
      const path = data.formSection;
      history.push(path && path !== '/' ? path : BEGIN_APPLICATION_PAGE);
    }
  });

  const handleChange = (prop) => async (event) => {
    validateField(event.target.value);
  };

  const validateField = (value) => {
    const validated = value.match(/^([\w.%+-]+)$/i);
    if (validated) {
      setValues({ ...values, emailValid: false, code: value });
    } else {
      setValues({ ...values, emailValid: true });
    }
  };

  const next = async () => {
    if (!values.emailValid && values.code) {
      const { token } = await Session.requestToken(
        brand,
        data.email,
        values.code
      ).catch((err) => {
        alert(`Incorrect code [${values.code}] ${err}`);
        return {};
      });
      if (!token) {
        console.error('no token');
        return;
      }
      await localStorage.setItem(AUTHORISATION_TOKEN_STORAGE_KEY, token);
      await localStorage.removeItem(FORM_ID_STORAGE_KEY);
      const formData = await formDataFromStorage();
      userLoggedIn(formData, dispatch);
    }
  };

  return (
    <div className={classes.root}>
      <h1>Did you get the verification code?</h1>
      <h4>Authentication</h4>
      <h6>Please enter your code:</h6>
      <FormControl
        error={values.emailValid && true}
        className={clsx(classes.margin, classes.textField, classes.width)}
        variant="outlined"
      >
        <InputLabel
          error={values.emailValid && true}
          htmlFor="filled-start-adornment"
        >
          Code
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-code"
          value={values.email}
          type={values.sendEmail ? 'text' : 'email'}
          onChange={handleChange('code')}
          labelWidth={70}
        />
      </FormControl>
      <div className={classes.button}>
        <StyledButton
          theme={brand}
          variant="contained"
          onClick={() => next()}
        >
          Next
        </StyledButton>
      </div>
    </div>
  );
}
