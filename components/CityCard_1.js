import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const CityCard_1 = ({  bgColor, city, dayName, day, month, hours, minutes, forecast, temperature }) =>  {
  return (
      <View style={styles.card}>
      <LinearGradient
        colors={['rgba(255,255,255,0.5)', 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardContentLeft}>
            {/* replace */}
            <Text style={styles.cityName}>{city}</Text> 
            <Text style={styles.date}>{dayName} {day}, {month}</Text>
            <Text style={styles.hour}>{hours}.{minutes}</Text>
          </View>
          <View style={styles.cardContentCenter}>
            {/* replace */}
            <Image
              style={{width:100, height: 100}}
              source={{ uri: `http://openweathermap.org/img/wn/${forecast}.png` }}
            />
          </View>
          <View style={styles.cardContentRight}>
            {/* replace */}
            <Text style={styles.temperature}>{temperature}°</Text>
          </View>
        </View>
      </LinearGradient>
      </View>
  );
}

export default CityCard_1;

const styles = StyleSheet.create({
  gradient:{
    borderRadius: 25,
    height: 140,
  },
  card: {
    backgroundColor: "rgb(75,105,168)",
    height: 140,
    borderRadius: 25,
    margin: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
    alignItems:"center",
  },
  cardContentLeft:{
    alignItems:'flex-start',
    maxWidth: 90,
  },
  cardContentCenter:{ 
    alignItems:"center",
  },
  cardContentRight:{
    alignItems:"flex-end",
  },
  cityName:{
    color: "#fff",
    fontWeight: "600",
    fontSize: 25,
  },
  date:{
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },
  hour:{
    color: "#fff",
    fontWeight: "300",
    fontSize: 10,
  },
  temperature:{
    color: "#fff",
    fontSize: 45,
    fontWeight: "800",
  },
})
