import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

// import Icons from "./Icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Bar />
      <Icons />
      <Footer />
    </View>
  );
}

function Bar() {
  return (
    <View>
      <AppName />
      <Setting />
    </View>
  );
}

function AppName() {
  return (
    <View>
      <Text>STEDI Balance</Text>
    </View>
  );
}

function Setting() {
  return <View></View>;
}

function Icons() {
  return (
    <View style={styles.icons}>
      <Card style={styles.card}>
        <Card.Divider>
          <Image source={require('./image/ImproveBalance.png')}></Image>
        </Card.Divider>
      </Card>

      <Card style={styles.card}>
        <Card.Divider>
          <Image source={require('./image/LearnAboutBalance.png')}></Image>
        </Card.Divider>
      </Card>

      <Card style={styles.card}>
        <Card.Divider>
          <Image source={require('./image/Profile.png')}></Image>
        </Card.Divider>
      </Card>

      <Card style={styles.card}>
        <Card.Divider>
          <Image source={require('./image/StatsandImprovement.png')}></Image>
        </Card.Divider>
      </Card>

      <Card style={styles.card}>
        <Card.Divider>
          <Image source={require('./image/STEDITimer.png')}></Image>
        </Card.Divider>
      </Card>

      <Card style={styles.card}>
        <Card.Divider>
          <Image source={require('./image/Tutorial.png')}></Image>
        </Card.Divider>
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
    justifyContent: 'center',
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
});
