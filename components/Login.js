import React, { Component } from "react";

import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Button,
  Text,
  TouchableOpacity
} from "react-native";

// Importing Stack Navigator library to add multiple activities.
// import { StackNavigator } from 'react-navigation';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Creating Login Activity.
class LoginActivity extends Component {
  // Setting up Login Activity title.
  static navigationOptions = {
    title: "Login"
  };

  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('https://90aa5564.ngrok.io/react_projects/mobile/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { Email: UserEmail });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.loginTitle}>
          <Text style={styles.TextComponentStyle}>Login</Text>
        </View>

        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
          onChangeText={email => this.setState({ email })}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
          onChangeText={password => this.setState({ password })}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>
            <Button
              title="Exit"
              onPress={() => {}}
              color="red"
              borderRadius="15%"
            />
          </View>

          <View style={styles.loginButton}>
            <Button
              title="Login"
              onPress={this.UserLoginFunction}
              color="green"
            />
            <Button
            title="Home"
            onPress={() => this.props.navigation.navigate("Home")}
            color="green"/>
          </View>
        </View>
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.signupButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Creating Profile activity.
// class ProfileActivity extends Component {
//   // Setting up profile activity title.
//   static navigationOptions = {
//     title: "ProfileActivity"
//   };

//   render() {
//     const { goBack } = this.props.navigation;

//     return (
//       <View style={styles.MainContainer}>
//         <Text style={styles.TextComponentStyle}>
//           {" "}
//           {this.props.navigation.state.params.Email}{" "}
//         </Text>

//         <Button title="Click here to Logout" onPress={() => goBack(null)} />
//       </View>
//     );
//   }
// }

// const Register = createStackNavigator(
//   {
//     LoginActivity: {
//       screen: LoginActivity
//     },
//     ProfileActivity: {
//       screen: ProfileActivity
//     }
//   },
//   {
//     initialRouteName: "LoginActivity"
//   }
// );
// export default createAppContainer(Register);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 30
  },

  TextInputStyleClass: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: "grey",

    // Set border Radius.
    borderRadius: 1,
    padding: 9
  },

  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 15
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    alignItems: "center"
  },
  loginButton: {
    width: 90
  },
  loginTitle: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 20
  },
  forgotPasswordText: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold"
  },
  TextComponentStyle: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold"
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "#12799f",
    fontSize: 16
  },
  signupButton: {
    color: "#12799f",
    fontSize: 16,
    fontWeight: "500"
  }
});
