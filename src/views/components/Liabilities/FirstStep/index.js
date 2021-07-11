import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
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
  { value: 'ANZSIC Division Titles', id: 'ANZSIC_division_title' },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    rent_board_repayment: false,
    residential_mortgate_with: false,
    residential_mortgate_amount: false,
    residential_mortgate_rate: false,
    residential_mortgate_term: false,
    residential_mortgate_opened_date: false,
    residential_mortgate_outstanding: false,
    residential_mortgate_repayment: false,
    investment_mortgate_with: false,
    investment_mortgate_amount: false,
    investment_mortgate_rate: false,
    investment_mortgate_term: false,
    investment_mortgate_opened_date: false,
    investment_mortgate_outstanding: false,
    investment_mortgate_repayment: false,
    secured_loan_with_first: false,
    secured_loan_opened_date_first: false,
    secured_loan_outstanding_first: false,
    secured_loan_repayment_first: false,
    secured_loan_with_second: false,
    secured_loan_opened_date_second: false,
    secured_loan_outstanding_second: false,
    secured_loan_repayment_second: false,
    credit_card_with_first: false,
    credit_card_limit_first: false,
    credit_card_opened_date_first: false,
    credit_card_outstanding_first: false,
    credit_card_repayment_first: false,
    credit_card_with_second: false,
    credit_card_limit_second: false,
    credit_card_opened_date_second: false,
    credit_card_outstanding_second: false,
    credit_card_repayment_second: false,
    credit_card_with_third: false,
    credit_card_limit_third: false,
    credit_card_opened_date_third: false,
    credit_card_outstanding_third: false,
    credit_card_repayment_third: false,
    credit_card_with_forth: false,
    credit_card_limit_forth: false,
    credit_card_opened_date_forth: false,
    credit_card_outstanding_forth: false,
    credit_card_repayment_forth: false,
    liabilities_other_specify_with: false,
    liabilities_other_specify_opened_date: false,
    liabilities_other_specify_outstanding: false,
    liabilities_other_specify_repayment: false,
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
    localStorage.setItem('@liabilities', 'true');
    history.push('./background_hardship');
  };

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>
        Please provide details of your liabilities. Please take care to list all
        liabilities, including all credit cards and loans as discrepancies with
        the information we have for you may cause your application to take
        longer to assess.
      </h4>
      <TextInput
        setValue={setValue}
        title="Rent/Board"
        id="rent_board_repayment"
      />
      <h5>Residential Mortgage</h5>
      <TextInput
        setValue={setValue}
        title="With"
        id="residential_mortgate_with"
      />
      <PriceInput
        setValue={setValue}
        title="Original loan amount"
        id="residential_mortgate_amount"
      />
      <PriceInput
        setValue={setValue}
        title="Current rate"
        id="residential_mortgate_rate"
        percent="%"
      />
      <PriceInput
        setValue={setValue}
        title="Original term"
        id="residential_mortgate_term"
        years="Years"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="residential_mortgate_opened_date"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="residential_mortgate_outstanding"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="residential_mortgate_repayment"
      />
      <h5>Investment Mortgage</h5>
      <TextInput
        setValue={setValue}
        title="With"
        id="investment_mortgate_with"
      />
      <PriceInput
        setValue={setValue}
        title="Original loan amount"
        id="investment_mortgate_amount"
      />
      <PriceInput
        setValue={setValue}
        title="Current rate"
        id="investment_mortgate_rate"
        percent="%"
      />
      <PriceInput
        setValue={setValue}
        title="Original term"
        id="investment_mortgate_term"
        years="Years"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="investment_mortgate_opened_date"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="investment_mortgate_outstanding"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="investment_mortgate_repayment"
      />
      <h5>Secured Loan with</h5>
      <TextInput
        setValue={setValue}
        title="With"
        id="secured_loan_with_first"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="secured_loan_opened_date_first"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="secured_loan_outstanding_first"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="secured_loan_repayment_first"
      />
      <h5>Secured Loan with</h5>
      <TextInput
        setValue={setValue}
        title="With"
        id="secured_loan_with_second"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="secured_loan_opened_date_second"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="secured_loan_outstanding_second"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="secured_loan_repayment_second"
      />
      <h5>Credit Card</h5>
      <TextInput setValue={setValue} title="With" id="credit_card_with_first" />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_limit_first"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="credit_card_opened_date_first"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_outstanding_first"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="credit_card_repayment_first"
      />
      <h5>Credit Card</h5>
      <TextInput
        setValue={setValue}
        title="With"
        id="credit_card_with_second"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_limit_second"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="credit_card_opened_date_second"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_outstanding_second"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="credit_card_repayment_second"
      />
      <h5>Credit Card</h5>
      <TextInput setValue={setValue} title="With" id="credit_card_with_third" />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_limit_third"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="credit_card_opened_date_third"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_outstanding_third"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="credit_card_repayment_third"
      />
      <h5>Credit Card</h5>
      <TextInput setValue={setValue} title="With" id="credit_card_with_forth" />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_limit_forth"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="credit_card_opened_date_forth"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="credit_card_outstanding_forth"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="credit_card_repayment_forth"
      />
      <h5>Other - Specify</h5>
      <TextInput
        setValue={setValue}
        title="With"
        id="liabilities_other_specify_with"
      />
      <DatePicker
        title="Date Account Opened"
        setValue={setValue}
        id="liabilities_other_specify_opened_date"
      />
      <PriceInput
        setValue={setValue}
        title="Balance Outstanding"
        id="liabilities_other_specify_outstanding"
      />
      <PriceInput
        setValue={setValue}
        title="Monthly Repayment"
        id="liabilities_other_specify_repayment"
      />
      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
