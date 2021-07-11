import _ from 'lodash';
import * as values from './constants';
import { individualFormStep } from './formStep';

export function getSteps(kindForm) {
  if (kindForm === values.F_INDIVIDUAL) {
    return individualFormStep;
  }
}

/**
 * getSecondBorrowerData - get 'second_borrower' data value
 * @param {object} userData fallback user data object
 * @returns {string} result of the 'second_borrower' flag value
 */
export function getSecondBorrowerData(userData) {
  let result;

  // first try retrieve from local storage
  result = localStorage.getItem('second_borrower');

  // try user data if no local storage
  // e.g. user switched browser/computer
  if (_.isNil(result)) {
    const isSecondBorrower = _.get(userData, 'begin.isSecondBorrower', 'false');
    if (typeof isSecondBorrower === 'boolean') {
      result = '' + isSecondBorrower;
    } else if (typeof isSecondBorrower === 'string') {
      result = isSecondBorrower;
    }

    // set to local storage
    localStorage.setItem('second_borrower', result);
  }

  return result;
}

/**
 * getCovidData - get 'covid' data value
 * @param {object} userData fallback user data object
 * @returns {string} result of the 'covid' flag value
 */
export function getCovidData(userData) {
  let result;

  // first try retrieve from local storage
  result = localStorage.getItem('covid');

  // try user data if no local storage
  // e.g. user switched browser/computer
  if (_.isNil(result)) {
    const isCovid = _.get(userData, 'background_hardship.covid', 'false');
    if (typeof isCovid === 'boolean') {
      result = '' + isCovid;
    } else if (typeof isCovid === 'string') {
      result = isCovid;
    }

    // set to local storage
    localStorage.setItem('covid', result);
  }

  return result;
}
