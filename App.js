import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './components/Login';

const RootStack = createStackNavigator(
  {
    Login: Login,
  //  Register: Register,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);


class App extends Component   {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <RootContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default App;