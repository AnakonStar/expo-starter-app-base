import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { BackH, SearchH, HomeH } from './components/Header';

import Home from './src/screens/Home/index';
import Login from './src/screens/Login/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: (props) => <HomeH {...props} />,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}
