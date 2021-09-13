import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icons from "./Icons";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Bar />
      <Icons />
      <Footer/>
    </View>
  );
}

function Bar() {
  return(
      <View>
          <AppName />
          <Setting />  
      </View>
  )
}

function AppName() {
  return(
      <View>
          <Text>STEDI Balance</Text>
      </View>
  )
}

function Setting() {
  return(
      <View>
          
      </View>
  )
}

function Footer() {
  return(
      <View>
          <Policy />
          <Terms />
      </View>
  );
}


function Policy() {
  return(
      <View>
          
      </View>
  )
}


function Terms() {
  return(
      <View>
          
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
