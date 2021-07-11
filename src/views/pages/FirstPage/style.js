import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  hegiht: 100%;
  display: flex;
  @media (max-width: 970px) {
    flex-direction: column;
  }
`;
export const StyledImageContainer = styled.div`
  width: 50%;
  hegiht: 100% !important;
  flex: 0.5;
  @media (max-width: 970px) {
    width: 100%;
  }
`;
export const StyledRightContainer = styled.div`
  flex: 0.5;
  display: flex;

  & h4 {
    font-family: 'Toyota Type Bold 600';
    font-size: 24px;
    color: '#222';
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h5 {
    font-family: 'Toyota Type Bold 600';
    color: '#222';
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & .start {
    font-family: 'Toyota Type Bold 600';
    font-weight: 600;
    font-size: 12px;
    color: #fff;
    line-height: 38px;
    padding: 0 24px;
    letter-spacing: 0.12em;
  }

  & .start:hover {
    cursor: pointer;
  }
`;

export const StyledContentContainer = styled.div`
  padding: 150px;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-family: 'Toyota Type Bold 600';
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;
  }

  & h5 {
    font-family: 'Toyota Type';
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 24px;
  }
  @media (max-width: 970px) {
    padding: 30px;
  }
`;

export const StartButton = styled.div`
  height: 40px;
  margin-top: 26px;
  width: fit-content;
  min-width: 96px;
  border-radius: 20px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  border: 1px solid #333;
  transition: all 0.4s ease-out;
  -webkit-transition: all 0.4s ease-out;
`;
