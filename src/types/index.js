// Centralized propType definitions
import {bool, number, oneOfType, shape, string, array, object} from 'prop-types';

export const savings = shape({
  monthly: oneOfType([number,string]),
  annual: oneOfType([number,string]),
  threeYear: oneOfType([number,string]),
});

export const fuelSavings = shape({
  newMpg: oneOfType([number,string]),
  tradeMpg: oneOfType([number,string]),
  newPpg: oneOfType([number,string]),
  tradePpg: oneOfType([number,string]),
  milesDriven: oneOfType([number,string]),
  milesDrivenTimeframe: string,
  displayResult: bool,
  dateModified: string,
  necessaryDataIsProvidedToCalculateSavings: bool,
  savings: savings
});

export const LoginIndex = shape({
  authActions: array,
  authReducer: object
});
