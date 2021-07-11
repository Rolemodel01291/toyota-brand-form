import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonGroup from '../../ButtonGroup';
import DatePicker from '../../FormElements/DatePicker';
import PriceInput from '../../FormElements/PriceInput';
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

const menuData = [
  {
    value: 'I have personally been medically diagnosed with COVID-19',
    id: 'have_personally_medically_diagnosed_covid_19',
  },
  {
    value:
      'A dependent or person close to me has been medically diagnosed with COVID-19',
    id: 'have_dependent_medically_diagnosed_covid_19',
  },
  {
    value: 'My employement/income has ceased due to COVID-19',
    id: 'employement_income_has_cased_codiv_19',
  },
  {
    value: 'My employement/income has reduced due to COVID-19',
    id: 'employement_income_has_reduced_codiv_19',
  },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    background_hardship_others: false,
    briefly_describe: false,
    eligible_for_complensation: false,
    how_much: false,
    when_anticipate_compensation: false,
    when_difficulties_date: false,
    when_resume_contractual_repayment: false,
  });

  const handleRegisterRadioChange = (event) => {
    setValues({ ...values, eligible_for_complensation: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    props.before();
  };

  const next = () => {
    props.next();
  };

  return (
    <>
      <h4>Background to Hardship Information</h4>

      <TextInput
        title="Others"
        id="background_hardship_others"
        setValue={setValue}
      />
      <TextInput
        title="Briefly Describe your Circumstances"
        id="briefly_describe"
        setValue={setValue}
      />
      <h5>
        If your situation is as a result of an accident, are you eligible for
        complensation?
      </h5>
      <FormControl component="fieldset" className={classes.formRegisterControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.eligible_for_complensation}
          onChange={handleRegisterRadioChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Yes"
            className={classes.option}
          />
          {values.eligible_for_complensation === 'true' && (
            <>
              <h5>How much?</h5>
              <PriceInput title="AUD" />
              <h5>when do you anticipate compensation will be paid?</h5>
              <DatePicker title="Date" />
            </>
          )}
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="No"
            className={classes.option}
          />
        </RadioGroup>
      </FormControl>

      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
