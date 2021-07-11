import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionTypes from '../../../../state/ducks/user/types';
import ButtonGroup from '../../ButtonGroup';
import FileUpload from '../../FormElements/FileUpload';
import PriceInput from '../../FormElements/PriceInput';
import TextInput from '../../FormElements/TextInput';
import { some } from 'lodash/fp';

function SecondStep(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userData = useSelector((store) => store.user);
  const secondUserName = useSelector(
    (store) => store.user.begin.secondUserName
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({ ...userData.incomeSecond });

  const setValue = async (key, value, validate) => {
    dispatch({
      type: actionTypes.SET_INCOME_SECOND_DATA,
      payload: {
        ...validate,
        [key]: value,
      },
    });
  };

  useEffect(() => {
    setValues({ ...userData.incomeSecond });
  }, [userData.incomeSecond]);

  const before = () => {
    props.before();
    dispatch({ type: actionTypes.SET_INCOME_SECOND_DATA, payload: values });
  };

  const next = () => {
    dispatch({ type: actionTypes.SET_INCOME_SECOND_DATA, payload: values });
    if (isAllCurrencyValidationStatus() && isAFileUploaded()) {
      localStorage.setItem('@income_expenses', 'true');
      if (userData.background_hardship.isRelatedCovid === 'true') {
        if (values.after_tax_income !== '') {
          history.push('/review_submit');
        }
      } else {
        // history.push('/expenses')
      }
    }
  };

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

  return (
    <>
      {userData.loan.isLoanCommercial === 'true' && (
        <h1>
          Additional Director/Guarantor: {secondUserName}'s total monthly income
          after taxes, from all sources before your situation changed
        </h1>
      )}
      {userData.loan.isLoanCommercial === 'false' && (
        <h1>
          Additional Borrower: {secondUserName}'s total monthly income after
          taxes, from all sources before your situation changed
        </h1>
      )}

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
        Please provide details of all sources of current and ongoing monthly
        income. If it is foreseen that this income will change in the next three
        months, please provide the amount after the change.
      </h5>

      {/* <h5>BORROWER/DIRECTOR/GUARANTOR 2</h5> */}

      {!isAllCurrencyValidationStatus() && (
        <h6>Please fill out details of at least one income source</h6>
      )}

      <PriceInput
        setValue={setValue}
        title="After tax salary per month"
        id="after_tax_salary"
        helperText="Include JobKeeper payments"
        value={values.after_tax_salary}
        type="currency"
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
        type="currency"
        helperText="Include JobSeeker payments"
        value={values.newstart_allowance}
        willValidate={!isAllCurrencyValidationStatus()}
        validate={{
          family_allowance_validate: values.family_allowance_validate,
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

      <br />

      {isAllCurrencyValidationStatus() && (
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
            id="payslip_file"
            title="Upload most recent payslip or letter from employer (eg termination letter)"
            setValue={setValue}
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
            id="bank_statement"
            multiple={true}
            title="Upload most recent Bank Statement"
            setValue={setValue}
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

      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default SecondStep;
