# Expo App Starter Kit

To get started, just download the repository or open in [Expo Snack](https://snack.expo.dev/@enzo.llsant1/react-native-apps-base), and run ```npm install``` to install all the necessary dependencies.
(NOTE: make sure to have NodeJS, installed in your system, otherwise, it won't work)

After running the ```npm install``` command, you can start modifying the docs, here are some of the changes you can make to make this base fully your own:

in ```./src/screens``` you can add some folders to put screens in your app, just building like this:

- Create a folder with the name of your screen;
- Create the ```index.js``` and the ```styles.js``` (for this one, you can just create the ```index.js``` and modify the styles in global_styles)
- Go to ```routes.js``` in the main folder of your project, and add this codes: 
```
import NameOfYourScreen from './src/screens/FolderInScreens/index';

...

<Stack.Screen
  name="NameOfYourScreen"
  component={NameOfYourScreen}
  options={{
    headerShown: true,
    headerTitle: (props) => <HomeH {...props} />,
  }}
/>
```
If you don't want a header, just delete all the options line, leaving the ```Stack.Screen``` tag like this:
```
<Stack.Screen
  name="NameOfYourScreen"
  component={NameOfYourScreen}
/>
```
Another option to implement just the basic header that every Expo/React-Native have, is just removing the ```headerShow: false``` in the ```Stack.Navigator```, like this:

```
Before:

<Stack.Navigator
  initialRouteName="Login"
  screenOptions={{
    headerShown: false,
  }}>

After:

<Stack.Navigator
  initialRouteName="Login"}>
```

And lastly, you can modify the Header component, just by editing the code in ```Header.js``` in ```./compenents/Header.js```. Let me show you:

```
...

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
```
- As you can see, I just added 3 header types to my application, where you can export and import them in ```routes.js``` in the options of each ```Stack.Screen```;
- You can add as many as you want to your app, just remember to add a function with the name of your screen, and then export it in the last line of code;
- Lastly, if you look at the top of my code, I made an icon function, where you can add an icon, just create a prop with all the functions you want on it, and then create and add that to the your return view ```<Icon icon="NameOfYourIcon" />```;
- Just remember to keep the props code exactly the same, just adding the icons and functions you want.


With all that set up, you can start modifying your application, just create all the screens and components you want. 

Hope you find this helpful.

***FINAL NOTE: All this explanation and code, was created by AnakonStar (self), so if you can not copy it as your own 😥, I will be very grateful, just use it***
