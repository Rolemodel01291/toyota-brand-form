import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 96px;
  min-height: 96px;
  background-color: ${(props) => props.color};
  position: relative;
  flex: 0 1 auto;
  @media (max-width: 1279px) {
    height: 72px;
    min-height: 72px;
  }
`;

export const BlackBar = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  background: ${(props) => props.color};  
  position: relative;
  flex: 0 1 auto;
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
    width: 200px;
  }

  @media (max-width: 1279px) {
    & img {
      width: 200px;
    }
  }
`;
