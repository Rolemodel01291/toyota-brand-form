import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/Income/FirstStep';
import SecondStep from '../../components/Income/SecondStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function LoanCommercial() {
  const brand = useSelector((store) => store.brand.brand);
  const [step, setStep] = React.useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const before = () => {
    setStep(step - 1);
  };
  const next = () => {
    setStep(step + 1);
  };
  return (
    <StyledContentContainer color={theme(brand).background_color} theme={brand}>
      <SideNav />
      <StyledFormContainer>
        {step === 0 && <FirstStep next={next} before={before} theme={brand} />}
        {step === 1 && <SecondStep next={next} before={before} theme={brand} />}
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default LoanCommercial;
