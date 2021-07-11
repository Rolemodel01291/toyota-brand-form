import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  min-height: 96px;
  background: ${(props) => props.color};
  position: relative;
  // flex: 0 1 auto;
  @media (max-width: 1279px) {
    height: 72px;
    min-height: 72px;
  }
`;

export const StyledLogoContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & img {
    width: 56px;
  }

  @media (max-width: 1279px) {
    & img {
      width: 48px;
    }
  }
`;


