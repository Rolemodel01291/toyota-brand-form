import Divider from '@material-ui/core/Divider';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { convertDate } from '../../../utilities/helpers';
import theme from '../../../utilities/theme';
import ButtonGroup from '../../components/ButtonGroup';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';
import {
  questions_begin,
  questions_income,
  questions_secondIncome,
} from '../../utils/questions';
import { StyledDiv } from './style';
import { Forms } from '../../../api';

const fileNameAnswer = (f, index) => (
  <h4 className="answer" key={`answer-${index}`}>
    {f.filename}
  </h4>
);

const uploadedFileAnswers = (fileData) => {
  if (!fileData || fileData.length === 0) {
    return <h4 className="answer">NOT UPLOADED</h4>;
  }

  return Array.isArray(fileData)
    ? fileData.map(fileNameAnswer)
    : [fileNameAnswer(fileData)];
};

function ReviewSubmit() {
  localStorage.setItem('@review_submit', 'false');
  const brand = useSelector((store) => store.brand.brand);
  const brandInfo = useSelector((store) => store.brandInfo.brandInfo);
  const userData = useSelector((store) => store.user);
  const history = useHistory();

  const {
    config: { hardshipEmail, complaintsPhone, privacyPolicyUrl },
    name: hardshipName,
  } = brandInfo;

  const before = () => {
    history.goBack();
  };
  const submit = () => {
    localStorage.setItem('@review_submit', 'true');
    Forms.submit(userData.id).then(() => history.push('/submit'));
  };

  return (
    <StyledContentContainer color={theme(brand).background_color} theme={brand}>
      <SideNav />
      <StyledFormContainer theme={brand}>
        <h4>
          Please take a moment to review the information that you have provided
          to us.
        </h4>

        <h4 className="red_title">About you, your loan and your situation</h4>
        <Divider />
        {userData.begin.isContractNumber === 'true' && (
          <StyledDiv>
            <h4 className="question">{questions_begin.contractNumber.title}</h4>
            <h4 className="answer">{userData.begin.contractNumber}</h4>
          </StyledDiv>
        )}
        {userData.begin.isContractNumber === 'false' && (
          <StyledDiv>
            <h4 className="question">
              {questions_begin.registrationNumber.title}
            </h4>
            <h4 className="answer">{userData.begin.registrationNumber}</h4>
          </StyledDiv>
        )}
        {userData.begin.isGotAll === 'true' &&
          userData.begin.contractNumbers !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_begin.contractNumbers.title}
              </h4>
              <h4 className="answer">{userData.begin.contractNumbers}</h4>
            </StyledDiv>
          )}
        {userData.begin.isGotAll === 'true' &&
          userData.begin.registrationNumbers !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_begin.registrationNumbers.title}
              </h4>
              <h4 className="answer">{userData.begin.registrationNumbers}</h4>
            </StyledDiv>
          )}
        {userData.begin.userName !== '' && (
          <StyledDiv>
            <h4 className="question">{questions_begin.userName.title}</h4>
            <h4 className="answer">{userData.begin.userName}</h4>
          </StyledDiv>
        )}
        {userData.begin.address !== '' && (
          <StyledDiv>
            <h4 className="question">{questions_begin.address.title}</h4>
            <h4 className="answer">{userData.begin.address}</h4>
          </StyledDiv>
        )}
        {userData.begin.phoneNumber !== '' && (
          <StyledDiv>
            <h4 className="question">{questions_begin.phoneNumber.title}</h4>
            <h4 className="answer">{userData.begin.phoneNumber}</h4>
          </StyledDiv>
        )}
        {userData.begin.DOB !== null && (
          <StyledDiv>
            <h4 className="question">{questions_begin.DOB.title}</h4>
            <h4 className="answer">{convertDate(userData.begin.DOB)}</h4>
          </StyledDiv>
        )}

        {userData.begin.isSecondBorrower === 'true' && (
          <>
            <h4 className="question">
              {questions_begin.isSecondBorrower.title}
            </h4>
            <StyledDiv>
              <h4 className="question">
                {questions_begin.secondUserName.title}
              </h4>
              <h4 className="answer">{userData.begin.secondUserName}</h4>
            </StyledDiv>
            <StyledDiv>
              <h4 className="question">
                {questions_begin.secondAddress.title}
              </h4>
              <h4 className="answer">{userData.begin.secondAddress}</h4>
            </StyledDiv>
            <StyledDiv>
              <h4 className="question">
                {questions_begin.secondPhoneNumber.title}
              </h4>
              <h4 className="answer">{userData.begin.secondPhoneNumber}</h4>
            </StyledDiv>
            <StyledDiv>
              <h4 className="question">{questions_begin.secondDOB.title}</h4>
              <h4 className="answer">
                {convertDate(userData.begin.secondDOB)}
              </h4>
            </StyledDiv>
          </>
        )}
        <h4 className="question">{questions_begin.isLoanCommercial.title}</h4>
        {userData.loan.isLoanCommercial === 'true' && userData.loan.ABN !== '' && (
          <StyledDiv>
            <h4 className="question">{questions_begin.ABN.title}</h4>
            <h4 className="answer">{userData.loan.ABN}</h4>
          </StyledDiv>
        )}
        {userData.loan.isLoanCommercial === 'true' && (
          <StyledDiv>
            <h4 className="question">{questions_begin.company_name.title}</h4>
            <h4 className="answer">{userData.loan.company_name}</h4>
          </StyledDiv>
        )}
        {userData.loan.isCompanyRegistered === 'true' && (
          <>
            <>
              <h4 className="question">{questions_begin.division.title}</h4>
              <h4 className="answer">{userData.loan.division.title}</h4>
            </>
            <>
              <h4 className="question">{questions_begin.sub_division.title}</h4>
              <h4 className="answer">{userData.loan.sub_division.title}</h4>
            </>
          </>
        )}

        <Divider />
        <h4 className="red_title">Background to Hardship</h4>
        {userData.background_hardship.isRelatedCovid === 'true' && (
          <>
            <h4 className="question">
              {questions_begin.why_apply_hardship.title}
            </h4>
            <h4 className="answer">
              {
                questions_begin.why_select_option[
                  userData.background_hardship.why_apply_hardship
                ]
              }
            </h4>
          </>
        )}
        {userData.background_hardship.isRelatedCovid === 'true' && (
          <>
            <h4 className="question">
              {questions_begin.applying_hardship_info.title}
            </h4>
            <h4 className="answer">
              {
                questions_begin.applying_hardship_info[
                  userData.background_hardship.applying_hardship_info
                ]
              }
            </h4>
          </>
        )}
        {userData.background_hardship.when_difficulties_date !== null && (
          <>
            <h4 className="question">
              {questions_begin.when_difficulties_date.title}
            </h4>
            <h4 className="answer">
              {convertDate(userData.background_hardship.when_difficulties_date)}
            </h4>
          </>
        )}
        {userData.background_hardship.when_resume_contractual_repayment !==
          null && (
          <>
            <h4 className="question">
              {questions_begin.when_resume_contractual_repayment.title}
            </h4>
            <h4 className="answer">
              {convertDate(
                userData.background_hardship.when_resume_contractual_repayment
              )}
            </h4>
          </>
        )}
        {userData.background_hardship.when_logged_calm !== null && (
          <StyledDiv>
            <h4 className="question">
              {questions_begin.when_logged_calm.title}
            </h4>
            <h4 className="answer">
              {convertDate(userData.background_hardship.when_logged_calm)}
            </h4>
          </StyledDiv>
        )}

        <h4 className="question">
          Please indicate what reasonable assistance we could provided to you
          that would help you through this difficult time and allow you to meet
          your future monthly repayments to us
        </h4>
        {userData.background_hardship.indicate_reasonable_assistance ===
          'postpone_repayments' &&
          userData.background_hardship.howlong_postpone !== '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_begin[
                    userData.background_hardship.indicate_reasonable_assistance
                  ].title
                }
              </h4>
              <h4 className="answer">
                {userData.background_hardship.howlong_postpone} Months
              </h4>
            </StyledDiv>
          )}
        {userData.background_hardship.indicate_reasonable_assistance ===
          'reduce_repayments' &&
          userData.background_hardship.howlong_reduce !== '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_begin[
                    userData.background_hardship.indicate_reasonable_assistance
                  ].title
                }
              </h4>
              <h4 className="answer">
                {userData.background_hardship.howlong_reduce} Months
              </h4>
            </StyledDiv>
          )}
        {userData.background_hardship.indicate_reasonable_assistance ===
          'continue_normal_repayments' &&
          userData.background_hardship.howmuch_able_to_pay !== '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_begin[
                    userData.background_hardship.indicate_reasonable_assistance
                  ].title
                }
              </h4>
              <h4 className="answer">
                {userData.background_hardship.howmuch_able_to_pay} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.background_hardship.indicate_reasonable_assistance ===
          'background_hardship_other' &&
          userData.background_hardship.background_hardship_others !== '' && (
            <>
              <h4 className="question">
                {
                  questions_begin[
                    userData.background_hardship.indicate_reasonable_assistance
                  ].title
                }
              </h4>
              <h4 className="answer">
                {userData.background_hardship.background_hardship_others}
              </h4>
            </>
          )}

        {userData.background_hardship.applying_hardship_info ===
          'have_personally_medically_diagnosed_covid_19' && (
          <>
            <h4 className="question">Medical Certificate:</h4>
            {uploadedFileAnswers(
              userData.background_hardship.medical_certification_file
            )}
          </>
        )}

        {(userData.background_hardship.applying_hardship_info ===
          'employement_income_has_cased_codiv_19' ||
          userData.background_hardship.applying_hardship_info ===
            'employement_income_has_reduced_codiv_19') && (
          <>
            <>
              <h4 className="question">Payslip:</h4>
              {uploadedFileAnswers(userData.background_hardship.payslip_file)}
            </>
            <>
              <h4 className="question">Termination Letter:</h4>
              {uploadedFileAnswers(
                userData.background_hardship.termination_letter_file
              )}
            </>
            <>
              <h4 className="question">Letter from employer:</h4>
              {uploadedFileAnswers(
                userData.background_hardship.letter_from_employer
              )}
            </>
            <>
              <h4 className="question">Bank Statements:</h4>
              {uploadedFileAnswers(
                userData.background_hardship.bank_Statements_file
              )}
            </>
            {userData.loan.isLoanCommercial === 'true' && (
              <>
                <h4 className="question">Letter from account:</h4>
                {uploadedFileAnswers(
                  userData.background_hardship.letter_from_account
                )}
              </>
            )}
          </>
        )}
        <Divider />

        <h4 className="red_title">Income</h4>
        {userData.income.employment_type !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.employment_type.title}
            </h4>
            <h4 className="answer">
              {questions_income[userData.income.employment_type].title}
            </h4>
          </StyledDiv>
        )}
        {userData.income.employment_status !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.employment_status.title}
            </h4>
            <h4 className="answer">
              {questions_income[userData.income.employment_status].title}
            </h4>
          </StyledDiv>
        )}
        {userData.income.employment_type === 'employed' &&
          userData.income.recent_primary_employer_name !== '' && (
            <>
              <h4 className="question">
                {questions_income.recent_primary_employer_name.title}
              </h4>
              <h4 className="answer">
                {userData.income.recent_primary_employer_name}
              </h4>
            </>
          )}
        {userData.income.employment_type === 'employed' &&
          userData.income.employer_abn !== '' && (
            <>
              <h4 className="question">
                {questions_income.employer_abn.title}
              </h4>
              <h4 className="answer">{userData.income.employer_abn}</h4>
            </>
          )}

        {userData.income.employment_type === 'employed' &&
          !_.isNil(userData.income.division) && (
            <>
              <>
                <h4 className="question">{questions_income.division.title}</h4>
                <h4 className="answer">{userData.income.division.title}</h4>
              </>
              {!_.isNil(userData.income.sub_division) && (
                <>
                  <h4 className="question">
                    {questions_income.sub_division.title}
                  </h4>
                  <h4 className="answer">
                    {userData.income.sub_division.title}
                  </h4>
                </>
              )}
            </>
          )}
        {userData.income.after_tax_income !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.after_tax_income.title}
            </h4>
            <h4 className="answer">{userData.income.after_tax_income} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.after_tax_salary !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.after_tax_salary.title}
            </h4>
            <h4 className="answer">{userData.income.after_tax_salary} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.pension !== '' && (
          <StyledDiv>
            <h4 className="question">{questions_income.pension.title}</h4>
            <h4 className="answer">{userData.income.pension} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.family_allowance !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.family_allowance.title}
            </h4>
            <h4 className="answer">{userData.income.family_allowance} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.newstart_allowance !== 'true' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.newstart_allowance.title}
            </h4>
            <h4 className="answer">{userData.income.newstart_allowance} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.partners_income !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.partners_income.title}
            </h4>
            <h4 className="answer">{userData.income.partners_income} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.child_support !== '' && (
          <StyledDiv>
            <h4 className="question">{questions_income.child_support.title}</h4>
            <h4 className="answer">{userData.income.child_support} AUD</h4>
          </StyledDiv>
        )}
        {userData.income.child_support !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.other_government_benefits.title}
            </h4>
            <h4 className="answer">
              {userData.income.other_government_benefits} AUD
            </h4>
          </StyledDiv>
        )}
        {userData.income.other_incom_specify_type_first_txt !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.other_incom_specify_type_first_txt.title}
            </h4>
            <h4 className="answer">
              {userData.income.other_incom_specify_type_first_txt}
            </h4>
          </StyledDiv>
        )}
        {userData.income.other_incom_specify_type_first_price !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.other_incom_specify_type_first_price.title}
            </h4>
            <h4 className="answer">
              {userData.income.other_incom_specify_type_first_price} AUD
            </h4>
          </StyledDiv>
        )}
        {userData.income.other_incom_specify_type_second_txt !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.other_incom_specify_type_second_txt.title}
            </h4>
            <h4 className="answer">
              {userData.income.other_incom_specify_type_second_txt}
            </h4>
          </StyledDiv>
        )}
        {userData.income.other_incom_specify_type_second_price !== '' && (
          <StyledDiv>
            <h4 className="question">
              {questions_income.other_incom_specify_type_second_price.title}
            </h4>
            <h4 className="answer">
              {userData.income.other_incom_specify_type_second_price} AUD
            </h4>
          </StyledDiv>
        )}
        {(userData.income.after_tax_income ||
          userData.income.partners_income) && (
          <>
            <h4 className="question">Payslip:</h4>
            {uploadedFileAnswers(userData.income.payslip_file)}
          </>
        )}
        {(userData.income.after_tax_income ||
          userData.income.pension ||
          userData.income.family_allowance ||
          userData.income.after_tax_salary ||
          userData.income.partners_income ||
          userData.income.child_support ||
          userData.income.other_government_benefits ||
          userData.income.other_incom_specify_type_first_price ||
          userData.income.other_incom_specify_type_second_price) && (
          <>
            <h4 className="question">Bank statements:</h4>
            {uploadedFileAnswers(userData.income.bank_statement)}
          </>
        )}
        {(userData.income.after_tax_income ||
          userData.income.partners_income) && (
          <>
            <h4 className="question">Income Tax Assessment:</h4>
            {uploadedFileAnswers(userData.income.income_tax_assessment)}
          </>
        )}
        {(userData.income.after_tax_income ||
          userData.income.partners_income) && (
          <>
            <h4 className="question">Notice of Assessment:</h4>
            {uploadedFileAnswers(userData.income.notice_assessment)}
          </>
        )}
        {(userData.income.after_tax_income ||
          userData.income.partners_income) && (
          <>
            <h4 className="question">Business Activity Assessment:</h4>
            {uploadedFileAnswers(userData.income.business_activity_assessment)}
          </>
        )}
        {(userData.income.family_allowance ||
          userData.income.after_tax_salary ||
          userData.income.partners_income ||
          userData.income.child_support ||
          userData.income.other_government_benefits) && (
          <>
            <h4 className="question">Centrelink Statement:</h4>
            {uploadedFileAnswers(userData.income.centrelink_statement)}
          </>
        )}
        {(userData.income.other_incom_specify_type_first_price ||
          userData.income.other_incom_specify_type_second_price) && (
          <>
            <h4 className="question">Other income Statements:</h4>
            {uploadedFileAnswers(userData.income.other_income_statement)}
          </>
        )}
        <Divider />
        {userData.begin.isSecondBorrower === 'true' &&
          userData.loan.isLoanCommercial === 'true' && (
            <h4 className="red_title">Additional Director/Guarantor</h4>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.loan.isLoanCommercial === 'false' && (
            <h4 className="red_title">Additional Borrower</h4>
          )}

        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.after_tax_income !== '' && (
            <StyledDiv>
              <h4 className="question">
                {userData.begin.secondUserName +
                  "'s " +
                  questions_secondIncome.after_tax_income.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.after_tax_income} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.after_tax_salary !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.after_tax_salary.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.after_tax_salary} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.pension !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.pension.title}
              </h4>
              <h4 className="answer">{userData.incomeSecond.pension} AUD</h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.family_allowance !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.family_allowance.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.family_allowance} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.newstart_allowance !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.newstart_allowance.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.newstart_allowance} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.partners_income !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.partners_income.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.partners_income} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.child_support !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.child_support.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.child_support} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.other_government_benefits !== '' && (
            <StyledDiv>
              <h4 className="question">
                {questions_secondIncome.other_government_benefits.title}
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.other_government_benefits} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.other_incom_specify_type_first_txt !== '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_secondIncome.other_incom_specify_type_first_txt
                    .title
                }
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.other_incom_specify_type_first_txt}
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.other_incom_specify_type_first_price !== '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_secondIncome.other_incom_specify_type_first_price
                    .title
                }
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.other_incom_specify_type_first_price} AUD
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.other_incom_specify_type_second_txt !== '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_secondIncome.other_incom_specify_type_second_txt
                    .title
                }
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.other_incom_specify_type_second_txt}
              </h4>
            </StyledDiv>
          )}
        {userData.begin.isSecondBorrower === 'true' &&
          userData.incomeSecond.other_incom_specify_type_second_price !==
            '' && (
            <StyledDiv>
              <h4 className="question">
                {
                  questions_secondIncome.other_incom_specify_type_second_price
                    .title
                }
              </h4>
              <h4 className="answer">
                {userData.incomeSecond.other_incom_specify_type_second_price}AUD
              </h4>
            </StyledDiv>
          )}

        {(userData.incomeSecond.after_tax_income ||
          userData.incomeSecond.partners_income) && (
          <>
            <h4 className="question">Payslip:</h4>
            {uploadedFileAnswers(userData.incomeSecond.payslip_file)}
          </>
        )}
        {(userData.incomeSecond.after_tax_income ||
          userData.incomeSecond.pension ||
          userData.incomeSecond.family_allowance ||
          userData.incomeSecond.after_tax_salary ||
          userData.incomeSecond.partners_income ||
          userData.incomeSecond.child_support ||
          userData.incomeSecond.other_government_benefits ||
          userData.incomeSecond.other_incom_specify_type_first_price ||
          userData.incomeSecond.other_incom_specify_type_second_price) && (
          <>
            <h4 className="question">Bank statements:</h4>
            {uploadedFileAnswers(userData.incomeSecond.bank_statement)}
          </>
        )}
        {(userData.incomeSecond.after_tax_income ||
          userData.incomeSecond.partners_income) && (
          <>
            <h4 className="question">Income Tax Assessment:</h4>
            {uploadedFileAnswers(userData.incomeSecond.income_tax_assessment)}
          </>
        )}
        {(userData.incomeSecond.after_tax_income ||
          userData.incomeSecond.partners_income) && (
          <>
            <h4 className="question">Notice of Assessment:</h4>
            {uploadedFileAnswers(userData.incomeSecond.notice_assessment)}
          </>
        )}
        {(userData.incomeSecond.after_tax_income ||
          userData.incomeSecond.partners_income) && (
          <>
            <h4 className="question">Business Activity Assessment:</h4>
            {uploadedFileAnswers(
              userData.incomeSecond.business_activity_assessment
            )}
          </>
        )}
        {(userData.incomeSecond.family_allowance ||
          userData.incomeSecond.after_tax_salary ||
          userData.incomeSecond.partners_income ||
          userData.incomeSecond.child_support ||
          userData.incomeSecond.other_government_benefits) && (
          <>
            <h4 className="question">Centrelink Statement:</h4>
            {uploadedFileAnswers(userData.incomeSecond.centrelink_statement)}
          </>
        )}
        {(userData.incomeSecond.other_incom_specify_type_first_price ||
          userData.incomeSecond.other_incom_specify_type_second_price) && (
          <>
            <h4 className="question">Other income Statements:</h4>
            {uploadedFileAnswers(userData.incomeSecond.other_income_statement)}
          </>
        )}

        <div className="question" style={{ textAlign: 'justify' }}>
          <p>
            Please take a moment to review the information that you have
            provided to us. The more accurate and detailed the information that
            you provide, the easier and quicker we will be able to assess your
            application.{' '}
          </p>
          <p>
            Once you submit the application you will not be able to make any
            further changes. If your circumstances change then you will need to
            email us at{' '}
            <a
              href={`mailto:${hardshipEmail}`}
              style={{ fontSize: 'inherit', paddingBottom: 'initial' }}
            >
              {hardshipEmail}
            </a>{' '}
            or call us on{' '}
            <a
              href={`tel:${complaintsPhone}`}
              style={{ fontSize: 'inherit', paddingBottom: 'initial' }}
            >
              {complaintsPhone}
            </a>{' '}
            between 8:30am and 7:00pm (AEST) Monday to Friday.
          </p>
          <h5>Privacy consent</h5>
          <p>
            By clicking submit, you warrant that to the best of your knowledge,
            the information you have provided is true and correct and you have
            the authority to act on behalf of all parties to the contract. You
            consent to its collection so that {hardshipName} can:
          </p>
          <ul style={{ fontWeight: 600 }}>
            <li>Assess your application for hardship; and</li>
            <li>
              Contact you in relation to your application for hardship if
              necessary.
            </li>
          </ul>
          <p>
            Your personal information is collected and used in accordance with
            our Privacy Policy, which is available at{' '}
            <a
              href={privacyPolicyUrl}
              style={{ fontSize: 'inherit', paddingBottom: 'initial' }}
            >
              {privacyPolicyUrl}
            </a>
            .
          </p>
        </div>

        <ButtonGroup last="true" before={before} submit={submit} />
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default ReviewSubmit;
