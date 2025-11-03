import {Button, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';

const PhuongTrinhBacNhat = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const inputA = useRef<TextInput>(null);
  const clearInput = () => {
    setA('');
    setB('');
  };
  const inputB = useRef<TextInput>(null);
  const Pt = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) && isNaN(numB)) {
      setResult('Please enter the number for coefficient b');
      clearInput();
      inputA.current?.focus();
      return;
    }

    if (isNaN(numA)) {
      setResult('Please enter the number for coefficient a');
      setA('');
      inputA.current?.focus();
      return;
    }
    if (isNaN(numB)) {
      setResult('Please enter the number for coefficient b');
      setB('');
      inputB.current?.focus();
      return;
    }

    if (numA === 0) {
      if (numB === 0) {
        setResult('pt vô số nghiệm');
      } else {
        setResult('pt vô nghiệm');
      }
    } else {
      const x = -numB / numA;
      setResult(`Nghiệm x = ${x.toFixed(2)}`);
    }
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: 'yellow',
          marginHorizontal: 10,
          marginTop: 10,
          marginBottom: 0,
          padding: 10,
        }}>
        <Text style={{color: 'green'}}>Solve the linear equation ax+b = 0</Text>
        <TextInput
          ref={inputA}
          autoFocus={true}
          placeholder="Enter number a"
          onChangeText={text => setA(text)}
          value={a}
        />
        <TextInput
          placeholder="Enter number b"
          onChangeText={text => setB(text)}
          value={b}
        />
        <Button
          onPress={Pt}
          title="Solve"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#BADFDB',
            padding: 10,
            marginHorizontal: 10,
            marginTop: 0,
            marginBottom: 10,
          }}>
          Result: {result}{' '}
        </Text>
      </View>
    </View>
  );
};

export default PhuongTrinhBacNhat;
