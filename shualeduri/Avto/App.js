import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text><TextInput style={styles.inp} placeholder="EMAIL" /></Text>
      <Text><TextInput secureTextEntry={true} style={styles.inp} placeholder="PASSWORD" /></Text>
      <Button title="SIGN IN"/>
      
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
  inp:{
    borderWidth: 1,
    backgroundColor : '#fff',
    padding: 7,
    margin: 8,
    width: 200,

  }
});
