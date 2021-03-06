import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4f607A',
  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
});

export default () => <CurrencyList />;
