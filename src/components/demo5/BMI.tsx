import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('#000');

  const calculateBMI = () => {
    if (!weight || !height) {
      setStatus('Vui lòng nhập đầy đủ thông tin!');
      setStatusColor('#6c757d');
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || h <= 0) {
      setStatus('Dữ liệu không hợp lệ!');
      setStatusColor('#6c757d');
      return;
    }

    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setStatus('Gầy');
      setStatusColor('#0d6efd');
    } else if (bmiValue < 24.9) {
      setStatus('Bình thường');
      setStatusColor('#198754');
    } else if (bmiValue < 29.9) {
      setStatus('Thừa cân');
      setStatusColor('#fd7e14');
    } else {
      setStatus('Béo phì');
      setStatusColor('#dc3545');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ứng dụng tính BMI</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập cân nặng (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập chiều cao (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Tính BMI</Text>
      </TouchableOpacity>

      {bmi && (
        <View style={styles.result}>
          <Text style={styles.resultText}>BMI của bạn: {bmi}</Text>
          <Text style={[styles.resultText, {color: statusColor}]}>
            Trạng thái: {status}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
