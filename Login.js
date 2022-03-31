// @ts = check
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

export default function Login(props){

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Button title="Send One Time Password" onPress={()=>sendCode(text)}></Button>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="One Time Password"
        keyboardType="numeric"
      />
      <Button title="log In" onPress={()=>
        
        checkCode(text, number, props)}>

        </Button>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

async function sendCode (phoneNumber) {
  await fetch(('https://dev.stedi.me/twofactorlogin/' + phoneNumber), {
  method: 'POST',
  headers:{
    Accept:"application/json",
    "Content-Type": "application/json"
  },
  });
}

async function checkCode (phoneNumber, oneTimePassword, props) {
  let token = "";
  try {
  let response = await fetch('https://dev.stedi.me/twofactorlogin', {
    method: 'POST',
    headers:{
      Accept:"application/text",
      "Content-Type":"application/text",
    },
    body: JSON.stringify ({
      phoneNumber: phoneNumber,
      oneTimePassword: oneTimePassword,
    }),
    
  })
  token = await response.text()
  if (response.status == 200) {
    props.setUserLoggedIn(true);
  }
  console.log (response.status);
}
  catch(error){
    console.log(error)
  }

  try {
  let response = await fetch('https://dev.stedi.me/validate/' + token, {
    method: 'GET',
    headers: {
      Accept:"application/text",
      "Content-Type":"application/text"
    }
  })
    const email = await response.text();
    props.setUserEmail(email);
}
  catch(error){
    console.log(error)
}};
  

