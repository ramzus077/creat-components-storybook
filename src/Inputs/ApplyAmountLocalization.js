import ReactNativeI18n from 'react-native-i18n';

export function applyLocalizationOnAmount(text, isDecimal) {
  const newText = parseFloat(text).toFixed(2).toString();
  if (newText === 'NaN') {
    return '';
  }

  let decimalSym;
  let params;
  if (ReactNativeI18n.locale.substr(0, 2) === 'en') {
    decimalSym = '.';
    params = { format: '%u%n', delimiter: ',' };
  } else {
    decimalSym = ',';
    params = { format: '%n %u', delimiter: ' ', separator: ',' };
  }

  const amount = ReactNativeI18n
    .toCurrency(newText, params)
    .toString().split(decimalSym);

  let result;
  if (amount.length > 1) {
    if (isDecimal) {
      result = decimalSym + amount[1];
    } else if (isDecimal === false) {
      result = amount[0];
    } else {
      result = amount[0] + decimalSym + amount[1];
    }
  }
  return result;
}
