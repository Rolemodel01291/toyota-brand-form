import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import banner from '../../../assets/images/banner.png';
import theme from '../../../utilities/theme';
import { StyledFirstPageContainer } from '../../styled/Containers';
import {
  StartButton,
  StyledContainer,
  StyledContentContainer,
  StyledImageContainer,
  StyledRightContainer,
} from './style';

function VerifyEmail() {
  const brand = useSelector((store) => store.brand.brand);
  const history = useHistory();
  const start = () => {
    history.push('/authentication');
  };
  return (
    <StyledFirstPageContainer color={theme(brand).background_color}>
      <StyledContainer>
        <StyledImageContainer>
          <img
            src={banner}
            width="100%"
            height="100%"
            alt="Toyota covid banner"
          />
        </StyledImageContainer>
        <StyledRightContainer>
          <StyledContentContainer>
            <h1>Need to apply for financial hardship?</h1>
            <h5>
              Those who have been affected by COVID-19 are able to apply for
              financial hardship.
            </h5>
            <h5>
              We are here to provide additional financial support and have an
              online application so you can apply for financial support.
            </h5>
            <h5>Start the application below.</h5>
            <StartButton className="start" onClick={start}>
              GET STARTED
            </StartButton>
          </StyledContentContainer>
        </StyledRightContainer>
      </StyledContainer>
    </StyledFirstPageContainer>
  );
}

export default VerifyEmail;
