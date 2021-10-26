import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pedometer from 'expo-sensors';

export default Timer = () => {
  const [pastStepCount] = useState(0);

  const [currentStepCount] = useState('checking');


  useEffect(() => {
    _subscribe();

    return () => {
      _unsubscribe();
    };
  });

  _subscribe = () => {
    _subscription = Pedometer.watchStepCount((result) => {
      currentStepCount = result.steps;
    });

    try {
      result = await Pedometer.isAvailableAsync();
      isPedometerAvailable = String(result);
    } 
    catch (error) {
      this.setState({
        isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
      });
    }
    

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);


    try{
      result = await Pedometer.getStepCountAsync(start, end);
      this.setState({ pastStepCount: result.steps });
    }
    catch (error) {
      this.setState({
        pastStepCount: 'Could not get stepCount: ' + error,
      });
    }







    
    _unsubscribe = () => {
      this._subscription && this._subscription.remove();
      this._subscription = null;
    };

    return (
      <View style={styles.container}>
        <Text>
          Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
        </Text>
        <Text>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>
        <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
