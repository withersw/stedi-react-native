import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Timer from "./Timer.js";
import SettingsScreen from "./SettingsScreen.js";
import Home from "./Home.js";


// import Icons from "./Icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen key="1" name="Timer" component={Timer} />
        <Tab.Screen key="2" name="Settings" component={SettingsScreen} />        
        <Tab.Screen key="3" name="Home" component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
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

function Footer() {
  return (
    <View style={styles.footer}>
      <Policy />
      <Terms />
    </View>
  );
}

function Policy() {
  return ( 
  <View style={styles.policy}>
    <Text>hi</Text>
  </View>
  );
}

function Terms() {
  return <View></View>;
}

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
