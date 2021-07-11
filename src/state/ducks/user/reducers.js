import decode from 'jwt-decode';
import * as types from './types';
import createReducer from '../../utils/createReducer';

import {
  getUserType,
  AUTHORISATION_TOKEN_STORAGE_KEY,
} from '../../../utilities';

const initialState = {
  hydrating: true,
  email: '',
  formSection: '/',
  isContractNumber: '',
  isRegisterNumber: null,
  contractNumber: null,
  registerNumber: null,
  covid: null,
  begin: {
    userName: '',
    phoneNumber: '',
    address: '',
    isContractNumber: '',
    isGotAll: '',
    contractNumber: '',
    contractNumbers: '',
    registrationNumber: '',
    registrationNumbers: '',
    DOB: null,
    secondUserName: '',
    secondPhoneNumber: '',
    secondAddress: '',
    secondEmail: '',
    secondDOB: null,
    isSecondBorrower: '',
    userName_validate: false,
    phoneNumber_validate: false,
    address_validate: false,
    isContractNumber_validate: false,
    isGotAll_validate: false,
    contractNumber_validate: true,
    registrationNumber_validate: true,
    DOB_validate: false,
    secondUserName_validate: true,
    secondPhoneNumber_validate: true,
    contractNumbers_validate: true,
    registerNumbers_validate: true,
    secondAddress_validate: true,
    secondEmail_validate: true,
    secondDOB_validate: true,
    isSecondBorrower_validate: false,
  },
  loan: {
    isLoanCommercial: '',
    ABN: '',
    company_name: '',
    isCompanyRegistered: '',
    division: '',
    sub_division: '',
    isLoanCommercial_validate: false,
    ABN_validate: true,
    company_name_validate: true,
    isCompanyRegistered_validate: true,
    division_validate: true,
    sub_division_validate: true,
  },
  background_hardship: {
    covid: null,
    isRelatedCovid: 'none',
    why_apply_hardship: '',
    applying_hardship_info: '',
    briefly_describe: '',
    eligible_for_complensation: '',
    how_much: '',
    when_anticipate_compensation: null,
    when_difficulties_date: null,
    when_resume_contractual_repayment: null,
    what_address_situation: '',
    what_expect_monthly_salary: '',
    isPayment_Protection_Insurance: '',
    logged_clam: '',
    when_logged_calm: null,
    indicate_reasonable_assistance: '',
    howlong_postpone: '',
    howlong_reduce: '',
    howmuch_able_to_pay: '',
    background_hardship_others: '',
    medical_certification_file: [],
    payslip_file: [],
    termination_letter_file: [],
    bank_Statements_file: [],
    letter_from_account: [],
    letter_from_employer: [],
    covid_validate: true,
    isRelatedCovid_validate: false,
    why_apply_hardship_validate: true,
    applying_hardship_info_validate: true,
    briefly_describe_validate: true,
    eligible_for_complensation_validate: true,
    how_much_validate: true,
    when_anticipate_compensation_validate: true,
    when_difficulties_date_validate: true,
    when_resume_contractual_repayment_validate: true,
    what_address_situation_validate: true,
    what_expect_monthly_salary_validate: true,
    isPayment_Protection_Insurance_validate: true,
    logged_clam_validate: true,
    when_logged_calm_validate: true,
    indicate_reasonable_assistance_validate: true,
    howlong_postpone_validate: true,
    howlong_reduce_validate: true,
    howmuch_able_to_pay_validate: true,
    background_hardship_others_validate: true,
    medical_certification_file_validate: true,
    payslip_file_validate: true,
    termination_letter_file_validate: true,
    bank_Statements_file_validate: true,
    letter_from_account_validate: true,
    letter_from_employer_validate: true,
  },
  income: {
    employment_type: '',
    employment_status: '',
    recent_primary_employer_name: '',
    employer_abn: '',
    division: null,
    sub_division: null,
    after_tax_income: '',
    after_tax_salary: '',
    pension: '',
    family_allowance: '',
    newstart_allowance: '',
    partners_income: '',
    child_support: '',
    other_government_benefits: '',
    other_incom_specify_type_first_txt: '',
    other_incom_specify_type_first_price: '',
    other_incom_specify_type_second_txt: '',
    other_incom_specify_type_second_price: '',
    employment_type_validate: false,
    employment_status_validate: false,
    recent_primary_employer_name_validate: false,
    employer_abn_validate: true,
    division_validate: false,
    sub_division_validate: false,
    after_tax_income_validate: false,
    after_tax_salary_validate: true,
    pension_validate: true,
    family_allowance_validate: true,
    newstart_allowance_validate: true,
    partners_income_validate: true,
    child_support_validate: true,
    other_government_benefits_validate: true,
    other_incom_specify_type_first_txt_validate: true,
    other_incom_specify_type_first_price_validate: true,
    other_incom_specify_type_second_txt_validate: true,
    other_incom_specify_type_second_price_validate: true,
    medical_certification_file: [],
    payslip_file: [],
    bank_statement: [],
    income_tax_assessment: [],
    notice_assessment: [],
    business_activity_assessment: [],
    centrelink_statement: [],
    other_income_statement: [],
    medical_certification_file_validate: true,
    payslip_file_validate: true,
    bank_statement_validate: true,
    income_tax_assessment_validate: true,
    notice_assessment_validate: true,
    business_activity_assessment_validate: true,
    centrelink_statement_validate: true,
    other_income_statement_validate: true,
  },
  incomeSecond: {
    after_tax_income: '',
    after_tax_salary: '',
    pension: '',
    family_allowance: '',
    newstart_allowance: '',
    partners_income: '',
    child_support: '',
    other_government_benefits: '',
    other_incom_specify_type_first_txt: '',
    other_incom_specify_type_first_price: '',
    other_incom_specify_type_second_txt: '',
    other_incom_specify_type_second_price: '',
    after_tax_income_validate: false,
    after_tax_salary_validate: true,
    pension_validate: true,
    family_allowance_validate: true,
    newstart_allowance_validate: true,
    partners_income_validate: true,
    child_support_validate: true,
    other_government_benefits_validate: true,
    other_incom_specify_type_first_txt_validate: true,
    other_incom_specify_type_first_price_validate: true,
    other_incom_specify_type_second_txt_validate: true,
    other_incom_specify_type_second_price_validate: true,
    medical_certification_file: [],
    payslip_file: [],
    bank_statement: [],
    income_tax_assessment: [],
    notice_assessment: [],
    business_activity_assessment: [],
    centrelink_statement: [],
    other_income_statement: [],
    medical_certification_file_validate: true,
    payslip_file_validate: true,
    bank_statement_validate: true,
    income_tax_assessment_validate: true,
    notice_assessment_validate: true,
    business_activity_assessment_validate: true,
    centrelink_statement_validate: true,
    other_income_statement_validate: true,
  },
};

