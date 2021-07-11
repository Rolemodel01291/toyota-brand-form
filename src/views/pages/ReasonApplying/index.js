import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/ReasonApplication/FirstStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function ReasonApplying() {
  const brand = useSelector((store) => store.brand.brand);
  const history = useHistory();
  const [step, setStep] = React.useState(0);

  const before = () => {
    if (step === 0) {
      history.goBack();
    } else {
      setStep(step - 1);
    }
  };
  const next = () => {
    setStep(step + 1);
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

export default ReasonApplying;
