import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import global_styles from './styles';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaView style={global_styles.container}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
