const getSpikesFromAccelerometer = (recentAccelerationData, threshold = 11) =>{
    const overThresholdSpikes = [];//the acceleration data, often look like the following, can you find the spike(s) over the default threshold
/*     _______
    | 9.88  |
     -------
    | 9.89  |
     -------
    | 10.01 |
     -------
    | 11.03 |
     -------
    | 12.45 |
     -------
    | 11.99 |
     -------
    | 11.88 |
     -------
    | 10.33 |
     -------
     */

    let goingUp=false;//when we stop going up, we have hit a spike
    let previousValue = 0;//this is not a real value
    let previousTime = 0;//this is not a real time
    recentAccelerationData.foreach((accelerationDatum) => {
        
        if (accelerationDatum.value > previousValue && previousValue!=0){
            goingUp = true;
        } else {
            if (goingUp=true && previousTime !=0 && (accelerationDatum.time-previousTime > 400) && previousValue > threshold){
                overThresholdSpikes.push(accelerationDatum);
            }
            goingUp = false;
        }

        

        previousValue = accelerationDatum.value;
    });

    return overThresholdSpikes;

}

export default getSpikesFromAccelerometer;