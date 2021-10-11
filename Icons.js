import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';

const Icons = () => {

    return (
        <View style={styles.icons}>
            <Card syle={styles.card}>
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
            <Card>
                <Image source={require('./image/Tutorial.png')}></Image>
            </Card>
        </View>
    );
}

export default Icons;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#66FF66',
      alignItems: 'center',
      justifyContent: 'space-between',
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
      padding: '3%',
      width: '70%',  
      borderRadius: 10,
      height: '30%',
    },
  
    bar: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      backgroundColor: 'green',
      height: '15%',
      alignItems: 'center'
    },
  
    setting: {
  
    },
    policy: {
      backgroundColor: 'green',
      width: '100%',
      height: '100%',
      padding: '6%',
    },
    footer: {
      height: '10%',
      width: '100%',
    }
  });