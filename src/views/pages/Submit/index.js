import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import SideNav from '../../components/SideNav';
import {
  StyledContentContainer,
  StyledFormContainer,
} from '../../styled/Containers';

function Submit() {
  const data = useSelector((store) => store.brand);
  const brandInfo = useSelector((store) => store.brandInfo.brandInfo);
  const history = useHistory();
  return (
    <StyledContentContainer color={theme(data.brand).background_color}>
      <SideNav submitted={true} />
      <StyledFormContainer>
        <h4>Thank you for submitting your application for hardship.</h4>

        <h5
          style={{
            fontSize: '24px',
          }}
        >
          Important information
        </h5>
        <h4>
        • {brandInfo.name} will assess your application for hardship, and may
          agree to change your loan contract.
        </h4>
        <h4>
          • It may take up to 21 days for {brandInfo.name} to respond to your
          hardship request. {brandInfo.name} may contact you to request further
          information if necessary.
        </h4>
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default Submit;
