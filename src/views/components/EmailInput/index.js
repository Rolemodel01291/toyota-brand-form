import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { userData } from '../../utils/questions';
import Snackbar from '@material-ui/core/Snackbar';
import Link from '@material-ui/core/Link';
import Dialog from '../Dialog';
import { Session } from '../../../api';
import { setEmail } from '../../../state/ducks/user/actions';
import theme from '../../../utilities/theme';
import { StyledButton } from '../../styled/Containers';

const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    width: '100%',
  },
  margin: {
    marginTop: '15px',
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
  emailcolor: {
    color: '#eb0a1e',
  },
}));

export default function InputAdornments(props) {
  localStorage.setItem('@authentication', 'true');
  localStorage.setItem('@begin_application', 'false');
  localStorage.setItem('@background_hardship', 'false');
  localStorage.setItem('@income_expenses', 'false');
  localStorage.setItem('@review_submit', 'false');
  const brand = useSelector((store) => store.brand.brand);
  const data = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const classes = useStyles(data);
  const history = useHistory();

  const [email, setEmailState] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setEmailState(data.email);
    setEmailValid(emailRegex.test(data.email));
  }, [data.email, setEmailState, setEmailValid]);

  const handleChange = useCallback(
    ({ target: { value } }) => setEmailState(value),
    [setEmailState]
  );

  const validateEmail = useCallback(
    () => setEmailValid(emailRegex.test(email)),
    [email, setEmailValid]
  );

  const next = useCallback(async () => {
    if (emailValid) {
      Session.requestCode(brand, email);
      setEmail(email, dispatch);
      history.push('/verify_code');
    } else {
      setTouched(true);
    }
  }, [email, emailValid, setEmail, setTouched]);

  const [open, setOpen] = useState(false);

  const openPopUp = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const showEmailError = touched && !emailValid;

  return (
    <div className={classes.root}>
      <h1>Start the financial hardship application</h1>
      <h4>Authentication</h4>
      <div style={{ marginTop: '40px', fontSize: '14px' }}>
        <Link
          href="#"
          onClick={() => openPopUp()}
          style={{ marginTop: '20px' }}
        >
          Click here for more information
        </Link>
      </div>

      <h6 style={{ marginTop: '20px', marginBottom: '0px' }}>
        Please enter your email address:
      </h6>
      <FormControl
        error={showEmailError}
        className={clsx(classes.margin, classes.textField, classes.width)}
        variant="outlined"
      >
        <InputLabel error={showEmailError} htmlFor="filled-start-adornment">
          Email
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          value={email}
          type={'email'}
          onChange={handleChange}
          labelWidth={50}
          onBlur={validateEmail}
        />
        {showEmailError && (
          <p style={{ color: theme(brand).color.warn }}>
            Please enter a valid email address
          </p>
        )}
      </FormControl>
      <div className={classes.button}>
        <StyledButton theme={brand} variant="contained" onClick={() => next()}>
          Next
        </StyledButton>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Dialog open={open} close={close} />
        </div>
      </div>
    </div>
  );
}
