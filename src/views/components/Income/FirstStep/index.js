import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import { some } from 'lodash/fp';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionTypes from '../../../../state/ducks/user/types';
import CodeInput from '../../../components/FormElements/CodeInput';
import divisions from '../../../utils/divisions';
import AutoComplete from '../../AutoComplete';
import ButtonGroup from '../../ButtonGroup';
import FileUpload from '../../FormElements/FileUpload';
import PriceInput from '../../FormElements/PriceInput';
import SelectBox from '../../FormElements/SelectBox';
import TextInput from '../../FormElements/TextInput';
import { getSecondBorrowerData } from '../../../utils';

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

const employmentMenuData = [
  { value: 'Employed', id: 'employed' },
  { value: 'Self-Employed', id: 'self_employed' },
  { value: 'Not Employed', id: 'not_employed' },
];

const employmentStatusFirstMenuData = [
  { value: 'Permanent Full-time', id: 'permanent_full_time' },
  { value: 'Permanent Part-time', id: 'permanent_part_time' },
  { value: 'Casual', id: 'casual' },
  { value: 'Seasonal', id: 'seasonal' },
];

const employmentStatusSecondMenuData = [
  { value: 'Student', id: 'student' },
  { value: 'Unemployed', id: 'unemployed' },
  { value: 'Retired', id: 'retired' },
];

const menuData = [
  { value: 'ANZSIC Division Titles', id: 'ANZSIC_division_title' },
];

