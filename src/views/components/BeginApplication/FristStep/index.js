import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionType from '../../../../state/ducks/user/types';
import Dialog from '../../../components/Dialog';
import ButtonGroup from '../../ButtonGroup';
import DatePicker from '../../FormElements/DatePicker';
import TextInput from '../../FormElements/TextInput';
import Loan from '../../LoanCommercial/FirstStep';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  root: {
    '& .MuiTextField-root': {
      marginTop: '32px',
      maxWidth: '415px',
      width: '415px',
      minWidth: '200px',
    },
  },
  button: {
    width: '100%',
    '& .MuiButtonBase-root': {
      width: '100%',
      borderRadius: '20px',
    },
  },
  color: {
    backgroundColor: '#eb0a1e',
  },
  option: {
    marginTop: theme.spacing(3),
    marginLeft: 0,
    marginRight: 0,
    height: '60px',
    backgroundColor: '#ebebec',
    borderRadius: '3px;',
    '&:hover': {
      background: '#fff',
      boxShadow: '1px 2px 6px 0 rgba(34,34,34,.15)',
    },
  },
}));

function FirstStep(props) {
  localStorage.setItem('@begin_application', 'false');
  const userData = useSelector((store) => store.user);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({ ...userData.begin });
  useEffect(() => {
    setValues({ ...userData.begin });
  }, [userData]);
  const handleRadioChange = (event) => {
    if (event.target.value === 'true') {
      dispatch({
        type: actionType.SET_BEGIN_DATA,
        payload: {
          isContractNumber_validate: true,
          contractNumber_validate: values.contractNumber === '' ? false : true,
          registrationNumber_validate: true,
          isContractNumber: event.target.value,
        },
      });
    } else {
      dispatch({
        type: actionType.SET_BEGIN_DATA,
        payload: {
          isContractNumber_validate: true,
          registrationNumber_validate:
            values.registrationNumber === '' ? false : true,
          contractNumber_validate: true,
          isContractNumber: event.target.value,
        },
      });
    }
  };

  const handleIsAllChange = (event) => {
    dispatch({
      type: actionType.SET_BEGIN_DATA,
      payload: {
        isGotAll: event.target.value,
        isGotAll_validate: true,
      },
    });
  };

  const handleSecondChange = (event) => {
    // setValues({ ...values, isSecondBorrower: event.target.value });
    if (event.target.value === 'true') {
      dispatch({
        type: actionType.SET_BEGIN_DATA,
        payload: {
          isSecondBorrower: event.target.value,
          isSecondBorrower_validate: true,
          secondUserName_validate: values.secondUserName === '' ? false : true,
          secondPhoneNumber_validate:
            values.secondPhoneNumber === '' ? false : true,
          secondAddress_validate: values.secondAddress === '' ? false : true,
          secondDOB_validate: values.secondDOB === null ? false : true,
        },
      });
    } else {
      dispatch({
        type: actionType.SET_BEGIN_DATA,
        payload: {
          isSecondBorrower: event.target.value,
          isSecondBorrower_validate: true,
          secondUserName_validate: true,
          secondPhoneNumber_validate: true,
          secondAddress_validate: true,
          secondDOB_validate: true,
        },
      });
    }

    localStorage.setItem('second_borrower', event.target.value);
  };

  const setValue = (key, value, validate) => {
    if (validate[Object.keys(validate)[0]]) {
      dispatch({
        type: actionType.SET_BEGIN_DATA,
        payload: { [key]: value, [Object.keys(validate)[0]]: true },
      });
    } else {
      dispatch({
        type: actionType.SET_BEGIN_DATA,
        payload: { [key]: value, [Object.keys(validate)[0]]: false },
      });
    }
  };

  const before = () => {
    history.push('/verify_code');
    dispatch({ type: actionType.SET_BEGIN_DATA, payload: values });
  };

  const next = async () => {
    let temp = {};
    let loanTemp = {};

    temp = {
      ...temp,
      isContractNumber_validate: values.isContractNumber === '' ? false : true,
      contractNumber_validate:
        values.isContractNumber === 'true'
          ? values.contractNumber === ''
            ? false
            : true
          : true,
      registrationNumber_validate:
        values.isContractNumber !== 'true'
          ? values.registrationNumber === ''
            ? false
            : true
          : true,
      isGotAll_validate: values.isGotAll === '' ? false : true,
      userName_validate: values.userName === '' ? false : true,
      address_validate: values.address === '' ? false : true,
      phoneNumber_validate: values.phoneNumber === '' ? false : true,
      DOB_validate: values.DOB === null ? false : true,
      isSecondBorrower_validate: values.isSecondBorrower === '' ? false : true,
      secondUserName_validate:
        values.isSecondBorrower === 'true'
          ? values.secondUserName === ''
            ? false
            : true
          : true,
      secondAddress_validate:
        values.isSecondBorrower === 'true'
          ? values.secondAddress === ''
            ? false
            : true
          : true,
      secondPhoneNumber_validate:
        values.isSecondBorrower === 'true'
          ? values.secondAddress === ''
            ? false
            : true
          : true,
      secondDOB_validate:
        values.isSecondBorrower === 'true'
          ? values.secondDOB === null
            ? false
            : true
          : true,
    };
    loanTemp = {
      ...loanTemp,
      isLoanCommercial_validate:
        userData.loan.isLoanCommercial === '' ? false : true,
      company_name_validate:
        userData.loan.isLoanCommercial === 'true'
          ? userData.loan.company_name === ''
            ? false
            : true
          : true,
      isCompanyRegistered_validate:
        userData.loan.isLoanCommercial === 'true'
          ? userData.loan.company_name === ''
            ? false
            : true
          : true,
      division_validate:
        userData.loan.isCompanyRegistered === 'true'
          ? userData.loan.division === ''
            ? false
            : true
          : true,
      sub_division_validate:
        userData.loan.isCompanyRegistered === 'true'
          ? userData.loan.sub_division === ''
            ? false
            : true
          : true,
    };

    // await dispatch({ type: actionType.SET_BEGIN_DATA, payload: temp })
    // await dispatch({ type: actionType.SET_LOAN_DATA, payload: loanTemp })

    if (
      userData.begin.userName_validate &&
      userData.begin.phoneNumber_validate &&
      userData.begin.address_validate &&
      userData.begin.isContractNumber_validate &&
      userData.begin.isGotAll_validate &&
      userData.begin.contractNumber_validate &&
      userData.begin.registrationNumber_validate &&
      userData.begin.DOB_validate &&
      userData.begin.secondUserName_validate &&
      userData.begin.secondPhoneNumber_validate &&
      userData.begin.secondAddress_validate &&
      userData.begin.secondDOB_validate &&
      userData.begin.isSecondBorrower_validate &&
      userData.loan.isLoanCommercial_validate &&
      userData.loan.ABN_validate &&
      userData.loan.company_name_validate &&
      userData.loan.isCompanyRegistered_validate &&
      userData.loan.division_validate &&
      userData.loan.sub_division_validate &&
      (values.isGotAll === 'true'
        ? userData.begin.contractNumbers_validates ||
          userData.begin.registerNumbers_validates
        : true)
    ) {
      props.next();
    }
  };

  const [open, setOpen] = React.useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <form>
      <h4>To get started, do you know your contract number?</h4>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.isContractNumber}
          onChange={handleRadioChange}
        >
          {!values.isContractNumber_validate && <h6>*Required</h6>}
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Yes"
            className={classes.option}
          />
          {values.isContractNumber === 'true' && (
            <TextInput
              title="Enter your contract number*"
              value={values.contractNumber}
              setValue={setValue}
              id="contractNumber"
              validate={{
                contractNumber_validate: values.contractNumber_validate,
              }}
              type="contractNumber"
            />
          )}
          {!values.contractNumber_validate && (
            <h6>
              Your contract number should be 8 numbers starting from either the
              numbers 11, 12, 13
            </h6>
          )}
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="No"
            className={classes.option}
          />
          {values.isContractNumber === 'false' && (
            <TextInput
              title="Enter your vehicle’s registration number*"
              value={values.registrationNumber}
              setValue={setValue}
              id="registrationNumber"
              type="registrationNumber"
              validate={{
                registrationNumber_validate: values.registrationNumber_validate,
              }}
            />
          )}
          {!values.registrationNumber_validate && (
            <h6>Vehicle registration numbers are a maximum of 7 characters</h6>
          )}
        </RadioGroup>
      </FormControl>
      <h5>
        If you have more than one loan with us, are you applying for hardship on
        all loans?
      </h5>
      <FormControl component="fieldset" className={classes.formControl}>
        {!values.isGotAll_validate && <h6>*Required</h6>}
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.isGotAll}
          onChange={handleIsAllChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Yes"
            className={classes.option}
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="No"
            className={classes.option}
          />

          {values.isGotAll === 'true' && (
            <>
              <h1>
                Please add all your contract / registration number(s) separated
                by commas
              </h1>
              <TextInput
                title={
                  values.registerNumbers_validates
                    ? 'Enter contract numbers'
                    : 'Enter contract numbers*'
                }
                value={values.contractNumbers}
                setValue={setValue}
                id="contractNumbers"
                type="contractNumbers"
                willValidate={!values.registerNumbers_validates}
                validate={{
                  contractNumbers_validates: values.contractNumbers_validates,
                }}
              />
              {!values.contractNumbers_validates &&
                !values.registerNumbers_validates && (
                  <h6>
                    Contract numbers should be 8 numbers starting from either
                    the numbers 11, 12, 13 and separated by a comma
                  </h6>
                )}

              <TextInput
                title={
                  values.contractNumbers_validates
                    ? 'Enter your registration numbers'
                    : 'Enter your registration numbers*'
                }
                value={values.registrationNumbers}
                // error={values.registerValidate ? true : false}
                setValue={setValue}
                id="registrationNumbers"
                type="registrationNumbers"
                willValidate={!values.contractNumbers_validates}
                validate={{
                  registerNumbers_validates: values.registerNumbers_validates,
                }}
              />
              {!values.registerNumbers_validates &&
                !values.contractNumbers_validates && (
                  <h6>
                    Registration number should be up to 7 characters and
                    separated by a comma
                  </h6>
                )}
            </>
          )}
        </RadioGroup>
      </FormControl>
      <h5>Your personal and contact details</h5>
      <TextInput
        title="Name (Given name & Surname)*"
        value={values.userName}
        setValue={setValue}
        id="userName"
        type="name"
        validate={{ userName_validate: values.userName_validate }}
      />
      <TextInput
        title="Enter your Address*"
        value={values.address}
        setValue={setValue}
        id="address"
        validate={{ address_validate: values.address_validate }}
      />
      <TextInput
        title="Enter your Phone Number*"
        value={values.phoneNumber}
        setValue={setValue}
        id="phoneNumber"
        type="phoneNumber"
        validate={{ phoneNumber_validate: values.phoneNumber_validate }}
      />
      {!values.phoneNumber_validate && (
        <h6>
          Phone number should be Australian starting with 61 or 0. Landlines
          need an area code. E.g. 0123456789 or 61123456789
        </h6>
      )}
      <DatePicker
        title="Enter your Date of Birth"
        value={values.DOB}
        setValue={setValue}
        id="DOB"
        validate={{ DOB_validate: values.DOB_validate }}
      />

      <h5>Does your loan involve a second borrower/director/guarantor?</h5>
      <FormControl component="fieldset" className={classes.formControl}>
        {!values.isSecondBorrower_validate && <h6>*Required</h6>}
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.isSecondBorrower}
          onChange={handleSecondChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Yes"
            className={classes.option}
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="No"
            className={classes.option}
          />
          {values.isSecondBorrower === 'true' && (
            <>
              <h1>Please enter their details below</h1>
              <TextInput
                title="Name (Given Name & Surname)"
                value={values.secondUserName}
                setValue={setValue}
                id="secondUserName"
                validate={{
                  secondUserName_validate: values.secondUserName_validate,
                }}
              />
              <TextInput
                title="Enter their Address*"
                value={values.secondAddress}
                setValue={setValue}
                id="secondAddress"
                validate={{
                  secondAddress_validate: values.secondAddress_validate,
                }}
              />
              <TextInput
                title="Enter their Phone Number*"
                value={values.secondPhoneNumber}
                setValue={setValue}
                id="secondPhoneNumber"
                type="phoneNumber"
                validate={{
                  secondPhoneNumber_validate: values.secondPhoneNumber_validate,
                }}
              />
              {!values.secondPhoneNumber_validate && (
                <h6>
                  Phone number should be Australian starting with 61 or 0.
                  Landlines need an area code. E.g. 0123456789 or 61123456789
                </h6>
              )}
              <DatePicker
                title="Enter their Date of Birth"
                value={values.secondDOB}
                setValue={setValue}
                id="secondDOB"
                validate={{ secondDOB_validate: values.secondDOB_validate }}
              />
            </>
          )}
        </RadioGroup>
      </FormControl>
      <Loan />
      <Dialog open={open} close={close} />
      <ButtonGroup before={before} next={next} />
    </form>
  );
}

export default FirstStep;
