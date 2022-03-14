import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const firstScreen = ({navigation}) => {
  return (
    <View>
      <Text>firstScreen</Text>
      <Button
        title="Take me to the second screen"
        onPress={() => navigation.navigate('second')}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default firstScreen;
