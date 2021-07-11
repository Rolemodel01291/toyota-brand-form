// Roles

export const S_READ = 'user';
export const S_STAFF = 'staff';
export const S_ADMIN = 'admin';

//Brands

export const B_TOYOTA_FINANCE = 'toyota-finance';
export const B_LEXUS_FINANCIAL_SERVICES = 'lexus-financial-services';
export const B_HINO_FINANCIAL_SERVICES = 'hino-financial-services';
export const B_POWERTORQUE_FINANCE = 'powertorque-finance';
export const B_POWER_ALLIANCE_FINANCE = 'power-alliance-finance';
export const B_MAZDA_FINANCE = 'mazda-finance';
export const B_TEST = 'test';

export const BEGIN_APPLICATION_PAGE = '/begin_application';
export const FORM_PERSIST_KEY = 'user';
export const FORM_ID_STORAGE_KEY = 'formId';
export const AUTHORISATION_TOKEN_STORAGE_KEY = 'token';

export const API_URL = process.env.REACT_APP_API_URL;

/**
 * Determines the brand (AKA provider-id) based off the hostname
 * 
 * Each brand has three different hostnames depending on the environment
 * <BRANDNAME>-hardship.verifier.me = LIVE Environment
 * <BRANDNAME>.stgreprise-hardship.verifier.me = STAGING Environment
 * <BRANDNAME>.devreprise-hardship.verifier.me = DEVELOPMENT Environment
 *
 * @param providerHostname hostname of website
 * @returns brand as string
 */
export const brandFromHost = (providerHostname) => {
  const providerNameSplit = providerHostname.split(/[-.]/);

  switch (providerNameSplit[0]) {
    // Used for testing
    case 'test':
      return 'test-theme';

    case 'lexusfinancialservices':
      return B_LEXUS_FINANCIAL_SERVICES;

    case 'hinofinancialservices':
      return B_HINO_FINANCIAL_SERVICES;

    case 'powertorquefinance':
      return B_POWERTORQUE_FINANCE;

    case 'mazdafinance':
      return B_MAZDA_FINANCE;

    case 'poweralliancefinance':
      return B_POWER_ALLIANCE_FINANCE;

    case 'toyotafinance':
      return B_TOYOTA_FINANCE

    case 'localhost':
      return B_POWERTORQUE_FINANCE;
      
    default:
      return B_TOYOTA_FINANCE;
  }
};
