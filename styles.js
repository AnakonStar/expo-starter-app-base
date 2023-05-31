import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const global_styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  txtInputView: {
    padding: 5,
    width: '100%',
    backgroundColor: '#D1D1D1',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtInput: {
    flex: 1,
    height: 35,
    color: '#121212',
    paddingHorizontal: 8,
  },
  txtInputIcon: {
    
  }
});

export default global_styles;