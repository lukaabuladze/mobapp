import { StatusBar } from 'expo-status-bar';
import React,{useState}from 'react';
import { StyleSheet, Text, View,TextInput,Button,} from 'react-native';

export default function App() {
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const handleClick = () => { alert ("Your username is:"+user+"  "+"password:"+pass);  }
  
  
  return (



    <View style={styles.container}>
      <Text>შეიყვანეთ</Text>
      <TextInput style={styles.txt} placeholder="username" onChangeText={text => setUser(text)}/>
      <TextInput style={styles.txt} placeholder="password" onChangeText={text => setPass(text)}/>
      <Button 
      onPress={handleClick}
      title="CHECK"
      
      />
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
  txt:{
    borderWidth: 1,
    backgroundColor : '#fff',
    padding: 7,
    margin: 8,
    width: 200,

  }
});
