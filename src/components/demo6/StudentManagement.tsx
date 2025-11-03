import {StyleSheet, TextInput, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';

type StudentType = {
  id: number;
  name: string;
  age: number;
  grade: number;
};

const Student = ({item}: {item: StudentType}) => {
  return (
    <View>
      <Text>Tên: {item.name}</Text>
      <Text>Tuổi: {item.age}</Text>
      <Text>Điểm: {item.grade}</Text>
    </View>
  );
};

const StudentManagement = () => {
  const [studentList, setStudentList] = useState([
    {id: 1, name: 'Dong', age: 22, grade: 8.8},
    {id: 2, name: 'Hang', age: 20, grade: 8.8},
    {id: 3, name: 'Tien', age: 23, grade: 9},
    {id: 4, name: 'Bang', age: 20, grade: 8.5},
    {id: 5, name: 'Huy', age: 20, grade: 7},
    {id: 6, name: 'Hau', age: 20, grade: 6.5},
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quản lý Danh Sách Học Sinh</Text>
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm học sinh theo tên, tuổi hoặc điểm"
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tên học sinh"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập điểm"
        keyboardType="numeric"
        value={grade}
        onChangeText={setGrade}
      />

      <Text style={styles.text}>Số học sinh có điểm trên 8: </Text>

      <FlatList
        data={studentList}
        // renderItem={({item}) => <Student {...item} />}
        renderItem={Student}
        keyExtractor={student => student.id.toString()}
      />
    </View>
  );
};

export default StudentManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
