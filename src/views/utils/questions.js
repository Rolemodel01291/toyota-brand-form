// 8
export const borrowerOne = [
  { title: 'After tax salary per month', id: 'after_tax_salary_per_month' },
  { title: 'Pension', id: 'pension' },
  { title: 'Family allowance', id: 'family_allowance' },
  { title: 'Newstart allowance', id: 'newstart_allowance' },
  { title: 'Partner’s income (if applicable)', id: 'parter_income' },
  { title: 'Child support', id: 'child_support' },
  { title: 'Other government benefits', id: 'other_government_benefits' },
  {
    title: 'Other income e.g. rental income Specify type',
    id: 'other_income_rental_income_specify_type',
  },
];

//21
export const expenses = [
  { title: 'Food & Groceries', id: 'food_groceries' },
  {
    title: 'Home/Utilities/Whitegoods/Repairs',
    id: 'home_utilities_whitegoods_repairs',
  },
  {
    title: 'Public Schooling/Higher Education',
    id: 'public_schooling_higher_education',
  },
  {
    title: 'Personal/Health Care & Pet Care',
    id: 'personal_health_care_pet_care',
  },
  { title: 'Clothing/Footwear-Dependents', id: 'clothing_footwear_dependents' },
  { title: 'Communication & Connectivity', id: 'communication_connectivity' },
  { title: 'Insurance-House & Contents', id: 'insurance_house_contents' },
  {
    title: 'Homewares, Appliances & Furnishings',
    id: 'homewares_appliances_furnishings',
  },
  { title: 'Clothing/Footwear-Adult', id: 'clothing_footware_adult' },
  {
    title: 'Lifestyle/Recreation/Alcohol/Sports',
    id: 'lifestyle_recreation_alcohol_sports',
  },
  {
    title: 'Subscription/Membership/Expert Fees',
    id: 'subscription_member_export_fee',
  },
  { title: 'Vehicles', id: 'vehicles' },
  { title: 'Transport', id: 'transport' },
  { title: 'Insurance-Motor Vehicle', id: 'insurance_motor' },
  {
    title: 'Insurance-Health/Personal & Other',
    id: 'insurance_health_personal',
  },
  { title: 'Child/Spousal Maintenance', id: 'child_spousal_maintenance' },
  { title: 'Private Schooling & Tuition', id: 'private_schooling_tuition' },
  { title: 'Gambling & Tobacco', id: 'gambling_tobaco' },
  {
    title: 'Primary Home-Land Tax & Body Corp',
    id: 'primary_home_land_tax_body_corp',
  },
  {
    title: 'Investment/Second Property Expenses',
    id: 'investment_second_property_expenses',
  },
  { title: 'Other', id: 'expenses_other' },
];

//9
export const assets = [
  { title: 'Residnetial property - Specify address' },
  { title: 'Investment property -  Specify address' },
  { title: 'Vehicle 1 - Specify make, model & year' },
  { title: 'Vehicle 2 - Specify make, model & year' },
  { title: 'Superannuation' },
  { title: 'Savings' },
  { title: 'Household funiture' },
  { title: 'Shares' },
  { title: 'Other - Specify' },
];

//12
export const liabilities = [
  { title: 'Rent/Board' },
  { title: 'Residential Mortgage' },
  { title: 'Investment Mortgage' },
  { title: 'Secured Loan with' },
  { title: 'Secured Loan with' },
  { title: 'Personal/Unsecured Loan with' },
  { title: 'Personal/Unsecured Loan with' },
  { title: 'Credit Card with' },
  { title: 'Credit Card with' },
  { title: 'Credit Card with' },
  { title: 'Credit Card with' },
  { title: 'Other - Specify' },
];
export const backgroundHardship = [
  { title: 'Briefly Describe your circumstances' },
  {
    title:
      'If your situation is as a result of an accident, are you dligible for compensation?',
  },
  { title: 'Approximately what date did these financial Difficulties start?' },
  // {title: "What date do you expect to be able to resume your full contractual repayments?"},
  { title: 'What are you doing/able to do to address your situation?' },
  {
    title:
      'If you are searching for work. When you find suitable employment what do you expect your gross (before tax) monthly wage/salary to be?',
  },
  {
    title:
      'Do you have Finance Protection Insurance, Payment Protection Insurance or Consumer Credit Insurance for your loan contract(s)?',
  },
];
export const backgroundHardshipCont = [
  {
    title: 'Briefly Describe your circumstances',
    content:
      'Please provide evidence of your hardship such as a Separation Certificate or medical certificate or similar',
  },
];
export const proposalAssistance = [
  { title: 'Postpone my repayments for a period of:' },
  { title: 'Reduce my repayments for a period of:' },
  {
    title:
      'Continue with my normal payments and request assistance with my missed payments',
  },
  { title: 'Extend the loan term to reduce ongoing payments' },
  { title: 'Other' },
];

