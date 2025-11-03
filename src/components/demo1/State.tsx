import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';

const State = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const showAlert = () => {
    if (!name || !age) {
      Alert.alert('Vui lòng nhập đầy đủ tên và tuổi!');
      return;
    }
    Alert.alert(`Hello ${name}, ${age}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập thông tin của bạn</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />

      <Button title="Say Hello" onPress={showAlert} />
    </View>
  );
};

export default State;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
