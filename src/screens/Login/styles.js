import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const global_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#DDD',
    width: '80%',
    padding: 10,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF'
  }
});

export default global_styles;