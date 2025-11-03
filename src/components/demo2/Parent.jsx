import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Child from './Child';

function Parent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleUpdate = (newName, newAge) => {
    setName(newName);
    setAge(newAge);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Cha</Text>

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
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.text}>👉 Tên: {name || '(chưa nhập)'}</Text>
      <Text style={styles.text}>👉 Tuổi: {age || '(chưa nhập)'}</Text>

      <View style={styles.line} />

      <Child name={name} age={age} onUpdate={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 15,
  },
});

export default Parent;
