import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import theme from '../../../utilities/theme';

const StyledButton = styled(Button)`
  background-color: ${(props) => theme(props.theme).color.red} !important;
  border-radius: 20px !important;
  height: 40px !important;
  min-width: 30px !important;
  padding: 0 !important;
  & span {
    font-family: ${(props) => theme(props.theme).font_family.Basic} !important;
    font-weight: 600 !important;
    color: ${(props) => theme(props.theme).color.white};
    padding-left: 24px;
    padding-right: 24px;
  }

  :hover {
    background-color: ${(props) => theme(props.theme).color.hoverRed} !important;
    color: ${(props) => theme(props.theme).color.white};
    & span {
      color: ${(props) => theme(props.theme).color.white};
    }
  }
`;

export default StyledButton;
