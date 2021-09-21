import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function AppName() {
  return (
    <View style={styles.appName}>
      <Text>STEDI Balances</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    backgroundColor: 'blue',
    margin: '10',
  },
});

export default AppName;
