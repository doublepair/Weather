import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { Feather } from "@expo/vector-icons";
import DayCard from "../components/DayCard";

const Details = ( { navigation } ) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={
                            () => navigation.navigate(
                            'Home', {screen:"Home"}
                    )}>
                    <Feather name="arrow-left" size={30} color="black"/>
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.cityName}>Turin</Text> 
                </View>       
                <TouchableOpacity> 
                    <Feather name="plus-square" size={30} color="rgb(13,30,93)"/>
                </TouchableOpacity>   
            </View>
            <View style={styles.content}>
                <Text style={styles.date}>
                    Friday 12, June
                </Text>
                <Text style={styles.forecast}>
                    Sunny
                </Text>
                <View style={styles.temperature}>
                    <Image
                        style={{width:100, height: 100}}
                        source={{ uri: `http://openweathermap.org/img/wn/10d.png` }}
                    />
                    <Text style={styles.temperatureText}>22°</Text>
                </View>
                <View style={styles.timeScroll}> 
                <ScrollView
                    horizontal={true}
                >
                    <View style={styles.timeScrollElem}>
                        <Text>Now</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 22°</Text>
                    </View>
                    <View style={styles.timeScrollElem}>
                        <Text>4 pm</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 20°</Text>
                    </View>
                    <View style={styles.timeScrollElem}>
                        <Text>5pm</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 18°</Text>
                    </View>
                    <View style={styles.timeScrollElem}>
                        <Text>6 pm</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 16°</Text>
                    </View>
                    <View style={styles.timeScrollElem}>
                        <Text>7 pm</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 14°</Text>
                    </View>
                    <View style={styles.timeScrollElem}>
                        <Text>8 pm</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 13°</Text>
                    </View>
                    <View style={styles.timeScrollElem}>
                        <Text>9 pm</Text>
                        <Feather name="circle" size={30} color="rgb(13,30,93)"/>
                        <Text> 12°</Text>
                    </View>
                </ScrollView>
                </View>
            <ScrollView
            horizontal={true}
            >
                <DayCard
                    day="Saturday"
                    temperature="18°"
                />
                <DayCard
                    day="Sunday"
                    temperature="21°"
                />
                <DayCard
                    day="Monday"
                    temperature="19°"
                />
                <DayCard
                    day="Tuesday"
                    temperature="18°"
                />
                <DayCard
                    day="Wednesday"
                    temperature="20°"
                />
            </ScrollView>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
    }, 
    header:{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "baseline",
        flexDirection: "row",
        padding:20,
    },
    headerCenter:{
        alignItems: "center", 
    },
    headerRight:{
        alignItems: "flex-end"
    },
    headerLeft:{
        justifyContent: "flex-start"
    },
    cityName:{
        fontSize: 40,
        fontWeight: "600",
    }, 
    content:{
        backgroundColor: "white"
    },
    date: {
        flex: 0,
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
    },
    forecast: {
        flex: 0,
        fontSize: 18,
        paddingTop: 10,
        fontWeight: "400",
        textAlign: "center",
    },
    temperature: {
        flex: 0,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "baseline",
        flexDirection: "row",
        padding:20,
        margin: 30,
    },
    temperatureText:{
        fontWeight: "900",
        fontSize: 90,
        paddingBottom: 10,
    },
    timeScroll:{    
          
    },
    timeScrollElem:{
        justifyContent: "space-between",
        paddingLeft: 50,
    },
    dayScroll:{

    },
})

export default Details;