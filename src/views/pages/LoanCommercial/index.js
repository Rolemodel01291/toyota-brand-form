import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/LoanCommercial/FirstStep';
import SecondStep from '../../components/LoanCommercial/SecondStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';
import { getCovidData } from '../../utils';

function LoanCommercial() {
  const brand = useSelector((store) => store.brand.brand);
  const userData = useSelector((store) => store.user);
  const history = useHistory();
  const [step, setStep] = React.useState(0);
  const covid = getCovidData(userData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const before = () => {
    if (step === 0) {
      history.goBack();
    } else {
      setStep(step - 1);
    }
  };
  const next = () => {
    if (step === 1) {
      if (covid === 'true') {
        history.push('/background_hardship');
      }
    } else {
      setStep(step + 1);
    }
  };
  return (
    <StyledContentContainer color={theme(brand).background_color}>
      <SideNav />
      <StyledFormContainer>
        {step === 0 && <FirstStep before={before} next={next} />}
        {step === 1 && <SecondStep before={before} next={next} />}
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default LoanCommercial;
