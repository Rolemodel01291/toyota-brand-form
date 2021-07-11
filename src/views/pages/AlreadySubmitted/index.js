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
        <h4>
          You have already submitted your online hardship application for{' '}
          {brandInfo.name}.
        </h4>

        <h4>
          If your circumstances have changed or if you wish to enquire about
          your application, please email us at {brandInfo.config.hardshipEmail}{' '}
          or call us on {brandInfo.config.complaintsPhone} between 8:30am and
          7:00pm (AEST) Monday to Friday.
        </h4>
      </StyledFormContainer>
    </StyledContentContainer>
  );
}

export default Submit;
