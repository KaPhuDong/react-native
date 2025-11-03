import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const PhuongTrinh = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const handleNumber (a, b) => {
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phương Trình Bậc Nhất</Text>
      <TextInput placeholder="Nhập số a:" style={styles.input} />
      <TextInput placeholder="Nhập số b:" style={styles.input} />
      <Button title="Kiểm tra" onPress={handleNumber} />
      <Text style={styles.result}>Kết quả là: </Text>
    </View>
  );
};

export default PhuongTrinh;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF3E2',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  result: {
    marginTop: 10,
  },
});
