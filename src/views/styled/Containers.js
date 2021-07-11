import styled from 'styled-components';
import theme from '../../utilities/theme';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { ThemeHelper } from '../../utilities/helpers';
import { B_POWER_ALLIANCE_FINANCE } from '../../utilities/constants';

const [
  backgroundColor,
  headerColor,
  footerColor,
  logo,
  fontDarkColor,
  successColor,
  warnColor,
  grayColor,
  blackColor,
  darkGrayColor,
  redColor,
  hoverRedColor,
  whiteColor,
  basicFont,
  normalFont,
  boldFont,
] = ThemeHelper();

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    height: fit-content;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  & button {
    height: 40px;
    border-radius: 20px;
  }

  & span {
    padding-left: 24px;
    padding-right: 24px;
  }

  & .back {
    background-color: transparent;
    color: ${darkGrayColor};
    border: 1px solid ${darkGrayColor};
  }

  & .back:hover {
    color: ${whiteColor};
    background-color: ${darkGrayColor};
    & span {
      color: ${whiteColor};
    }
  }

  & .next {
    background-color: ${grayColor};
    color: ${whiteColor};
    & span {
      color: ${whiteColor};
    }
  }

  & .next:hover {
    background: ${blackColor};
    color: ${whiteColor};
  }

  & .preview {
    background: ${redColor};
    color: ${whiteColor};
    & span {
      color: ${whiteColor};
    }
  }

  & .preview:hover {
    background: ${hoverRedColor};
    color: ${whiteColor};
  }
`;

export const StyledFirstPageContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  background-color: ${backgroundColor};
  width: 100%;
`;

