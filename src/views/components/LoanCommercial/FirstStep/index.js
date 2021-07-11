import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionTypes from '../../../../state/ducks/user/types';
import divisions from '../../../utils/divisions';
import AutoComplete from '../../AutoComplete';
import CodeInput from '../../FormElements/CodeInput';
import TextInput from '../../FormElements/TextInput';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  formRegisterControl: {
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
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const [values, setValues] = React.useState({ ...userData.loan });
  const [divisionMenu, setDivisionMenu] = React.useState([]);
  const [subDivisionMenu, setSubDivisionMenu] = React.useState([]);
  useEffect(() => {
    let temp = [];
    divisions.map((item) => {
      temp.push({ title: item.title, id: item.id });
    });
    setDivisionMenu(_.sortBy(temp, 'title'));
    if (values.division) {
      divisions.map((item) => {
        if (item.id === values.division.id) {
          setSubDivisionMenu(_.sortBy(item.children, 'title'));
        }
      });
    } else {
      setSubDivisionMenu([]);
    }
  }, [values.division]);
  const handleRadioChange = (event) => {
    if (event.target.value === 'true') {
      dispatch({
        type: actionTypes.SET_LOAN_DATA,
        payload: {
          isLoanCommercial: event.target.value,
          isLoanCommercial_validate: true,
          company_name_validate: values.company_name === '' ? false : true,
          isCompanyRegistered_validate:
            values.isCompanyRegistered === '' ? false : true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_LOAN_DATA,
        payload: {
          isLoanCommercial: event.target.value,
          isLoanCommercial_validate: true,
          company_name_validate: true,
          isCompanyRegistered_validate: true,
        },
      });
    }

    localStorage.setItem('loan_commercial', event.target.value);
  };

  useEffect(() => {
    setValues({ ...userData.loan });
  }, [userData.loan]);

  const handleRegisterRadioChange = (event) => {
    if (event.target.value === 'true') {
      dispatch({
        type: actionTypes.SET_LOAN_DATA,
        payload: {
          isCompanyRegistered: event.target.value,
          isCompanyRegistered_validate: true,
          division_validate: values.division === '' ? false : true,
          sub_division_validate: values.sub_division === '' ? false : true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_LOAN_DATA,
        payload: {
          isCompanyRegistered: event.target.value,
          isCompanyRegistered_validate: true,
          division_validate: true,
          sub_division_validate: true,
        },
      });
    }
  };

  const setValue = async (key, value, validate) => {
    if (validate[Object.keys(validate)[0]]) {
      dispatch({
        type: actionTypes.SET_LOAN_DATA,
        payload: { [key]: value, [Object.keys(validate)[0]]: true },
      });
    } else {
      dispatch({
        type: actionTypes.SET_LOAN_DATA,
        payload: { [key]: value, [Object.keys(validate)[0]]: false },
      });
    }
  };

  const setDivision = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const setSubDivision = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    history.push('/reason_applying');
  };

  const next = () => {
    props.next();
  };

  return (
    <>
      <h5>Is your loan a commercial loan?</h5>
      {!values.isLoanCommercial_validate && <h6>*Required</h6>}
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.isLoanCommercial}
          onChange={handleRadioChange}
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
          {values.isLoanCommercial === 'true' && (
            <>
              <FormControl component="fieldset" className={classes.formControl}>
                <h5>ABN:</h5>
                <CodeInput
                  width="9%"
                  fields={11}
                  id="ABN"
                  setValue={setValue}
                  value={values.ABN}
                  validate={{ ABN_validate: values.ABN_validate }}
                />
              </FormControl>
              <TextInput
                title="Company or Business Name"
                id="company_name"
                setValue={setValue}
                value={values.company_name}
                validate={{
                  company_name_validate: values.company_name_validate,
                }}
              />
              <h5>Is the company or business still registered and trading?</h5>
              <FormControl
                component="fieldset"
                className={classes.formRegisterControl}
              >
                {!values.isCompanyRegistered_validate && <h6>*Required</h6>}
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={values.isCompanyRegistered}
                  onChange={handleRegisterRadioChange}
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
                </RadioGroup>
              </FormControl>
              {values.isCompanyRegistered === 'true' && (
                <>
                  <h5>Which industry are you in?</h5>
                  <AutoComplete
                    data={divisionMenu}
                    id="division"
                    title="Select division"
                    setValue={setValue}
                    value={values.division}
                    validate={{ division_validate: values.division_validate }}
                  />
                </>
              )}

              {subDivisionMenu.length > 0 &&
                values.isCompanyRegistered === 'true' && (
                  <>
                    <h5>Which industry sub division are you in?</h5>
                    <AutoComplete
                      data={subDivisionMenu}
                      id="sub_division"
                      title="Select subdivision"
                      setValue={setValue}
                      value={values.sub_division}
                      validate={{
                        sub_division_validate: values.sub_division_validate,
                      }}
                    />
                  </>
                )}
            </>
          )}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default FirstStep;
