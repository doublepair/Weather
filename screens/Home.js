import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
//my components 
import Greetings from "../components/Greetings";
import AddCity from "../components/AddCity";
import CityCard_1 from "../components/CityCard_1";
import CityCard_2 from "../components/CityCard_2";
import CityCard_3 from "../components/CityCard_3";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <Greetings name={"Mario"} />
            <AddCity />
            <View style={styles.cardsContainer}>
                <CityCard_1 />
                <CityCard_2 />
                <CityCard_3 /> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "white",
    }, 
    cardsContainer: {
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
})

export default Home;