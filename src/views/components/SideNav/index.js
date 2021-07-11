import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { StyledNavContainer } from './style';
import { StyledNavContent } from '../../styled/Containers';
import CovidContext from '../../utils/context';

function SideNav({ submitted }) {
  const [navMenus, setNavMenus] = React.useState({
    authentication: false,
    begin_application: false,
    background_hardship: false,
    income_expenses: false,
    review_submit: false,
    // to be confirmed
    reason_applying: false,
    loan_commercial: false,
    proposal_assistance: false,
    expenses: false,
    assets: false,
    liabilities: false,
  });
  const user = useContext(CovidContext);
  const brand = useSelector((store) => store.brand.brand);
  const isSubmitted = (label) =>
    submitted ? 'true' : localStorage.getItem(`@${label}`);

  useEffect(() => {
    const authentication = isSubmitted('authentication');
    const begin_application = isSubmitted('begin_application');
    const background_hardship = isSubmitted('background_hardship');
    const income_expenses = isSubmitted('income_expenses');
    const assets_liabilities = isSubmitted('assets_liabilities'); // To be confirmed
    const review_submit = isSubmitted('review_submit');

    setNavMenus({
      ...navMenus,
      authentication,
      begin_application,
      background_hardship,
      income_expenses,
      assets_liabilities, // To be confirmed
      review_submit,
    });
  }, [submitted]);

  return (
    <StyledNavContainer theme={brand}>
      <StyledNavContent theme={brand}>
        {navMenus.authentication === 'true' ? (
          <h2 className="active">Authentication</h2>
        ) : (
          <h2>Authentication</h2>
        )}
        {navMenus.begin_application === 'true' ? (
          <h2 className="active_long">
            About you, your loan and your situation
          </h2>
        ) : (
          <h2>About you, your loan and your situation</h2>
        )}
        {navMenus.background_hardship === 'true' ? (
          <h2 className="active">Background to Hardship</h2>
        ) : (
          <h2>Background to Hardship</h2>
        )}
        {navMenus.income_expenses === 'true' ? (
          <h2 className="active">Income</h2>
        ) : (
          <h2>Income</h2>
        )}
        {user.covid === 'true' &&
          (navMenus.review_submit === 'true' ? (
            <h2 className="active">Review & Submit</h2>
          ) : (
            <h2>Review & Submit</h2>
          ))}
      </StyledNavContent>
    </StyledNavContainer>
  );
}

export default SideNav;