function FirstStep(props) {
  localStorage.setItem('@income_expenses', 'false');
  const classes = useStyles();
  const userData = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const hasSecondBorrower = getSecondBorrowerData(userData);
  const [divisionMenu, setDivisionMenu] = React.useState([]);
  const [subDivisionMenu, setSubDivisionMenu] = React.useState([]);
  const [values, setValues] = React.useState({ ...userData.income });

  const setValue = async (key, value, validate) => {
    // base data to dispatch
    const data = {
      ...validate,
      [key]: value,
    };

    // when 'employment_type' changes
    if (key === 'employment_type') {
      if (value === 'self_employed') {
        // 'self_employed' has no 'employment_status', always pass
        data.employment_status_validate = true;
      } else {
        // otherwise reset 'employment_status' value and validation
        data.employment_status = '';
        data.employment_status_validate = false;
      }
    }

    // when 'employment_type' is 'not_employed'
    if (key === 'employment_type' && value === 'not_employed') {
      // division validations not applicable to 'not_employed'
      // hard coded to pass division validations
      data.division = data.sub_division = { id:"na", title:"--" };
      data.division_validate = data.sub_division_validate = true;

      // reset employer name and validation,
      // employer name not applicable, always true
      data.recent_primary_employer_name = '';
      data.recent_primary_employer_name_validate = true;
    }

    // when 'employment_type' is 'self_employed' or 'employed'
    if ((key === 'employment_type' && value === 'self_employed') ||
      (key === 'employment_type' && value === 'employed')) {
      // updated division validations for 'self_employed' and 'employed'
      // reset divisions, and validations
      data.division = data.sub_division = null;
      data.division_validate = data.sub_division_validate = false;

      // update employer name validation based on actual field value
      data.recent_primary_employer_name_validate = !!values.recent_primary_employer_name.length;
    }

    // when 'division' is changed
    if (key === 'division') {
      // reset sub division value and validation
      data.sub_division = null;
      data.sub_division_validate = false;
    }

    dispatch({
      type: actionTypes.SET_INCOME_DATA,
      payload: data,
    });
  };

  const before = () => {
    dispatch({ type: actionTypes.SET_INCOME_DATA, payload: values });
    history.push('/background_hardship');
  };

  const next = () => {
    dispatch({ type: actionTypes.SET_INCOME_DATA, payload: values });

    if (
      isEmploymentValidationStatus() &&
      isEmployerNameValidationStatus() &&
      isDivisionValidationStatus() &&
      isAllCurrencyValidationStatus() &&
      isAFileUploaded()
    ) {
      if (hasSecondBorrower !== 'true') {
        localStorage.setItem('@income_expenses', 'true');
        history.push('/review_submit');
      } else {
        if (values.after_tax_income !== '') {
          props.next();
        }
      }
    }
  };

  // TODO: extract duplication methods for first/second steps
  const isAFileUploaded = () =>
    some((value) => {
      return (
        (value && value.filename) ||
        (Array.isArray(value) && value[0] && value[0].filename)
      );
    })([
      values.payslip_file,
      values.bank_statement,
      values.income_tax_assessment,
      values.notice_assessment,
      values.business_activity_assessment,
      values.centrelink_statement,
      values.other_income_statement,
    ]);

  // TODO: extract duplication methods for first/second steps
  const isAllCurrencyValidationStatus = () =>
    some((value) => value)([
      values.after_tax_salary,
      values.pension,
      values.family_allowance,
      values.newstart_allowance,
      values.partners_income,
      values.child_support,
      values.other_government_benefits,
      values.other_incom_specify_type_first_price,
      values.other_incom_specify_type_second_price,
    ]);

  const isEmploymentValidationStatus = () =>
    _.isEmpty(
      _.omitBy(
        {
          employment_status_validate: values.employment_status_validate,
          employment_type_validate: values.employment_type_validate,
        },
        _.identity,
      ),
    );

  const isDivisionValidationStatus = () => {
    const isNotEmployed = values.employment_type === 'not_employed';
    if (isNotEmployed) {
      // divisions are not applicable to 'not_employed', always true
      return true;
    } else {
      return values.division_validate && values.sub_division_validate;
    }
  };

  const isEmployerNameValidationStatus = () => {
    const isNotEmployed = values.employment_type === 'not_employed';
    return isNotEmployed ? true : values.recent_primary_employer_name_validate;
  };

  useEffect(() => {
    setValues({ ...userData.income });
  }, [userData.income]);

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

  return (
    <>
      <h1>What is your employment status?</h1>
      <SelectBox
        items={employmentMenuData}
        title="Employment type"
        setValue={setValue}
        id="employment_type"
        value={values.employment_type}
        validate={{ employment_type_validate: values.employment_type_validate }}
      />
      {values.employment_type === 'employed' && (
        <SelectBox
          items={employmentStatusFirstMenuData}
          title="Employment Status"
          setValue={setValue}
          id="employment_status"
          value={values.employment_status}
          validate={{
            employment_status_validate: values.employment_status_validate,
          }}
        />
      )}
      {values.employment_type === 'not_employed' && (
        <SelectBox
          items={employmentStatusSecondMenuData}
          title="Employment Status"
          setValue={setValue}
          id="employment_status"
          value={values.employment_status}
          validate={{
            employment_status_validate: values.employment_status_validate,
          }}
        />
      )}
      {values.employment_type === 'employed' && (
        <>
          <h5>Please enter your most recent Employer's Name</h5>
          <TextInput
            title="Enter Business Name*"
            id="recent_primary_employer_name"
            setValue={setValue}
            value={values.recent_primary_employer_name}
            validate={{
              recent_primary_employer_name_validate:
              values.recent_primary_employer_name_validate,
            }}
          />
          <h5>If you know it, please enter your most recent Employer's ABN</h5>
          <CodeInput
            width="9%"
            fields={11}
            id="employer_abn"
            setValue={setValue}
            value={values.employer_abn}
          />
          <h5>
            Select the industry division that best describes your most recent
            Employer's main business activity:
          </h5>
          <AutoComplete
            data={divisionMenu}
            id="division"
            title="Select division"
            setValue={setValue}
            value={values.division}
            validate={{
              division_validate: values.division_validate,
            }}
          />
          {subDivisionMenu.length > 0 && (
            <>
              <h5>
                Select the industry subdivision that best describes your most
                recent Employer's main business activity:
              </h5>
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
      {values.employment_type === 'self_employed' && (
        <>
          <h5>Please enter your business name</h5>
          <TextInput
            title="Enter Business Name*"
            id="recent_primary_employer_name"
            setValue={setValue}
            value={values.recent_primary_employer_name}
            validate={{
              recent_primary_employer_name_validate:
              values.recent_primary_employer_name_validate,
            }}
          />
          <h5>If you know it, please enter your ABN</h5>
          <CodeInput
            width="9%"
            fields={11}
            id="employer_abn"
            setValue={setValue}
            value={values.employer_abn}
          />
          <h5>
            Select the industry division that best describes your main business
            activity:
          </h5>
          <AutoComplete
            data={divisionMenu}
            id="division"
            title="Select division"
            setValue={setValue}
            value={values.division}
            validate={{ division_validate: values.division_validate }}
          />
          {subDivisionMenu.length > 0 && (
            <>
              <h5>
                Select the industry subdivision that best describes your main
                business activity:
              </h5>
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
      <h5>
        Please provide your monthly income after taxes, from all sources before
        your situation changed.
      </h5>

      <PriceInput
        setValue={setValue}
        title="AUD"
        type="currency"
        id="after_tax_income"
        value={values.after_tax_income}
        willValidate={true}
        validate={{
          after_tax_income_validate: values.after_tax_income_validate,
        }}
      />

      <h5>
        Please provide details of all sources of your current and ongoing
        monthly income. If you foresee that this income will change in the next
        three months, please provide the amount after the change.
      </h5>

      {/* <h5>BORROWER/DIRECTOR/GUARANTOR 1</h5> */}

      {!isAllCurrencyValidationStatus() && (
        <h6>Please fill out details of at least one income source</h6>
      )}

      <PriceInput
        setValue={setValue}
        title="After tax salary per month"
        id="after_tax_salary"
        helperText="Include JobKeeper payments"
        type="currency"
        value={values.after_tax_salary}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          after_tax_salary_validate: values.after_tax_salary_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Pension"
        id="pension"
        type="currency"
        value={values.pension}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{ pension_validate: values.pension_validate }}
      />

      <PriceInput
        setValue={setValue}
        title="Family allowance"
        id="family_allowance"
        type="currency"
        value={values.family_allowance}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          family_allowance_validate: values.family_allowance_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Newstart allowance"
        id="newstart_allowance"
        helperText="Include JobSeeker payments"
        type="currency"
        value={values.newstart_allowance}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          newstart_allowance_validate: values.newstart_allowance_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Partner's income"
        id="partners_income"
        type="currency"
        value={values.partners_income}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          partners_income_validate: values.partners_income_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Child Support"
        id="child_support"
        type="currency"
        value={values.child_support}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          child_support_validate: values.child_support_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Other government benefits"
        id="other_government_benefits"
        type="currency"
        value={values.other_government_benefits}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          other_government_benefits_validate:
          values.other_government_benefits_validate,
        }}
      />

      <h5 style={{ marginTop: '30px' }}>Other Income (e.g. rental income)</h5>

      <TextInput
        setValue={setValue}
        title="Enter other income source"
        id="other_incom_specify_type_first_txt"
        value={values.other_incom_specify_type_first_txt}
        willValidate={values.other_incom_specify_type_first_txt_validate}
        validate={{
          other_incom_specify_type_first_txt_validate:
            values.other_incom_specify_type_first_txt_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Amount"
        id="other_incom_specify_type_first_price"
        type="currency"
        value={values.other_incom_specify_type_first_price}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          other_incom_specify_type_first_price_validate:
            values.other_incom_specify_type_first_price_validate,
        }}
      />

      <TextInput
        setValue={setValue}
        title="Enter other income source"
        id="other_incom_specify_type_second_txt"
        value={values.other_incom_specify_type_second_txt}
        willValidate={values.other_incom_specify_type_second_txt_validate}
        validate={{
          other_incom_specify_type_second_txt_validate:
            values.other_incom_specify_type_second_txt_validate,
        }}
      />

      <PriceInput
        setValue={setValue}
        title="Amount"
        id="other_incom_specify_type_second_price"
        type="currency"
        value={values.other_incom_specify_type_second_price}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          other_incom_specify_type_second_price_validate:
            values.other_incom_specify_type_second_price_validate,
        }}
      />

      <br/>
      {(values.after_tax_income ||
        values.after_tax_salary ||
        values.child_support ||
        values.family_allowance ||
        values.other_government_benefits ||
        values.other_incom_specify_type_first_price ||
        values.other_incom_specify_type_second_price ||
        values.partners_income ||
        values.pension) && (
        <>
          <h5>
            We need evidence to verify the income you have told us. By providing
            this documentation we can review your application faster. Please
            provide documents in the following categories that will best support
            your application.
          </h5>
          {!isAFileUploaded() && (
            <h6>Please provide at least one of the following documents</h6>
          )}
        </>
      )}
      {(values.after_tax_income || values.partners_income) && (
        <>
          <FileUpload
            title="Upload most recent payslip or letter from employer (eg termination letter)"
            setValue={setValue}
            id="payslip_file"
            value={values.payslip_file}
            validate={{ payslip_file_validate: values.payslip_file_validate }}
          />
        </>
      )}
      {(values.after_tax_income ||
        values.pension ||
        values.family_allowance ||
        values.after_tax_salary ||
        values.partners_income ||
        values.child_support ||
        values.other_government_benefits ||
        values.other_incom_specify_type_first_price ||
        values.other_incom_specify_type_second_price) && (
        <>
          <FileUpload
            title="Upload most recent Bank Statement"
            setValue={setValue}
            id="bank_statement"
            value={values.bank_statement}
            validate={{
              bank_statement_validate: values.bank_statement_validate,
            }}
          />
        </>
      )}
      {(values.after_tax_income || values.partners_income) && (
        <>
          <FileUpload
            title="Upload Income Tax Assessment"
            setValue={setValue}
            id="income_tax_assessment"
            value={values.income_tax_assessment}
            validate={{
              income_tax_assessment_validate:
              values.income_tax_assessment_validate,
            }}
          />
        </>
      )}
      {(values.after_tax_income || values.partners_income) && (
        <>
          <FileUpload
            title="Upload Notice of Assessment"
            setValue={setValue}
            id="notice_assessment"
            value={values.notice_assessment}
            validate={{
              notice_assessment_validate: values.notice_assessment_validate,
            }}
          />
        </>
      )}
      {(values.after_tax_income || values.partners_income) && (
        <>
          <FileUpload
            title="Upload Business Activity Assessment"
            setValue={setValue}
            id="business_activity_assessment"
            value={values.business_activity_assessment}
            validate={{
              business_activity_assessment_validate:
              values.business_activity_assessment_validate,
            }}
          />
        </>
      )}
      {(values.family_allowance ||
        values.after_tax_salary ||
        values.partners_income ||
        values.child_support ||
        values.other_government_benefits) && (
        <>
          <FileUpload
            title="Upload Centrelink Statement"
            setValue={setValue}
            id="centrelink_statement"
            value={values.centrelink_statement}
            validate={{
              centrelink_statement_validate:
              values.centrelink_statement_validate,
            }}
          />
        </>
      )}
      {(values.other_incom_specify_type_first_price ||
        values.other_incom_specify_type_second_price) && (
        <>
          <FileUpload
            title="Upload Other income Statements"
            setValue={setValue}
            id="other_income_statement"
            value={values.other_income_statement}
            validate={{
              other_income_statement_validate:
              values.other_income_statement_validate,
            }}
          />
        </>
      )}

      <ButtonGroup before={before} next={next}/>
    </>
  );
}

export default FirstStep;
