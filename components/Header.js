import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import global_styles from '../styles';

function Icon(props) {
  if (props.icon === 'back') {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back'} color={'#121212'} size={30} />
      </TouchableOpacity>
    );
  }
  if (props.icon === 'menu') {
    return (
      <TouchableOpacity>
        <Ionicons name={'list'} color={'#121212'} size={30} />
      </TouchableOpacity>
    );
  }
}

function SearchH() {
  return (
    <View style={styles.container}>
      <Icon icon="back" />
      <View style={global_styles.txtInputView}>
        <Ionicons name={'search'} color={'#FFF'} size={25} />
        <TextInput style={global_styles.txtInput} placeholder="Pesquisar" />
      </View>
    </View>
  );
}

function BackH() {
  return (
    <View style={styles.container}>
      <Icon icon="back" />
      <Text style={styles.title}>Título da Tela</Text>
    </View>
  );
}

function HomeH() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título da Tela</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
    fontColor: '#000',
  },
});

export { BackH, SearchH, HomeH };
