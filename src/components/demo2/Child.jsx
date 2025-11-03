import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function Child({name, age, onUpdate}) {
  const [newName, setNewName] = useState(name);
  const [newAge, setNewAge] = useState(age);

  const handlePress = () => {
    onUpdate(newName, newAge);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Con</Text>
      <Text>
        Nhận từ cha 👉 {name || '(chưa nhập)'} ({age || '---'})
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Tên mới"
        value={newName}
        onChangeText={setNewName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tuổi mới"
        value={newAge}
        onChangeText={setNewAge}
        keyboardType="numeric"
      />
      <Button title="Cập nhật cha" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
  },
});

export default Child;
