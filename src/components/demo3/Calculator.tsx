import * as React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState<string | null>(null);
  const [comparison, setComparison] = useState<string | null>(null);

  const handleCalculate = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập đủ 2 số!');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert('Lỗi', 'Chỉ được nhập số!');
      return;
    }

    let res: number | string = 0;
    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'sub':
        res = n1 - n2;
        break;
      case 'mul':
        res = n1 * n2;
        break;
      case 'div':
        if (n2 === 0) {
          Alert.alert('Lỗi', 'Không thể chia cho 0!');
          return;
        }
        res = (n1 / n2).toFixed(2);
        break;
      default:
        res = 'Không hợp lệ';
    }

    setResult(`Kết quả phép tính: ${res}`);

    if (n1 > n2) setComparison(`${n1} > ${n2}`);
    else if (n1 < n2) setComparison(`${n1} < ${n2}`);
    else setComparison(`${n1} = ${n2}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Calculator App</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số thứ nhất"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập số thứ hai"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Text style={styles.label}>Chọn phép tính:</Text>
      <RadioButton.Group
        onValueChange={newValue => setOperation(newValue)}
        value={operation}>
        <View style={styles.radioRow}>
          <RadioButton value="add" />
          <Text>Cộng</Text>
        </View>
        <View style={styles.radioRow}>
          <RadioButton value="sub" />
          <Text>Trừ</Text>
        </View>
        <View style={styles.radioRow}>
          <RadioButton value="mul" />
          <Text>Nhân</Text>
        </View>
        <View style={styles.radioRow}>
          <RadioButton value="div" />
          <Text>Chia</Text>
        </View>
      </RadioButton.Group>

      <Button title="Tính toán" onPress={handleCalculate} />

      {result && <Text style={styles.result}>{result}</Text>}
      {comparison && <Text style={styles.result}>{comparison}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: '600',
  },
});
