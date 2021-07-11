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
      <h5>Approximately what date did these difficulties start?</h5>
      <DatePicker title="Date" />
      <h5>
        What date do you expect to be able to resume your full contractual
        repayments?
      </h5>
      <DatePicker title="Date" />
      <h5>What are you doing or able to do to address your situation?</h5>
      <TextInput title="Please Write Here" id="d" setValue={setValue} />
      <h5>
        If you are searching for work, when you find suitable employment, what
        do you expect your gross (before tax) monthly wage/salary to be?
      </h5>
      <PriceInput title="AUD" />

      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
