import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  position: absolute;
  left: 15vw;

  @media (max-width: 1580px) {
    left: 5vw;
  }

  @media (max-width: 1225px) {
    left: 0;
  }

  @media (max-width: 1072px) {
    display: none;
  }
`;


