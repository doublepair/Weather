import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Touchable} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/actions"

//my components 
import Greetings from "../components/Greetings";
import AddCity from "../components/AddCity";
import CityCard_1 from "../components/CityCard_1";
import CityCard_2 from "../components/CityCard_2";
import CityCard_3 from "../components/CityCard_3";

const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const {data, error } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(getWeather("London"));
    }, [dispatch])

    const [temperature, setTemperature] = useState((data.main.temp -273.15).toFixed(0));
    const [city, setCity] = useState("London");
    const [forecast, setForecast] = useState(data.weather[0].icon)

    //to change with api's data
    let dayNum = new Date().getDay();
    let dateNum = new Date().getDate();
    let monthNum = new Date().getMonth();
    let hours = (new Date().getHours());
    let minutes = new Date().getMinutes();
    if (minutes in [0,1,2,3,4,5,6,7,8,9]){
        minutes = "0" + minutes;
    }
    let dayName = "";
    switch(dayNum){
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 0:
            dayName = "Sunday";
            break;
    }
    let monthName = "";
    switch( monthNum ){
        case 0:
            monthName = "january";
            break;
        case 1:
            monthName = "february";
            break;
        case 2:
            monthName = "march";
            break;
        case 3:
            monthName = "april";
            break;
        case 4:
            monthName = "may";
            break;
        case 5:
            monthName = "june";
            break;
        case 6:
            monthName = "july";
            break;
        case 7:
            monthName = "august";
            break;
        case 8:
            monthName = "september";
            break;
        case 9:
            monthName = "october";
            break;
        case 10:
            monthName = "november";
            break;
        case 11:
            monthName = "december";
            break;
    }

    return (
        <SafeAreaView style={styles.homeContainer}>
            <Greetings name={"Mario"} />
            <AddCity />
            <View style={styles.cardsContainer}>
                <TouchableOpacity
                onPress={
                    () => navigation.navigate(
                      'Details',
                )}>
                    <CityCard_1 
                        city={city}
                        temperature={temperature}
                        bgColor={"rgb(75,105,168)"}//to change on different weather
                        dayName = {dayName}
                        day = {dateNum}
                        month = {monthName}
                        hours = {hours}
                        minutes = {minutes}
                        forecast = {forecast}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={
                    () => navigation.navigate(
                      'Details',
                )}>
                    <CityCard_2 />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={
                    () => navigation.navigate(
                      'Details' 
                )}>
                    <CityCard_3 />
                </TouchableOpacity>
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