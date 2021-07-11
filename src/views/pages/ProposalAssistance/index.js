import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/ProposalAssistance/FirstStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function ProposalAssistance() {
  const brand = useSelector((store) => store.brand.brand);
  const history = useHistory();
  const [step, setStep] = React.useState(0);

  const before = () => {
    if (step === 0) {
    } else {
      setStep(step - 1);
    }
  };
  const next = () => {
    // setStep(step+1)
    localStorage.setItem('@proposal_assistance', 'true');
  };
  return (
    <StyledContentContainer color={theme(brand).background_color}>
      <SideNav />
      <StyledFormContainer>
        {step === 0 && <FirstStep before={before} next={next} />}
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default ProposalAssistance;