export const backgroundHardshipCovid = [
  { title: 'Select the option that best describes you circumstances' },
  { title: 'Approximately what date did these financial Difficulties start?' },
  {
    title:
      'What date do you expect to be able to resume your full contractual repayments?',
  },
  {
    title:
      'Do you have Finance Protection Insurance, Payment Protection Insurance or Consumer Credit Insurance for your loan contract(s)?',
  },
];

export const backgroundHardshipContCovid = [
  { title: 'I have personally been medically diagnosed with COVID-19' },
  {
    title: 'A dependent or person close to me has been diagnosed with COVID-19',
  },
  { title: 'My employment or Income has ceased due to COVID-19' },
  { title: 'My employment or Income has reduced due to COVID-19' },
  { title: 'Other' },
];

export const backgroundHardshipContCovidLoan = [
  { title: 'I have personally been medically diagnosed with COVID-19' },
  {
    title: 'A dependent or person close to me has been diagnosed with COVID-19',
  },
  { title: 'My employment or Income has ceased due to COVID-19' },
  { title: 'Other' },
];

export const userData = {
  nav: {
    authentication: false,
    begin_aaplication: false,
    reason_for_applying: false,
    is_loan_commercial: false,
    income: false,
    expensese: false,
    assets: false,
    liabilities: false,
    background_to_hardship: false,
    proposal_for_assistance: false,
    review_submit: false,
  },
  email: '',
  contract_number: '',
  name: '',
  phone_number: '',
  dob: '',
  registration_number: '',
  hardship_issue: '',
  company_name: '',
  abn: '',
  registered_company: '',
  anzsic: '',
  marital_status: '',
  number_dependents: '',
  current_employer_name: '',
  current_employer_abn: '',
  current_employer_anzsic: '',
};

export const questions_begin = {
  isContractNumber: {
    title: 'Do you know your contract number?',
  },
  contractNumber: { title: 'Contract Number:' },
  registrationNumber: { title: 'Registration Number:' },
  isGotAll: {
    title: 'All your contract / registration number(s):',
  },
  contractNumbers: { title: 'Other Contract Number(s):' },
  registrationNumbers: { title: 'Other Registration Number(s):' },
  userName: {
    title: 'Name (Given Name & Surname):',
  },
  address: {
    title: 'Your Address:',
  },
  phoneNumber: { title: 'Phone Number:' },
  DOB: { title: 'Date of birth:' },
  isSecondBorrower: {
    title: 'Does your loan involve a second borrower/director/guarantor?',
  },
  secondUserName: { title: 'Their name (Given Name & Surname):' },
  secondAddress: { title: 'Their Address:' },
  secondEmail: { title: 'Email address:' },
  secondPhoneNumber: { title: 'Their Phone number:' },
  secondDOB: { title: 'Date of birth:' },
  isLoanCommercial: { title: 'Is your loan a commercial loan?' },
  ABN: { title: 'ABN:' },
  company_name: { title: 'Company or Business Name:' },
  isCompanyRegistered: {
    title: 'Is the company or business still registered and trading?',
  },
  division: { title: 'Which industry are you in?' },
  sub_division: { title: 'Which industry sub division are you in?' },
  isRelatedCovid: { title: 'Is your application related to COVID-19?' },
  applying_hardship_info: {
    title:
      'Please provide information around why you are applying for hardship:',
    have_personally_medically_diagnosed_covid_19:
      'I have personally been medically diagnosed with COVID-19',
    have_dependent_medically_diagnosed_covid_19:
      'A dependent or person close to me has been medically diagnosed with COVID-19',
    employement_income_has_cased_codiv_19:
      'My employment/income has ceased due to COVID-19 (including due to carer responsibilities)',
    employement_income_has_reduced_codiv_19:
      'My employment/income has reduced due to COVID-19 (including due to carer responsibilities)',
  },
  medical_certification_file: { title: 'Medical Certificate' },
  payslip_file: { title: 'Payslip' },
  termination_letter_file: { title: 'Termination Letter' },
  bank_Statements_file: { title: 'Bank Statements' },
  letter_from_account: { title: 'Letter from account' },
  letter_from_employer: { title: 'Letter from employer' },
  when_difficulties_date: {
    title: 'Approximately what date did these difficulties start?',
  },
  when_resume_contractual_repayment: {
    title:
      'What date do you expect to be able to resume your full contractual repayments?',
  },
  isPayment_Protection_Insurance: {
    title:
      'Please indicate what reasonable assistance we could provided to you that would help you through this difficult time and allow you to meet your future monthly repayments to us.',
  },
  postpone_repayments: { title: 'Postpone repayments' },
  howlong_postpone: {
    title: 'How long would you like to postpone your repayments?',
  },
  reduce_repayments: { title: 'Reduce repayments' },
  howlong_reduce: {
    title: 'How long would you like to reduce your repayments?',
  },
  when_logged_calm: { title: 'When was the claim lodged?' },
  continue_normal_repayments: {
    title: 'Continue with normal repayments but assist with missed payments',
  },
  howmuch_able_to_pay: { title: 'How much are you able to pay per month?' },
  background_hardship_other: { title: 'Other' },
  background_hardship_others: {
    title: 'Please tell us what assistance you would like',
  },
  why_apply_hardship: { title: 'Why are you applying for hardship?' },
  why_select_option: {
    unemployment: 'Unemployment',
    natural_disaster: 'Natural Disaster',
    illness_or_injury: 'Illness or injury',
    over_commitment: 'Over Commitment',
    reduction_of_income: 'Reduction of income',
    illness_or_injury_of_family_member: 'Illness or injury of a family member',
  },
};

