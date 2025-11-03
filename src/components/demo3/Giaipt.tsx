import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const GiaiPT = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (a.trim() === '' || b.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ a và b!');
      return;
    }
    if (isNaN(numA) || isNaN(numB)) {
      Alert.alert('Lỗi', 'Giá trị nhập phải là số!');
      return;
    }

    if (numA === 0 && numB === 0) {
      setResult('Phương trình có vô số nghiệm');
    } else if (numA === 0 && numB !== 0) {
      setResult('Phương trình vô nghiệm');
    } else {
      const x = -numB / numA;
      setResult(`Nghiệm của phương trình: x = ${x.toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất</Text>
      <Text style={styles.subtitle}>Dạng: ax + b = 0</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <TouchableOpacity style={styles.button} onPress={solveEquation}>
        <Text style={styles.buttonText}>Giải</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E8F0FE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A237E',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#3949AB',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90CAF9',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: '600',
    color: '#0D47A1',
    textAlign: 'center',
  },
});

export default GiaiPT;
