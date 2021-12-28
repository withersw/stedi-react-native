import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import getSpikesFromAccelerometer from './utils/StepCalculator';


export default function Counter() {
  const data = useRef({
    x: 0,
    y: 0,
    z: 0,
  });
  const startTime = new Date().getTime();
  const [subscription, setSubscription] = useState(null);
  const recentAccelerationData = useRef([]);//useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const steps = useRef([]);//useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.


  //Android Docs: The data delay (or sampling rate) controls the interval at which sensor events are sent to your application via the onSensorChanged() callback method. The default data delay is suitable for monitoring typical screen orientation changes and uses a delay of 200,000 microseconds. You can specify other data delays, such as SENSOR_DELAY_GAME (20,000 microsecond delay), SENSOR_DELAY_UI (60,000 microsecond delay), or SENSOR_DELAY_FASTEST (0 microsecond delay).
  // https://developer.android.com/guide/topics/sensors/sensors_overview#java

  //Unable to find the default update interval, however the game play rate in Android is 20 millisecond intervals
  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(100);
  };

  const _subscribe = () => {
    (async () => {
      await Accelerometer.isAvailableAsync(); //this seems to initialize the Accelerometer for Android
    })(); //check if Acceleromoter is available

    setSubscription( //we set this state variable so later we can use it to unsubscribe
      Accelerometer.addListener((accelerometerData) => {
        data.current=accelerometerData;
        const { x, y, z } = data.current;
        //console.log("x: "+x+" y:"+y+" z:"+z);
        let total_amount_xyz = Math.sqrt(x * x+ y*y + z*z) * 9.81;
        console.log(new Date().getTime()+","+total_amount_xyz);
        console.log("Steps: "+steps.current.length);
        if (recentAccelerationData.current.length>10){
          steps.current=steps.current+getSpikesFromAccelerometer(recentAccelerationData.current).length;
          recentAccelerationData.current=[];
        } else{
          console.log("RecentAccelerationData: "+JSON.stringify(recentAccelerationData.current));
          recentAccelerationData.current.push({time: new Date().getTime(), value: total_amount_xyz});
          
        }
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    Accelerometer.setUpdateInterval(1000);
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data.current;
  //console.log("x: "+x+" y:"+y+" z:"+z);
  let total_amount_xyz = Math.sqrt(x * x+ y*y + z*z) * 9.81;
        



  return (
    <View style={styles.container}>
      <Text style={styles.text}>
       steps: {steps.current}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_slow}
          style={[styles.button, styles.middleButton]}
        >
          <Text>Slow</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});
