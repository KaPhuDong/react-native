import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layout1}>
        <Text>Layout1</Text>
      </View>
      <View style={styles.layout2}>
        <Text>Layout2</Text>
      </View>
      <View style={styles.layout3}>
        <Text>Layout3</Text>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout1: {
    flex: 1,
    backgroundColor: '#ff807d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout2: {
    flex: 4,
    backgroundColor: '#ffafb2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout3: {
    flex: 1,
    backgroundColor: '#ff807d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