export const StyledContentContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  background-color: ${(props) => props.color};

  & h1 {
    font-family: ${normalFont};
    font-size: 18px;
    color: ${fontDarkColor};
    line-height: 24px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h4 {
    font-family: ${normalFont};
    font-size: 18px;
    color: ${fontDarkColor};
    line-height: 24px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h5 {
    font-family: ${normalFont};
    font-size: 18px;
    color: ${fontDarkColor};
    line-height: 24px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & option,
  & label {
    font-family: ${normalFont};
    font-size: 16px;
    color: ${fontDarkColor};
    margin: 0 0 10px 0;
    letter-spacing: 0px;
  }

  & h6 {
    font-family: ${basicFont};
    font-size: 14px;
    color: ${redColor};
    letter-spacing: 1px;
    padding: 0;
    margin: 0;
  }
  & textarea,
  & input,
  & .MuiSelect-root {
    font-family: ${normalFont};
    font-size: 18px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & span {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 13px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & .active {
    ${(props) =>
      props.theme === B_POWER_ALLIANCE_FINANCE
        ? `color: #62bb46;`
        : `color: ${redColor};`}
    position: relative;
  }

  & .active_long {
    ${(props) =>
      props.theme === B_POWER_ALLIANCE_FINANCE
        ? `color: #62bb46;`
        : `color: ${redColor};`}
    position: relative;
  }

  & .active:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 6px;
    top: 4px;
    left: -30px;
    margin-right: 20px;
    border-left: 4px solid ${redColor};
    border-bottom: 4px solid ${redColor};
    ${(props) =>
      props.theme === B_POWER_ALLIANCE_FINANCE
        ? `border-left: 4px solid #62bb46; border-bottom: 4px solid #62bb46;`
        : `border-left: 4px solid ${redColor}; border-bottom: 4px solid ${redColor};`}
    transform: rotate(-45deg);
  }

  & .active_long:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 6px;
    top: 18px;
    left: -30px;
    margin-right: 20px;
    ${(props) =>
      props.theme === B_POWER_ALLIANCE_FINANCE
        ? `border-left: 4px solid #62bb46; border-bottom: 4px solid #62bb46;`
        : `border-left: 4px solid ${redColor}; border-bottom: 4px solid ${redColor};`}
    transform: rotate(-45deg);
  }

  & .question {
    font-family: ${normalFont};
    font-size: 14px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & .answer {
    font-family: ${basicFont};
    font-size: 14px;
    color: ${redColor};
    letter-spacing: 1px;
    text-align: end;
  }

  & .red_title {
    color: ${redColor};
  }
`;
export const StyledFirstContentContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  background-color: ${backgroundColor};

  & h1 {
    font-family: ${boldFont};
    font-weight: 600;
    font-size: 28px;
    color: ${fontDarkColor};
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h4 {
    font-family: ${boldFont};
    font-weight: 600;
    font-size: 24px;
    color: ${fontDarkColor};
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h5 {
    font-family: ${boldFont};
    color: ${fontDarkColor};
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & option,
  & label {
    font-family: ${basicFont};
    font-weight: 600;
    font-size: 18px;
    color: ${fontDarkColor};
    margin: 0 0 10px 0;
    letter-spacing: 1px;
    opacity: 0.5;
  }

  & h6,
  & textarea,
  & input,
  & .MuiTypography-body1,
  & .MuiSelect-root {
    font-family: ${basicFont};
    font-size: 18px;
    font-weight: unset;
    color: ${fontDarkColor};
    line-height: 24px;
    letter-spacing: 1px;
  }

  & span {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 13px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & a:hover {
    cursor: pointer;
  }
`;

export const StyledFormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 415px;
  margin-top: 63px;
  margin-bottom: 63px;
  & h5 {
    margin-top: 60px;
  }

  @media (max-width: 475px) {
    width: 100% !important;
  }

  & a {
    font-family: ${basicFont};
    ${(props) =>
      props.theme === B_POWER_ALLIANCE_FINANCE
        ? `color: #62bb46;`
        : `color: ${redColor};`}    
    letter-spacing: 1px;
    padding-bottom: 12px;
  }

  & li,
  & p {
    font-family: ${basicFont};
    font-weight: 600;
    font-size: 13px;
    color: ${fontDarkColor}    
    letter-spacing: 1px;
  }

  & .upload {
    min-height: 30px;
    margin-bottom: 10px;
    & p {
      width: 350px !important;
    }
  }

  & #standard-helper-text {
    color: ${redColor};
  }

  & .helper-text {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.75rem;
    font-weight: 400;
  }

  & .field-error {
    color: ${redColor};
    font-family: ${boldFont};
    font-weight: 600;
  }
`;

export const StyledFAQContentContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  & h1 {
    font-family: ${boldFont};
    font-weight: 600;
    font-size: 28px;
    color: ${fontDarkColor};
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h4 {
    font-family: ${boldFont};
    font-weight: 600;
    font-size: 24px;
    color: ${fontDarkColor};
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }

  & h5 {
    font-family: ${boldFont};
    color: ${fontDarkColor};
    line-height: 30px;
    letter-spacing: 0;
    margin: 0 0 10px 0;
  }
  shallowEqual & option,
  & label {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 18px;
    color: ${fontDarkColor};
    margin: 0 0 10px 0;
    letter-spacing: 1px;
  }

  & h6,
  & textarea,
  & input,
  & .MuiTypography-body1,
  & .MuiSelect-root {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 18px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & span {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 13px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & a:hover {
    cursor: pointer;
  }

  & a:hover {
    cursor: pointer;
  }

  & a {
    font-family: ${basicFont} !important;
    font-size: 14px !important;
  }

  & .sub_faq {
    font-family: ${basicFont} !important;
    font-size: 14px;
  }
`;

export const StyledFAQBannerContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  background-color: ${backgroundColor};
`;

export const StyledFAQBannerContent = styled.div`
  width: 890px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 890px) {
    width: 750px;
  }

  @media (max-width: 750px) {
    width: fit-content;
  }
`;

export const StyledFAQ = styled.div`
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 128px;
  padding-top: 128px;

  @media (max-width: 709px) {
    padding-left: calc(100vw / 12 * 1);
    padding-right: calc(100vw / 12 * 1);
    padding-bottom: 64px;
    padding-top: 64px;
  }
`;

export const FAQ = styled.div`
  align-self: center;
  text-align: center;

  & p {
    font-family: ${basicFont};
    color: #6a6a6a;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 18px;
    font-size: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 400;
  }

  & h1 {
    margin-bottom: 0;
    margin-top: 24px;
    color: ${fontDarkColor};
    line-height: 64px;
    font-size: 48px;
    letter-spacing: 0;
    font-weight: 600;
  }
`;

export const StyledFAQContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: calc(890px / 12 * 12 - 30px);
  margin-top: 450px;
  padding-bottom: 64px;

  & h5 {
    margin-top: 60px;
  }

  & a {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 18px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  & p {
    font-family: ${normalFont};
    font-weight: 600;
    font-size: 13px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }

  @media (max-width: 475px) {
    width: 100% !important;
  }

  @media (max-width: 715px) {
    margin-top: 300px;
  }
`;

export const FAQheader = styled.div`
  font-family: ${normalFont};
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: ${fontDarkColor};
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ccc;
`;

export const StyledNavContent = styled.div`
  padding: 50px;

  & h2 {
    font-family: ${normalFont};
    font-size: 18px;
    color: ${fontDarkColor};
    letter-spacing: 1px;
  }
`;

export const StyledFooterContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: ${basicFont};
  color: ${whiteColor};

  & p {
    text-align: center;
    font-size: 12px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    background: ${redColor};
  }

  &&:hover {
    background: ${hoverRedColor};
  }

  & span {
    color: ${whiteColor};
  }
`;

export const StyledDialog = styled(Dialog)`
  && p {
    font-family: ${basicFont};
  }

  && a {
    text-decoration: underline;
    color: ${blackColor};
  }
`;
