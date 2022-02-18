import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Add Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Firstname"
        onChangeText={(text) => this.setState({ firstname: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        onChangeText={(text) => this.setState({ lastname: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        onChangeText={(text) => this.setState({ contact: text })}
      />
      <Button
        style={styles.submitButton}
        title="Submit"
        onPress={() => navigation.push("UProfile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    width: 50,
    position: "absolute",
    bottom: 0,
  },
  input: {
    borderColor: "gray",
    width: "80%",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 15,
  },
});

export default ProfileScreen;
