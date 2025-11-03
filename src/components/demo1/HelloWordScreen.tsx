import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HelloWordScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red'}}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
