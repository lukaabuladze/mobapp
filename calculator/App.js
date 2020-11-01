import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const handleClick = () => {
    setResult(parseInt(num1) + parseInt(num2));

  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setNum1(text)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNum2(text)}
        value={num2}
      />
      <Button
        onPress={handleClick}
        title="get sum"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>
        {result}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,

  }
});
