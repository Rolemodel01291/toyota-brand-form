import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/BackgroundHardship/FirstStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function VerifyEmail() {
  const brand = useSelector((store) => store.brand.brand);
  const history = useHistory();
  const [step, setStep] = React.useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const before = () => {
    if (step === 0) {
    } else {
      setStep(step - 1);
    }
  };
  const next = () => {
    setStep(step + 1);
  };

  return (
    <StyledContentContainer color={theme(brand).background_color} theme={brand}>
      <SideNav />
      <StyledFormContainer>
        {step === 0 && <FirstStep before={before} next={next} theme={brand} />}
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default VerifyEmail;
