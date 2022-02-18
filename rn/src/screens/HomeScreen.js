import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Press ADD Button for adding details!</Text>

      <Button title="Add" onPress={() => navigation.push("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

export default HomeScreen;
