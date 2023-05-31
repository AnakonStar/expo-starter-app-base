import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import styles from './styles';
import global_styles from '../../../styles';

export default function Login() {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hidePasswordIcon, setHidePasswordIcon] =
    React.useState('eye-off-outline');

  function HidePassword() {
    if (hidePassword === true) {
      setHidePasswordIcon('eye-off-outline');
      setHidePassword(false);
    } else {
      setHidePasswordIcon('eye-outline');
      setHidePassword(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.logo}/>
        <View style={global_styles.txtInputView}>
          <TextInput style={global_styles.txtInput} placeholder="Email" />
        </View>
        <View style={global_styles.txtInputView}>
          <TextInput
            style={global_styles.txtInput}
            secureTextEntry={hidePassword}
            placeholder="Senha"
          />
          <TouchableWithoutFeedback onPress={HidePassword}>
            <Ionicons name={hidePasswordIcon} color={'#121212'} size={30} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
