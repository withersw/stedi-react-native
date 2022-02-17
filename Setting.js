import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UselessTextInput from "./Login";


function Setting() {
    return(
      <View>
      <Button
      title="Log In"
      onPress={(_UselessTextInput) => Alert.alert('Simple Button pressed')}
    />
      </View>
    )
  }

export default Setting;