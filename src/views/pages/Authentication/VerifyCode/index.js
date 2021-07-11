import React from 'react';
import { useSelector } from 'react-redux';
import theme from '../../../../utilities/theme';
import CodeInput from '../../../components/CodeInput';
import {
  StyledFirstContentContainer,
  StyledFormContainer,
} from '../../../styled/Containers';

function VerifyCode() {
  const brand = useSelector((store) => store.brand.brand);
  return (
    <StyledFirstContentContainer color={theme(brand).background_color} theme={brand}>
      <StyledFormContainer theme={brand}>
        <CodeInput />
      </StyledFormContainer>
    </StyledFirstContentContainer>
  );
}

export default VerifyCode;
