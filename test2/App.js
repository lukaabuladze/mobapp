import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [inp, setInp] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);
  const handleClick = () => {
    console.log(inp);
    let index = (inp.indexOf("+") || inp.indexOf("-") || inp.indexOf("*") || inp.indexOf("/"))
    console.log(index);
    console.log(inp.substring(0, index));
    console.log(inp.substring(index + 1, inp.length));
    console.log(result);
    if (inp.indexOf("+")) {
      setNum1(inp.substring(0, index));
      console.log(num1);
      setNum2(inp.substring(index + 1, inp.length));
      console.log(num2);
      setResult(parseInt(num1) + parseInt(num2) || 5);
    }
    else if (inp.indexOf("-")) {
      setNum1(inp.substring(0, inp.indexOf("+")));
      setNum2(inp.substring(inp.indexOf("+") + 1, inp.length));
      setResult(parseInt(num1) - parseInt(num2));
    }
    else if (inp.indexOf("*")) {

    }
    else if (inp.indexOf("/")) {

    }
    else {
      setResult("");
    };
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setInp(text)}
        value={inp}
      />

      <Button
        onPress={() => { setInp(inp + "+") }}
        title="+"
        color="#841584"
        accessibilityLabel="button"
      />
      <Button
        onPress={() => { setInp(inp + "-") }}
        title="-"
        color="#841584"
        accessibilityLabel="button"
      />
      <Button
        onPress={() => { setInp(inp + "*") }}
        title="*"
        color="#841584"
        accessibilityLabel="button"
      />
      <Button
        onPress={() => { setInp(inp + "/") }}
        title="/"
        color="#841584"
        accessibilityLabel="button"
      />
      <Button
        onPress={handleClick}
        title="get result"
        color="#841584"
        accessibilityLabel="button"
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

