import React from "react";
import {
    StyleSheet,
    Text, 
    View,
} from "react-native";

const Greetings = (props) => {
    const date = new Date();
    const hour = date.getHours();
    return (
        <View>
            {hour >= 14 ? hour >= 20 ?
                <Text style={styles.text}>
                    Good evening! {props.name}
                </Text>
                :
                <Text style={styles.text}>
                    Good afternoon! {props.name}
                </Text>
                :
                <Text style={styles.text}>
                    Good morning! {props.name}
                </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor:"#fff",
        color: "rgb(13,30,93)", 
        fontSize: 30,
        paddingRight: 100,
        paddingTop: 10,
        paddingLeft: 100,
        textAlign: "center",
        fontWeight: "600"
    },
})

export default Greetings;