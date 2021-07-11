import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonGroup from '../../ButtonGroup';
import SelectBox from '../../FormElements/SelectBox';

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

const menuData = [
  { value: 'Unemployement', id: 'unemployment' },
  { value: 'Natural Disaster', id: 'natural_disaster' },
  { value: 'Illness or injury', id: 'illness_or_injury' },
  { value: 'Over Commitment', id: 'over_commitment' },
  { value: 'Reduction of income', id: 'reduction_of_income' },
  {
    value: 'Illness or injury of a family member',
    id: 'illness_or_injury_of_family_member',
  },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    why_apply_hardship: undefined,
    isRelactionCovid: false,
  });
  const handleRadioChange = (event) => {
    setValues({ ...values, isRelactionCovid: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    props.before();
  };

  const next = () => {
    localStorage.setItem('@reason_applying', 'true');
    history.push('/loan_commercial');
  };

  return (
    <>
      <h4>Is your application related to COVID-19?</h4>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={values.isRelactionCovid}
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
        </RadioGroup>
      </FormControl>
      <SelectBox
        items={menuData}
        value={values.why_apply_hardship}
        setValue={setValue}
        title="Why are you applying for hardship?"
        id="why_apply_hardship"
      />
      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
