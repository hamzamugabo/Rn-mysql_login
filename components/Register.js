import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform
} from "react-native";

export default class Register extends Component {
  static navigationOptions = {
    title: "Register"
  };
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      loading: false,
      disabled: false
    };
  }

  saveData = () => {
    this.setState({ loading: true, disabled: true }, () => {
      fetch(
        "https://90aa5564.ngrok.io/react_projects/mobile/user_registration1.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,

            email: this.state.email,

            password: this.state.password
          })
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          alert(responseJson);
          this.setState({ loading: false, disabled: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="username"
          style={styles.textInput}
          onChangeText={text => this.setState({ username: text })}
        />

        <TextInput
          underlineColorAndroid="transparent"
          placeholder="email"
          style={styles.textInput}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="password"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />

        <TouchableOpacity
          disabled={this.state.disabled}
          activeOpacity={0.8}
          style={styles.Btn}
          onPress={this.saveData}
        >
          <Text style={styles.btnText}>Insert</Text>
        </TouchableOpacity>

        {this.state.loading ? <ActivityIndicator size="large" /> : null}

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Text style={styles.signupButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 25,
    paddingTop: Platform.OS == "ios" ? 20 : 0
  },

  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 5,
    alignSelf: "stretch",
    padding: 8,
    fontSize: 16
  },

  Btn: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignSelf: "stretch",
    padding: 10,
    marginTop: 10,
    marginBottom: 25
  },

  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 16
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
