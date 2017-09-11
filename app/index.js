import React from 'react';
import { Text, View } from 'react-native';

import Navigator from './config/routes';
import {AlertProvider} from './components/Alert'
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $inputColor: '#797979',
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#008D9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $lightGray: '#F0F0F0',
  $darkText: '#343434'
})

export default class App extends React.Component {
  render() {
    return (
      <AlertProvider>
        <Navigator />
      </AlertProvider>
    );
  }
}