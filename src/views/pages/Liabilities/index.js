import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/Liabilities/FirstStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function Liabilities() {
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
    <StyledContentContainer color={theme(brand).background_color}>
      <SideNav />
      <StyledFormContainer>
        {step === 0 && <FirstStep next={next} before={before} />}
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default Liabilities;
