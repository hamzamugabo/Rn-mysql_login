import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button
} from "react-native";

const Header = props => {
  state = {
    email: "",
    password: ""
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Farm Information Management System</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.login}>Login</Text>
        </View>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="lightgrey"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="lightgrey"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <View style={styles.buttonContainer}>
         <View style={styles.button}>
         <Button
            title="Exit"
            onPress={() => this.login(this.state.email, this.state.password)}
            color="red"
          />
         </View>
          
         <View style={styles.button}>
         <Button
            title="Login"
            onPress={() => this.login(this.state.email, this.state.password)}
            color="green"
          />
         </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 29
  },
  titleContainer: {
    alignItems: "center"
  },
  login: {
    fontSize: 30,
    color: "darkgreen",
    alignItems: "center"
  },
  loginContainer: {
    alignItems: "center"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "90%",
    padding: 9
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  },
  buttonContainer: {
   flexDirection: "row",
   width: "100%",
   justifyContent: "space-between",
   paddingHorizontal: 15,
   alignItems:'center',
 },
 button: {
   width: 90
 },
  container: {
    paddingTop: 23
  }
});

export default Header;
