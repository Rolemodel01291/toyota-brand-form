import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import FirstStep from '../../components/BeginApplication/FristStep';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function VerifyEmail() {
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
    localStorage.setItem('@begin_application', 'true');
    history.push('/background_hardship');
  };

  return (
    <StyledContentContainer color={theme(brand).background_color} theme={brand}>
      <SideNav />
      <StyledFormContainer theme={brand}>
        <FirstStep before={before} next={next} />
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default VerifyEmail;
