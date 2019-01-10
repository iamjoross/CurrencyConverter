import React from 'react';
import {
  Text, FlatList, StatusBar, View,
} from 'react-native';
import currencies from '../data/currencies';

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </View>
);

export default CurrencyList;