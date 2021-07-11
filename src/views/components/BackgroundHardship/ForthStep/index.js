import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonGroup from '../../ButtonGroup';
import DatePicker from '../../FormElements/DatePicker';

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

const menuData = [
  {
    value: 'I have personally been medically diagnosed with COVID-19',
    id: 'have_personally_medically_diagnosed_covid_19',
  },
  {
    value: 'My employement/income has ceased due to COVID-19 (including due to carers responsibilities)',
    id: 'employement_income_has_cased_codiv_19',
  },
  {
    value: 'My employement/income has reduced due to COVID-19 (including due to carers responsibilities)',
    id: 'employement_income_has_reduced_codiv_19',
  },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    Payment_Protection_Insurance: false,
    logged_clam: false,
    when_logged_calm: false,
  });

  const handleRegisterRadioChange = (event) => {
    setValues({ ...values, Payment_Protection_Insurance: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const handleClamRadioChange = (event) => {
    setValues({ ...values, logged_clam: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    props.before();
  };

  const next = () => {
    localStorage.setItem('@background_hardship', 'true');
    history.push('/proposal_assistance');
  };

  return (
    <>
      <h4>Background to Hardship Information</h4>
      <h5>
        Do you have Finance Protection Insurance, Payment Protection Insurance
        or Consumer Credit Insurance for your loan contract(s)?
      </h5>
      <FormControl component="fieldset" className={classes.formRegisterControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.Payment_Protection_Insurance}
          onChange={handleRegisterRadioChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Yes"
            className={classes.option}
          />
          {values.Payment_Protection_Insurance === 'true' && (
            <>
              <h5>If yes, have you lodged a claim?</h5>
              <FormControl
                component="fieldset"
                className={classes.formRegisterControl}
              >
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={values.logged_clam}
                  onChange={handleClamRadioChange}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                    className={classes.option}
                  />
                  {values.logged_clam === 'true' && (
                    <>
                      <h5>when was the claim lodged?</h5>
                      <DatePicker title="Select Date" />
                    </>
                  )}
                  {values.logged_clam !== 'true' && (
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                      className={classes.option}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </>
          )}

          {values.Payment_Protection_Insurance !== 'true' && (
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="No"
              className={classes.option}
            />
          )}
        </RadioGroup>
      </FormControl>
      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
