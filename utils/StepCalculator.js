const getSpikesFromAccelerometer = (recentAccelerationData, threshold = 11) =>{
    console.log("Spike Calculator Called");
    const overThresholdSpikes = [];//the acceleration data, often look like the following, can you find the spike(s) over the default threshold
/*
[
{"value": 9.88,
"time": 1289182498},
{"value": 9.89,
"time": 1289182898},
{"value": 9.88,
"time": 1289183498},
{"value": 10.01,
"time": 1289184498},
{"value": 11.03,
"time": 1289185498},
{"value": 12.45,
"time": 1289186498},
{"value": 11.99,
"time": 1289187498},
{"value": 11.88,
"time": 1289188498}
]
     _______
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
    let previousHighPointTime = 0;
    recentAccelerationData.forEach((accelerationDatum) => {
        
        if (accelerationDatum.value > previousValue && previousValue!=0){
            goingUp = true;
            console.log("Going UP: "+goingUp );
        } else {
            if (goingUp=true && previousTime !=0 && (previousHighPointTime !=0 && accelerationDatum.time-previousHighPointTime > 400) && previousValue > threshold){
                overThresholdSpikes.push(accelerationDatum);
                previousHighPointTime = accelerationDatum.time;
            }
            goingUp = false;
        }        

        previousValue = accelerationDatum.value;
    });

    return overThresholdSpikes;

}

export default getSpikesFromAccelerometer;