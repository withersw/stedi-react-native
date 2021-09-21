import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

// import Icons from "./Icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Bar />
      <Icons />
      <Footer />
    </View>
  );
}

function Bar() {
  return(
      <View style={styles.bar}>
          <AppName />
          <Setting />  
      </View>
  )
}

function AppName() {
  return (
    <View style={styles.appName}>
      <Text>STEDI Balance</Text>
    </View>
  );
}

function Setting() {
  return(
      <View>
      <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
      </View>
  )
}

function Icons() {
  return (
    <View style={styles.icons}>
      <Card style={styles.card}>
          <Image source={require('./image/ImproveBalance.png')}></Image>
      </Card>

      <Card style={styles.card}>
          <Image source={require('./image/LearnAboutBalance.png')}></Image>

      </Card>

      <Card style={styles.card}>
          <Image source={require('./image/Profile.png')}></Image>

      </Card>

      <Card style={styles.card}>
          <Image source={require('./image/StatsandImprovement.png')}></Image>

      </Card>

      <Card style={styles.card}>
          <Image source={require('./image/STEDITimer.png')}></Image>

      </Card>

      <Card style={styles.card}>
          <Image source={require('./image/Tutorial.png')}></Image>

      </Card>
    </View>
  );
}

function Footer() {
  return (
    <View>
      <Policy />
      <Terms />
    </View>
  );
}

function Policy() {
  return <View></View>;
}

function Terms() {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    margin: '12em',
  },

  appName: {
    backgroundColor: 'white',
    padding: 12,
    width: '70%',

  },

  bar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'

  },

  setting: {

  },
});
