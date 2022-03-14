import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firstScreen from '../screens/firstScreen';
import secondScreen from '../screens/secondScreen';
import thirdScreen from '../screens/thirdScreen';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'caret-left';
          } else if (route.name === 'second') {
            iconName = 'caret-right';
          } else if (route.name === 'Country') {
            iconName = 'globe-asia';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarOptions={{
        showLabel: true,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffeffe',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <BottomTab.Screen name="Home" component={firstScreen} />
      <BottomTab.Screen name="second" component={secondScreen} />
      <BottomTab.Screen name="Country" component={thirdScreen} />
    </BottomTab.Navigator>
  );
};

export default Tabs;
