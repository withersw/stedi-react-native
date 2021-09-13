import React from "react";
import View from 'react-native';
import Policy from "./Policy";
import Terms from "./Terms";

    function Footer() {
        return(
            <View>
                <Policy />
                <Terms />
            </View>
        );
    }

export default Footer;