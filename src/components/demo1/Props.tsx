import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

// Component nhận props name, age
const Props = ({name = 'Đông', age = 21}) => {
  const showAlert = () => {
    Alert.alert(`Hello ${name}, ${age}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello {name}, {age}
      </Text>
      <Button title="Say Hello" onPress={showAlert} />
    </View>
  );
};

export default Props;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // căn giữa dọc
    alignItems: 'center', // căn giữa ngang
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
