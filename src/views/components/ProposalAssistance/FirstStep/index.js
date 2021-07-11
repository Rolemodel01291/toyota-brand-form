import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonGroup from '../../ButtonGroup';
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

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    feature_monthly_repayment: false,
  });

  const handleRegisterRadioChange = (event) => {
    setValues({ ...values, feature_monthly_repayment: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const before = () => {
    history.push('/background_hardship');
  };

  const next = () => {
    localStorage.setItem('@proposal_assistance', 'true');
    history.push('/preview_submit');
  };

  return (
    <>
      <h4>Proposal for Assistance</h4>
      <h5>
        Please indicate what reasonable assistance we could provided to you that
        would help you through this difficult time and allow you to meet your
        future monthly repayments to us.
      </h5>
      <FormControl component="fieldset" className={classes.formRegisterControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.feature_monthly_repayment}
          onChange={handleRegisterRadioChange}
        >
          <FormControlLabel
            value="postone_repayments"
            control={<Radio />}
            label="Postpone repayments"
            className={classes.option}
          />
          {values.feature_monthly_repayment === 'postone_repayments' && (
            <>
              <h5>How long would you like to postpone your repayments?</h5>
              <TextInput title="Please write here" />
            </>
          )}
          <FormControlLabel
            value="reduce_repayments"
            control={<Radio />}
            label="Reduce repayments"
            className={classes.option}
          />
          {values.feature_monthly_repayment === 'reduce_repayments' && (
            <>
              <h5>How long would you like to reduce your repayments?</h5>
              <TextInput title="Please write here" />
              <h5>what percentage would you like to reduce your repayments</h5>
              <PriceInput title="Please write here" type="%" />
            </>
          )}
          <FormControlLabel
            value="normal_repayments"
            control={<Radio />}
            label="Continue with normal repayments but assist with missed payments"
            className={classes.option}
          />

          <FormControlLabel
            value="extend_term"
            control={<Radio />}
            label="Extend the term"
            className={classes.option}
          />

          <FormControlLabel
            value="employement_income_has_reduced_codiv_19"
            control={<Radio />}
            label="Other"
            className={classes.option}
          />
        </RadioGroup>
      </FormControl>
      {/* <TextInput title="Others" id="background_hardship_others" setValue={setValue}/>
            <TextInput title="Briefly Describe your Circumstances" id="briefly_describe" setValue={setValue}/> */}

      <ButtonGroup before={before} next={next} last="true" />
    </>
  );
}

export default FirstStep;
