import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionTypes from '../../../../state/ducks/user/types';
import CovidContext from '../../../utils/context';
import ButtonGroup from '../../ButtonGroup';
import DatePicker from '../../FormElements/DatePicker';
import FileUpload from '../../FormElements/FileUpload';
import PriceInput from '../../FormElements/PriceInput';
import SelectBox from '../../FormElements/SelectBox';
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
const whyApplyHardShipMenus = [
  { value: 'Unemployment', id: 'unemployment' },
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
  localStorage.setItem('@background_hardship', 'false');
  const data = useSelector((store) => store.user);
  const brandInfo = useSelector((store) => store.brandInfo.brandInfo);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { covidContext, toggleVisible } = React.useContext(CovidContext);
  const [covid, setCovid] = useState();
  const [values, setValues] = React.useState({ ...data.background_hardship });
  const hardshipEmail = brandInfo.config.hardshipEmail;

  useEffect(() => {
    // window.scrollTo(0, 0);
    setValues({ ...data.background_hardship });
  }, [data.background_hardship]);

  const handleRelatedCovidChange = (event) => {
    toggleVisible(event.target.value);
    // setCovid(event.target.value,dispatch({type:actionTypes.SET_COVID, payload:event.target.value}))
    // setValues({...values, isRelatedCovid:event.target.value});
    if (event.target.value === 'true') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          isRelatedCovid: event.target.value,
          isRelatedCovid_validate: true,
          why_apply_hardship_validate:
            values.why_apply_hardship === '' ? false : true,
          applying_hardship_info_validate:
            values.applying_hardship_info === '' ? false : true,
          when_difficulties_date_validate:
            values.when_difficulties_date === null ? false : true,
          when_resume_contractual_repayment_validate: true,
          isPayment_Protection_Insurance_validate:
            values.isPayment_Protection_Insurance === '' ? false : true,
          indicate_reasonable_assistance_validate:
            values.indicate_reasonable_assistance === '' ? false : true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          isRelatedCovid: event.target.value,
          isRelatedCovid_validate: true,
          why_apply_hardship_validate: true,
          applying_hardship_info_validate: true,
          when_difficulties_date_validate: true,
          when_resume_contractual_repayment_validate: true,
          isPayment_Protection_Insurance_validate: true,
          indicate_reasonable_assistance_validate: true,
        },
      });
    }

    localStorage.setItem('covid', event.target.value);
  };

  const handleEligibleRadioChange = (event) => {
    setValues({ ...values, eligible_for_complensation: event.target.value });
  };

  const handleClamRadioChange = (event) => {
    setValues({ ...values, logged_clam: event.target.value });
    if (event.target.value === 'true') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          logged_clam: event.target.value,
          logged_clam_validate: true,
          when_logged_calm_validate:
            values.when_logged_calm === null ? false : true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          logged_clam: event.target.value,
          logged_clam_validate: true,
          when_logged_calm_validate: true,
        },
      });
    }
  };

  const handleRegisterRadioChange = (event) => {
    // setValues({...values, applying_hardship_info:event.target.value});
    if (event.target.value === 'have_personally_medically_diagnosed_covid_19') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          applying_hardship_info: event.target.value,
          applying_hardship_info_validate: true,
          medical_certification_file_validate:
            values.medical_certification_file &&
            values.medical_certification_file.length > 0,
          payslip_file_validate: true,
          termination_letter_file_validate: true,
          letter_from_employer_validate: true,
          bank_Statements_file_validate: true,
        },
      });
    } else if (
      event.target.value === 'employement_income_has_cased_codiv_19' ||
      event.target.value === 'employement_income_has_reduced_codiv_19'
    ) {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          applying_hardship_info: event.target.value,
          applying_hardship_info_validate: true,
          medical_certification_file_validate: true,
          payslip_file_validate: true,
          termination_letter_file_validate: true,
          letter_from_employer_validate: true,
          bank_Statements_file_validate: true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          applying_hardship_info: event.target.value,
          applying_hardship_info_validate: true,
          medical_certification_file_validate: true,
          payslip_file_validate: true,
          termination_letter_file_validate: true,
          letter_from_employer_validate: true,
          bank_Statements_file_validate: true,
        },
      });
    }
  };

  const handlePaymentProtectionRadioChange = (event) => {
    // setValues({...values, isPayment_Protection_Insurance:event.target.value});
    if (event.target.value === 'true') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          isPayment_Protection_Insurance: event.target.value,
          isPayment_Protection_Insurance_validate: true,
          logged_clam_validate: values.logged_clam === '' ? false : true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          isPayment_Protection_Insurance: event.target.value,
          isPayment_Protection_Insurance_validate: true,
          logged_clam_validate: true,
        },
      });
    }
  };

  const handleIndicateReasonableChange = (event) => {
    // setValues({...values, indicate_reasonable_assistance:event.target.value});
    if (event.target.value === 'postpone_repayments') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          indicate_reasonable_assistance: event.target.value,
          indicate_reasonable_assistance_validate: true,
          howlong_postpone_validate:
            values.howlong_postpone === '' ? false : true,
          howlong_reduce_validate: true,
          howmuch_able_to_pay_validate: true,
          background_hardship_others_validate: true,
        },
      });
    } else if (event.target.value === 'reduce_repayments') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          indicate_reasonable_assistance: event.target.value,
          indicate_reasonable_assistance_validate: true,
          howlong_postpone_validate: true,
          howlong_reduce_validate: values.howlong_reduce === '' ? false : true,
          howmuch_able_to_pay_validate:
            values.howmuch_able_to_pay === '' ? false : true,
          background_hardship_others_validate: true,
        },
      });
    } else if (event.target.value === 'continue_normal_repayments') {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          indicate_reasonable_assistance: event.target.value,
          indicate_reasonable_assistance_validate: true,
          howlong_postpone_validate: true,
          howlong_reduce_validate: true,
          howmuch_able_to_pay_validate: true,
          background_hardship_others_validate: true,
        },
      });
    } else {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: {
          indicate_reasonable_assistance: event.target.value,
          indicate_reasonable_assistance_validate: true,
          howlong_postpone_validate: true,
          howlong_reduce_validate: true,
          howmuch_able_to_pay_validate: true,
          background_hardship_others_validate:
            values.background_hardship_others === '' ? false : true,
        },
      });
    }
  };

  const setValue = (key, value, validate) => {
    // setValues({...values, [key]:value});
    if (validate[Object.keys(validate)[0]]) {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: { [key]: value, [Object.keys(validate)[0]]: true },
      });
    } else {
      dispatch({
        type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
        payload: { [key]: value, [Object.keys(validate)[0]]: false },
      });
    }
  };

  const before = () => {
    history.push('/begin_application');
    dispatch({
      type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
      payload: values,
    });
  };

  const next = () => {
    dispatch({
      type: actionTypes.SET_BACKGROUND_HARDSHIP_DATA,
      payload: values,
    });
    localStorage.setItem('@background_hardship', 'true');
    if (covid !== 'none') {
      if (
        data.background_hardship.isRelatedCovid_validate &&
        data.background_hardship.why_apply_hardship_validate &&
        data.background_hardship.applying_hardship_info_validate &&
        data.background_hardship.briefly_describe_validate &&
        data.background_hardship.eligible_for_complensation_validate &&
        data.background_hardship.how_much_validate &&
        data.background_hardship.when_anticipate_compensation_validate &&
        data.background_hardship.when_difficulties_date_validate &&
        data.background_hardship.when_resume_contractual_repayment_validate &&
        data.background_hardship.what_address_situation_validate &&
        data.background_hardship.what_expect_monthly_salary_validate &&
        data.background_hardship.isPayment_Protection_Insurance_validate &&
        data.background_hardship.logged_clam_validate &&
        data.background_hardship.when_logged_calm_validate &&
        data.background_hardship.indicate_reasonable_assistance_validate &&
        data.background_hardship.howlong_postpone_validate &&
        data.background_hardship.howmuch_able_to_pay_validate &&
        data.background_hardship.background_hardship_others_validate &&
        data.background_hardship.medical_certification_file_validate &&
        data.background_hardship.payslip_file_validate &&
        data.background_hardship.termination_letter_file_validate &&
        data.background_hardship.bank_Statements_file_validate &&
        data.background_hardship.letter_from_account_validate &&
        data.background_hardship.letter_from_employer_validate
      ) {
        history.push('/income_expenses');
      }
    }
    // history.push('./review_submit')
  };
  return (
    <>
      <h4>
        Please provide information around why you are applying for hardship.
        Select the option that best describes your circumstances
      </h4>
      <>
        <h5>Is your application related to COVID-19?</h5>
        <FormControl
          component="fieldset"
          className={classes.formRegisterControl}
        >
          {!values.isRelatedCovid_validate && <h6>*Required</h6>}
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={values.isRelatedCovid}
            onChange={handleRelatedCovidChange}
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
      </>
      {values.isRelatedCovid === 'false' && (
        <h5>
          Please download the PDF form given below and send a copy to{' '}
          <a
            href={`mailto:${hardshipEmail}`}
            style={{ fontSize: '18px', color: '#222', fontWeight: 600 }}
          >
            {hardshipEmail}
          </a>{' '}
          with all the relevant supporting documents attached
        </h5>
      )}
      {values.isRelatedCovid !== 'false' && (
        <>
          <h5>Why are you applying for hardship?</h5>
          <SelectBox
            items={whyApplyHardShipMenus}
            value={values.why_apply_hardship}
            setValue={setValue}
            title="Select a reason"
            id="why_apply_hardship"
            validate={{
              why_apply_hardship_validate: values.why_apply_hardship_validate,
            }}
          />

          {values.isRelatedCovid === 'true' && (
            <>
              <h5>
                Please provide information around why you are applying for
                hardship. Select the option that best describes your
                circumstances:
              </h5>
              <FormControl
                component="fieldset"
                className={classes.formRegisterControl}
              >
                {!values.applying_hardship_info_validate && <h6>*Required</h6>}
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={values.applying_hardship_info}
                  onChange={handleRegisterRadioChange}
                >
                  <FormControlLabel
                    value="have_personally_medically_diagnosed_covid_19"
                    control={<Radio />}
                    label="I have personally been medically diagnosed with COVID-19"
                    className={classes.option}
                  />

                  <FormControlLabel
                    value="employement_income_has_cased_codiv_19"
                    control={<Radio />}
                    label="My employment/income has ceased due to COVID-19 (including due to carer responsibilities)"
                    className={classes.option}
                  />

                  <FormControlLabel
                    value="employement_income_has_reduced_codiv_19"
                    control={<Radio />}
                    label="My employment/income has reduced due to COVID-19 (including due to carer responsibilities)"
                    className={classes.option}
                  />
                  {values.applying_hardship_info ===
                    'have_personally_medically_diagnosed_covid_19' && (
                    <FileUpload
                      title="Upload Medical Certificate"
                      setValue={setValue}
                      id="medical_certification_file"
                      value={values.medical_certification_file}
                      validate={{
                        medical_certification_file_validate:
                          values.medical_certification_file_validate,
                      }}
                      required={true}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </>
          )}

          {values.isRelatedCovid === 'false' && (
            <>
              <h5>
                Please provide information around why you are applying for
                hardship. Briefly Describe your circumstances:
              </h5>
              <TextInput
                title="Briefly Describe your Circumstances"
                id="briefly_describe"
                setValue={setValue}
                validate={values.briefly_describe_validate}
              />
              <h5>
                If your situation is as a result of an accident, are you
                eligible for complensation?
              </h5>
              <FormControl
                component="fieldset"
                className={classes.formRegisterControl}
              >
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={values.eligible_for_complensation}
                  onChange={handleEligibleRadioChange}
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
                      <PriceInput
                        title="AUD"
                        setValue={setValue}
                        id="how_much"
                        value={values.how_much}
                        validate={values.how_much_validate}
                      />
                      <h5>when do you anticipate compensation will be paid?</h5>
                      <DatePicker
                        title="Date"
                        id="when_anticipate_compensation"
                        setValue={setValue}
                        value={values.when_anticipate_compensation}
                      />
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
            </>
          )}

          {values.isRelatedCovid !== 'none' && (
            <>
              <h5>Approximately what date did these difficulties start?</h5>
              <DatePicker
                title="Date"
                id="when_difficulties_date"
                setValue={setValue}
                value={values.when_difficulties_date}
                validate={{
                  when_difficulties_date_validate:
                    values.when_difficulties_date_validate,
                }}
              />
              <h5>
                What date do you expect to be able to resume your full
                contractual repayments?
              </h5>
              <DatePicker
                title="Date"
                id="when_resume_contractual_repayment"
                setValue={setValue}
                type="normal"
                value={values.when_resume_contractual_repayment}
                validate={{
                  when_resume_contractual_repayment_validate:
                    values.when_resume_contractual_repayment_validate,
                }}
              />
              {covid === 'false' && (
                <>
                  <h5>
                    What are you doing or able to do to address your situation?
                  </h5>
                  <TextInput
                    title="Please Write Here"
                    id="what_address_situation"
                    setValue={setValue}
                  />
                  <h5>
                    If you are searching for work, when you find suitable
                    employment, what do you expect your gross (before tax)
                    monthly wage/salary to be?
                  </h5>
                  <PriceInput
                    title="AUD"
                    id="what_expect_monthly_salary"
                    setValue={setValue}
                  />
                </>
              )}
            </>
          )}

          {values.isRelatedCovid !== 'none' && (
            <>
              <h5>
                Do you have Finance Protection Insurance, Payment Protection
                Insurance or Consumer Credit Insurance for your loan
                contract(s)?
              </h5>
              <FormControl
                component="fieldset"
                className={classes.formRegisterControl}
              >
                {!values.isPayment_Protection_Insurance_validate && (
                  <h6>*Required</h6>
                )}
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={values.isPayment_Protection_Insurance}
                  onChange={handlePaymentProtectionRadioChange}
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
                  {values.isPayment_Protection_Insurance === 'true' && (
                    <>
                      <h1>If yes, have you lodged a claim?</h1>
                      <FormControl
                        component="fieldset"
                        className={classes.formRegisterControl}
                      >
                        {!values.logged_clam_validate && <h6>*Required</h6>}
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
                          <FormControlLabel
                            value="false"
                            control={<Radio />}
                            label="No"
                            className={classes.option}
                          />
                          {values.logged_clam === 'true' && (
                            <>
                              <h1>when was the claim lodged?</h1>
                              <DatePicker
                                title="Select Date"
                                id="when_logged_calm"
                                setValue={setValue}
                                value={values.when_logged_calm}
                                validate={{
                                  when_logged_calm_validate:
                                    values.when_logged_calm_validate,
                                }}
                              />
                            </>
                          )}
                        </RadioGroup>
                      </FormControl>
                    </>
                  )}
                </RadioGroup>
              </FormControl>
            </>
          )}

          {values.isRelatedCovid !== 'none' && (
            <>
              <h5>
                Please indicate what reasonable assistance we could provide to
                you that would help you through this difficult time and allow
                you to meet your future monthly repayments to us.
              </h5>
              <FormControl
                component="fieldset"
                className={classes.formRegisterControl}
              >
                {!values.indicate_reasonable_assistance_validate && (
                  <h6>*Required</h6>
                )}
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={values.indicate_reasonable_assistance}
                  onChange={handleIndicateReasonableChange}
                >
                  <FormControlLabel
                    value="postpone_repayments"
                    control={<Radio />}
                    label="Postpone repayments"
                    className={classes.option}
                  />
                  {values.indicate_reasonable_assistance ===
                    'postpone_repayments' && (
                    <>
                      <h1>
                        How long would you like to postpone your repayments?
                      </h1>
                      <TextInput
                        title="Number of Months"
                        id="howlong_postpone"
                        setValue={setValue}
                        type="number"
                        value={values.howlong_postpone}
                        validate={{
                          howlong_postpone_validate:
                            values.howlong_postpone_validate,
                        }}
                      />
                    </>
                  )}
                  <FormControlLabel
                    value="reduce_repayments"
                    control={<Radio />}
                    label="Reduce repayments"
                    className={classes.option}
                  />
                  {values.indicate_reasonable_assistance ===
                    'reduce_repayments' && (
                    <>
                      <h1>
                        How long would you like to reduce your repayments?
                      </h1>
                      <TextInput
                        title="Number of Months"
                        id="howlong_reduce"
                        setValue={setValue}
                        type="number"
                        value={values.howlong_reduce}
                        validate={{
                          howlong_reduce_validate:
                            values.howlong_reduce_validate,
                        }}
                      />
                      <h1>How much are you able to pay per month?</h1>
                      <PriceInput
                        title="AUD"
                        id="howmuch_able_to_pay"
                        type="currency"
                        setValue={setValue}
                        value={values.howmuch_able_to_pay}
                        validate={{
                          howmuch_able_to_pay_validate:
                            values.howmuch_able_to_pay_validate,
                        }}
                      />
                    </>
                  )}
                  <FormControlLabel
                    value="continue_normal_repayments"
                    control={<Radio />}
                    label="Continue with normal repayments but assist with missed payments"
                    className={classes.option}
                  />
                  <FormControlLabel
                    value="background_hardship_other"
                    control={<Radio />}
                    label="Other"
                    className={classes.option}
                  />
                  {values.indicate_reasonable_assistance ===
                    'background_hardship_other' && (
                    <>
                      <h1>Please tell us what assistance you would like</h1>
                      <TextInput
                        title="Explain here"
                        id="background_hardship_others"
                        setValue={setValue}
                        value={values.background_hardship_others}
                        validate={{
                          background_hardship_others_validate:
                            values.background_hardship_others_validate,
                        }}
                      />
                    </>
                  )}
                </RadioGroup>
              </FormControl>
            </>
          )}
        </>
      )}

      <ButtonGroup
        before={before}
        next={next}
        download={values.isRelatedCovid === 'false' ? 'true' : 'false'}
      />
    </>
  );
}

export default FirstStep;
