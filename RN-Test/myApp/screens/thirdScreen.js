import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

const thirdScreen = () => {
  const array = [
    {id: 1, name: 'India'},
    {id: 2, name: 'China'},
    {id: 3, name: 'USA'},
    {id: 4, name: 'Japan'},
    {id: 5, name: 'korea'},
    {id: 6, name: 'Canada'},
    {id: 7, name: 'Turkey'},
    {id: 8, name: 'UK'},
    {id: 9, name: 'Europe'},
    {id: 10, name: 'Africa'},
    {id: 11, name: 'Australia'},
    {id: 12, name: 'New zealand'},
    {id: 13, name: 'England'},
    {id: 14, name: 'Bhutan'},
    {id: 15, name: 'Bangladesh'},
    {id: 16, name: 'Pakistan'},
    {id: 17, name: 'Afghanistan'},
    {id: 18, name: 'SriLanka'},
    {id: 19, name: 'Arab'},
    {id: 20, name: 'Austria'},
  ];
  console.log(array);

  const [refreshing, setRefreshing] = React.useState(false);

  function Item({item}) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listName}>{item.name}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={array}
        renderItem={Item} //renderItem is like <li> and <Item name is mapping and item is component func
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          //setArray(array.reverse());
          setRefreshing(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
  },
  listName: {
    flex: 0.5,
    alignItems: 'flex-start',
    textAlign: 'center',
  },
});

export default thirdScreen;
