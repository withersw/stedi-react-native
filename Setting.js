import React from "react";
import {View, Button} from 'react-native';

function Setting(props) {
    return(
        <View>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        </View>
    )
}

export default Setting;