export const questions_income = {
  employment_type: { title: 'What is your employment type?' },
  employed: { title: 'Employed' },
  self_employed: { title: 'Self-Employed' },
  not_employed: { title: 'Not Employed' },
  employment_status: { title: 'What is your employment status?' },
  permanent_full_time: { title: 'Permanent Full-time' },
  permanent_part_time: { title: 'Permanent Part-time' },
  casual: { title: 'Casual' },
  seasonal: { title: 'Seasonal' },
  student: { title: 'Student' },
  unemployed: { title: 'Unemployed' },
  retired: { title: 'Retired' },
  recent_primary_employer_name: {
    title: `What is your current or most recent primary employer's name?`,
  },
  employer_abn: {
    title: `What is your current or most recent primary employer's ABN?`,
  },
  division: {
    title:
      'What is the industry division that best describes the main business activity of your current or most recent primary employer',
  },
  sub_division: {
    title:
      'What is the industry subdivision that best describes the main business activity your current or most recent primary employer',
  },
  after_tax_income: {
    title: 'Total monthly income (after tax):',
  },
  after_tax_salary: {
    title: 'After tax salary per month (including JobKeeper payments):',
  },
  pension: { title: 'Pension:' },
  family_allowance: { title: 'Family allowance:' },
  newstart_allowance: {
    title: 'Newstart allowance (including JobSeeker payments):',
  },
  partners_income: { title: `Partner's income:` },
  child_support: { title: 'Child Support:' },
  other_government_benefits: { title: 'Other government benefits:' },
  other_incom_specify_type_first_txt: { title: 'Income Source:' },
  other_incom_specify_type_first_price: { title: 'Amount:' },
  other_incom_specify_type_second_txt: { title: 'Income Source:' },
  other_incom_specify_type_second_price: { title: 'Amount:' },
  payslip: { title: 'Payslip' },
  bank_statement: { title: 'Bank statements' },
  itr: { title: 'ITR' },
  noa: { title: 'NOA' },
  bas: { title: 'BAS' },
  centrelink: { title: 'Centrelink' },
  other_incom: { title: 'Other income statement' },
  address: { title: '' },
};

export const questions_secondIncome = {
  after_tax_income: { title: 'Total monthly income (after tax):' },
  after_tax_salary: {
    title: 'After tax salary per month (including JobKeeper payments:',
  },
  pension: { title: 'Pension:' },
  family_allowance: { title: 'Family allowance:' },
  newstart_allowance: {
    title: 'Newstart allowance (including JobSeeker payments):',
  },
  partners_income: { title: `Partner's income:` },
  child_support: { title: 'Child Support:' },
  other_government_benefits: { title: 'Other government benefits:' },
  other_incom_specify_type_first_txt: { title: 'Income Source:' },
  other_incom_specify_type_first_price: { title: 'Amount:' },
  other_incom_specify_type_second_txt: { title: 'Income Source:' },
  other_incom_specify_type_second_price: { title: 'Amount:' },
  payslip: { title: 'Payslip' },
  bank_statement: { title: 'Bank statements' },
  itr: { title: 'ITR' },
  noa: { title: 'NOA' },
  bas: { title: 'BAS' },
  centrelink: { title: 'Centrelink' },
  other_incom: { title: 'Other income statement' },
  address: { title: '' },
};
