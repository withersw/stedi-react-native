import React from "react";
import View from 'react-native';
import AppName from "./AppName";
import Setting from "./Setting";

function Bar(props) {
    return(
        <View>
            <AppName style={props.styles.appName}/>
            <Setting styles={props.styles.setting}/>  
        </View>
    )
}

export default Bar;