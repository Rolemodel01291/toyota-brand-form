import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
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

const menuData = [
  { value: 'ANZSIC Division Titles', id: 'ANZSIC_division_title' },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    residential_property_specify_address: false,
    residential_property_specify_address_value: false,
    investment_property_specify_address: false,
    investment_property_specify_address_value: false,
    vehicle_1_specify_make_modle_year: false,
    vehicle_1_specify_make_modle_year_value: false,
    vehicle_2_specify_make_modle_year: false,
    vehicle_2_specify_make_modle_year_value: false,
    superannuation: false,
    savings: false,
    Household_furniture: false,
    shares: false,
    other_specify: false,
    other_specify_value: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    history.push('/expenses');
  };

  const next = () => {
    localStorage.setItem('@assets', 'true');
    history.push('./liabilities');
  };

  return (
    <>
      <h4>Please provide details of your assets.</h4>
      <h5>Residnetial property address</h5>
      <TextInput
        setValue={setValue}
        title="Address"
        id="residential_property_specify_address"
        next={next}
        before={before}
      />

      <PriceInput
        setValue={setValue}
        title="Estimate Value"
        id="residential_property_specify_address_value"
        next={next}
        before={before}
      />

      <h5>Investment property - Specify address</h5>
      <TextInput
        setValue={setValue}
        title="Address"
        id="investment_property_specify_address"
        next={next}
        before={before}
      />

      <PriceInput
        setValue={setValue}
        title="Estimate Value"
        id="investment_property_specify_address_value"
        next={next}
        before={before}
      />
      <h5>Vehicle 1 - Specify make, model & year</h5>
      <TextInput
        setValue={setValue}
        title="Address"
        id="vehicle_1_specify_make_modle_year"
        next={next}
        before={before}
      />

      <PriceInput
        setValue={setValue}
        title="Estimate Value"
        id="vehicle_1_specify_make_modle_year_value"
        next={next}
        before={before}
      />
      <h5>Vehicle 2 - Specify make, model & year</h5>
      <TextInput
        setValue={setValue}
        title="Address"
        id="vehicle_2_specify_make_modle_year"
        next={next}
        before={before}
      />

      <PriceInput
        setValue={setValue}
        title="Estimate Value"
        id="vehicle_2_specify_make_modle_year_value"
        next={next}
        before={before}
      />

      <PriceInput
        setValue={setValue}
        title="Superannuation"
        id="superannuation"
        next={next}
        before={before}
      />
      <PriceInput
        setValue={setValue}
        title="Savings"
        id="savings"
        next={next}
        before={before}
      />
      <PriceInput
        setValue={setValue}
        title="Household funiture"
        id="Household_furniture"
        next={next}
        before={before}
      />
      <PriceInput
        setValue={setValue}
        title="Shares"
        id="shares"
        next={next}
        before={before}
      />
      <h5>Other - Specify</h5>
      <TextInput
        setValue={setValue}
        title="Address"
        id="other_specify"
        next={next}
        before={before}
      />

      <PriceInput
        setValue={setValue}
        title="Estimate Value"
        id="other_specify_value"
        next={next}
        before={before}
      />
      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