const signInReducer = createReducer(initialState)({
  [types.SIGN_IN]: (state, { formData }) => {
    const { email, userId, brand: providerId } = decode(formData.token);

    return {
      ...initialState,
      ...formData,
      email,
      userId,
      providerId,
    };
  },
  [types.SET_EMAIL]: (state, { payload }) => {
    localStorage.removeItem(AUTHORISATION_TOKEN_STORAGE_KEY);
    return {
      ...state,
      email: payload,
      token: undefined,
    };
  },
  [types.SET_FORM_SECTION]: (state, { formSection }) => {
    return {
      ...state,
      formSection,
    };
  },
  [types.IS_CONTRACT_NUMBER]: (state, { payload }) => {
    return {
      ...state,
      isContractNumber: payload,
    };
  },
  [types.IS_REGISTER_NUMBER]: (state, { payload }) => {
    return {
      ...state,
      isRegisterNumber: payload,
    };
  },
  [types.SET_CONTRACT_NUMBER]: (state, { payload }) => {
    return {
      ...state,
      contractNumber: payload,
    };
  },
  [types.SET_COVID]: (state, { payload }) => {
    return {
      ...state,
      background_hardship: {
        ...state.background_hardship,
        covid: payload,
      },
    };
  },
  [types.SET_BEGIN_DATA]: (state, { payload }) => {
    return {
      ...state,
      begin: {
        ...state.begin,
        ...payload,
      },
    };
  },
  [types.SET_BACKGROUND_HARDSHIP_DATA]: (state, { payload }) => {
    return {
      ...state,
      background_hardship: {
        ...state.background_hardship,
        ...payload,
      },
    };
  },
  [types.SET_INCOME_DATA]: (state, { payload }) => {
    return {
      ...state,
      income: {
        ...state.income,
        ...payload,
      },
    };
  },
  [types.SET_LOAN_DATA]: (state, { payload }) => {
    return {
      ...state,
      loan: {
        ...state.loan,
        ...payload,
      },
    };
  },
  [types.SET_INCOME_SECOND_DATA]: (state, { payload }) => {
    return {
      ...state,
      incomeSecond: {
        ...state.incomeSecond,
        ...payload,
      },
    };
  },
  [types.SUBMIT_FORM]: (state) => {
    return {
      ...state,
      submitted: true,
    };
  },
});

export default signInReducer;
