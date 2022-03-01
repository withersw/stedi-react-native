import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  let True = true

export default function Login(props){
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="One Time Password"
        keyboardType="Alphanumeric"
      />
      <Button
  onPress={setUserLoggedIn(true)}
  title="Login"
  
/>
    </SafeAreaView>
    
  );
};
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;