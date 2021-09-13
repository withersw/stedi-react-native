import React from "react";
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

    function Icons() {
        return(
            <View>
                <Card>
                    <Card.Image source={require("./image/ImproveBalance.png")}>

                    </Card.Image>
                </Card>

                <Card>
                    <Card.Image source={require("./image/LearnAboutBalance.png")}>

                    </Card.Image>
                </Card>

                <Card>
                    <Card.Image source={require("./image/Profile.png")}>

                    </Card.Image>
                </Card>

                <Card>
                    <Card.Image source={require("./image/StatsandImprovement.png")}>

                    </Card.Image>
                </Card >

                <Card>

                    <Card.Image source={require("./image/STEDITimer.png")}>

                    </Card.Image>
                </Card>  

                <Card>
                    <Card.Image source={require("./image/Tutorial.png")}>

                    </Card.Image>
                </Card>     
            </View>
        )       
    }

export default Icons;