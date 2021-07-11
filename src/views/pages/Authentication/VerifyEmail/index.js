import React from 'react';
import { useSelector } from 'react-redux';
import theme from '../../../../utilities/theme';
import EmailInput from '../../../components/EmailInput';
import {
  StyledFirstContentContainer,
  StyledFormContainer,
} from '../../../styled/Containers';

function VerifyEmail(props) {
  const brand = useSelector((store) => store.brand.brand);
  localStorage.setItem('covid', 'none');
  return (
    <StyledFirstContentContainer color={theme(brand).background_color} theme={brand}>
      <StyledFormContainer theme={brand}>
        <EmailInput />
      </StyledFormContainer>
    </StyledFirstContentContainer>

  );
}

export default VerifyEmail;
