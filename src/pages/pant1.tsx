import React from "react";
import {Text, View, StyleSheet, Image} from "react-native"

import { Encab } from "../components/encabesado";
import { Piee } from "../components/piee";

export default function Pan2  ()  {
    return(
        <View>
            <Encab/>
            <Text> PANTALLA2 </Text>
            <Piee/>
        </View>
    );
};
