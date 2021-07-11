import {
  B_HINO_FINANCIAL_SERVICES,
  B_LEXUS_FINANCIAL_SERVICES,
  B_MAZDA_FINANCE,
  B_POWERTORQUE_FINANCE,
  B_POWER_ALLIANCE_FINANCE,
  B_TOYOTA_FINANCE,
} from '../constants';

const toyotaFinanceTheme = {
  background_color: '#f5f6f7',
  header_color: '#fff',
  footer_color: '#222',
  logo: '/static/images/logo.png',
  favLogo: '/static/images/documentLogo/toyota.png',
  color: {
    fontDark: '#222',
    success: '#00c483',
    warn: '#c5141f',
    gray: '#333333',
    darkGray: '#1a1a1a',
    black: '#000000',
    red: '#eb0a1e',
    hoverRed: '#d1091b',
    white: '#FFFFFF',
  },
  font_family: {
    Basic: `Toyota Type Normal`,
    Normal: `Toyota Type Normal`,
    Bold: `Toyota_Type_Bold_900`,
  },
};

const powertorqueFinanceTheme = {
  background_color: '#fffffff',
  header_color: '#fff',
  footer_color: '#222',
  logo: '/static/images/powertoqueLogo.png',
  favLogo: '/static/images/documentLogo/powerTorque.png',
  color: {
    fontDark: '#222',
    success: '#00c483',
    warn: '#c5141f',
    gray: '#333333',
    darkGray: '#1a1a1a',
    black: '#000000',
    red: '#ed1c24',
    hoverRed: '#d1091b',
    white: '#FFFFFF',
  },
  font_family: {
    Basic: `Powertorque Normal`,
    Normal: `Powertorque Normal`,
    Bold: `Powertorque_Extra_Bold`,
  },
};

const mazdaFinanceTheme = {
  background_color: '#fffffff',
  header_color: '#fff',
  footer_color: '#101010',
  logo: '/static/images/mazdaLogo.png',
  favLogo: '/static/images/documentLogo/Mazda.ico',
  color: {
    fontDark: '#101010',
    success: '#00c483',
    warn: '#c5141f',
    gray: '#333333',
    darkGray: '#101010',
    black: '#101010',
    red: '#910a2d',
    hoverRed: '#101010',
    white: '#FFFFFF',
  },
  font_family: {
    Basic: `Mazda_Normal`,
    Normal: `Mazda_Bold`,
    Bold: `Mazda_Extra_Bold`,
  },
};

const powerAllianceTheme = {
  background_color: '#fffffff',
  header_color: '#fff',
  footer_color: 'linear-gradient(90deg, rgba(98,187,70,1) 0%, rgba(0,188,231,1) 100%)',
  logo: '/static/images/PowerAllianceLogo.png',
  favLogo: '/static/images/documentLogo/PowerAlliance.png',
  color: {
    fontDark: '#222',
    success: '#00c483',
    warn: '#c5141f',
    gray: '#333333',
    darkGray: '#1a1a1a',
    black: '#000000',
    red: 'linear-gradient(90deg, rgba(98,187,70,1) 0%, rgba(0,188,231,1) 100%)',
    hoverRed: '#101010',
    white: '#FFFFFF',
  },
  font_family: {
    Basic: `Power_Alliance_Normal`,
    Normal: `Power_Alliance_Bold`,
    Bold: `Power_Alliance_Extra_Bold`,
  },
};

const HinoTheme = {
  background_color: '#fffffff',
  header_color: '#fff',
  footer_color: '#101010',
  logo: '/static/images/hinoLogo.png',
  favLogo: '/static/images/documentLogo/Hino.ico',
  color: {
    fontDark: '#000000',
    success: '#00c483',
    warn: '#c5141f',
    gray: '#333333',
    darkGray: '#101010',
    black: '#000000',
    red: '#e60012',
    hoverRed: '#101010',
    white: '#FFFFFF',
  },
  font_family: {
    Basic: `Hino_Basic`,
    Normal: `Hino_Bold`,
    Bold: `Hino_Extra_Bold`,
  },
};

const LexusTheme = {
  background_color: '#fffffff',
  header_color: '#fff',
  footer_color: '#232635',
  logo: '/static/images/LexusLogo.png',
  favLogo: '/static/images/documentLogo/Lexus.ico',
  color: {
    fontDark: '#232635',
    success: '#00c483',
    warn: '#c5141f',
    gray: '#333333',
    darkGray: '#101010',
    black: '#232635',
    red: '#ca4b19',
    hoverRed: '#232635',
    white: '#FFFFFF',
  },
  font_family: {
    Basic: `Lexus_Basic`,
    Normal: `Lexus_Bold`,
    Bold: `Lexus_Extra_Bold`,
  },
};

const testTheme = {
  background_color: 'red',
  header_color: '#39fc03',
  // Wrong Terminology for positioning
  // Sits directly below header and at bottom of screen
  footer_color: '#7262de',
  color: {
    fontDark: '#222',
    success: '#d143b5',
    warn: '#4343d1',
    gray: '#d1212d',
    darkGray: '#d1c10a',
    black: '#000000',
    red: '#eb0a1e',
    hoverRed: '#d1091b',
    white: '#FFFFFF',
  },
  font_family: {
    Normal: `Toyota Type Normal`,
    Extrabold: 'Toyota Type Bold 600',
  },
};

/**
 * Provides theme based off provider-id (AKA brand)
 *
 * @param providerId the provider id of the brand behind the website
 * @returns theme object
 */
export default (providerId) => {
  if (window.location.hostname === 'test-theme') {
    return testTheme;
  }

  switch (providerId) {
    case B_LEXUS_FINANCIAL_SERVICES:
      return LexusTheme;
    case B_HINO_FINANCIAL_SERVICES:
      return HinoTheme;
    case B_POWERTORQUE_FINANCE:
      return powertorqueFinanceTheme;
    case B_MAZDA_FINANCE:
      return mazdaFinanceTheme;
    case B_POWER_ALLIANCE_FINANCE:
      return powerAllianceTheme;
    case B_TOYOTA_FINANCE:
      return toyotaFinanceTheme;
    default:
      return toyotaFinanceTheme;
  }
};
