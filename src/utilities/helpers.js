import { S_READ, S_STAFF, S_ADMIN } from './constants';
import theme from '../utilities/theme';
import { store } from '../state/store';
import { brandFromHost } from '../utilities';

export function getUserType(role) {
  if (role === S_READ) return S_READ;
  else if (role === S_STAFF) return S_STAFF;
  else if (role === S_ADMIN) return S_ADMIN;
  else return null;
}

export function convertDate(data) {
  var d = new Date(data);
  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}

export function ThemeHelper() {
  const { hostname } = window.location;
  const brand = brandFromHost(hostname)  
  const customTheme = theme(brand);
  const colors = customTheme.color;
  const fonts = customTheme.font_family;
  const backgroundColor = customTheme.background_color;
  const headerColor = customTheme.header_color;
  const footerColor = customTheme.footer_color;
  const logo = customTheme.logo;
  const fontDarkColor = colors.fontDark;
  const successColor = colors.success;
  const warnColor = colors.warn;
  const grayColor = colors.gray;
  const darkGrayColor = colors.darkGray;
  const blackColor = colors.black;
  const redColor = colors.red;
  const hoverRedColor = colors.hoverRed;
  const whiteColor = colors.white;
  const basicFont = fonts.Basic;
  const normalFont = fonts.Normal;
  const boldFont = fonts.Bold;

  return [
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
    boldFont
  ];
}
