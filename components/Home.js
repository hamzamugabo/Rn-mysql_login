import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";

import { LinearGradient } from "../components/LinearGradient";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedIndexes: [0, 2, 3]
    };
  }

  render() {
    return (
      <View style={styles.contentView}>
        <View style={styles.headerContainer}>
          <Image
            style={{ width: 70, height: 70, }}
            source={require("../assets/Farm-lite.png")}
          />
          <Text style={{fontSize:16, color:'green', fontWeight:"bold"}}>Farm Information Management System</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
            <Button
              title="Crops"
              buttonStyle={{
                backgroundColor: "green",
                width: 110,
                borderRadius: 5
              }}
              onPress={() => {}}
              containerStyle={{ height: 50 }}
              titleStyle={{
                color: "white",
                marginHorizontal: 1,
                fontWeight: "bold"
              }}
            />
            <Button
              title="Animals"
              buttonStyle={{
                backgroundColor: "green",
                width: 110,
                borderRadius: 5
              }}
              onPress={() => {}}
              containerStyle={{ height: 50 }}
              titleStyle={{
                color: "white",
                marginHorizontal: 1,
                fontWeight: "bold"
              }}
            />
          </View>
          <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
            <Button
              title="Machinery"
              buttonStyle={{
                backgroundColor: "green",
                width: 110,
                borderRadius: 5
              }}
              onPress={() => {}}
              containerStyle={{ height: 50 }}
              titleStyle={{
                color: "white",
                marginHorizontal: 1,
                fontWeight: "bold"
              }}
            />
            <Button
              title="Transaction"
              buttonStyle={{
                backgroundColor: "green",
                width: 110,
                borderRadius: 5
              }}
              onPress={() => {}}
              containerStyle={{ height: 50 }}
              titleStyle={{
                color: "white",
                marginHorizontal: 1,
                fontWeight: "bold"
              }}
            />
          </View>
          <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
            <Button
              title="Employee"
              buttonStyle={{
                backgroundColor: "green",
                width: 110,
                borderRadius: 5
              }}
              onPress={() => {}}
              containerStyle={{ height: 50 }}
              titleStyle={{
                color: "white",
                marginHorizontal: 1,
                fontWeight: "bold"
              }}
            />
            <Button
              title="Analytics"
              buttonStyle={{
                backgroundColor: "green",
                width: 110,
                borderRadius: 5
              }}
              onPress={() => {}}
              containerStyle={{ height: 50 }}
              titleStyle={{
                color: "white",
                marginHorizontal: 1,
                fontWeight: "bold"
              }}
            />
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle1}>
            Copyright @2019. Billbrain Technologies.
            {"\n"}
            <Text style={{ alignItems: "center" }}>All rights reserved</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 9,
    alignItems: "center"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "white",
    marginBottom: 70,
    flexDirection: "row"
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  footerContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 1,
    flexDirection: "row"
  },
  footerContainer2: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 1,
    flexDirection: "row"
  },
  footerTitle1: {
    color: "green",
    alignItems: "center"
  },
  footerTitle2: {
    color: "green",
    alignItems: "center"
  }
});

export default Home;
