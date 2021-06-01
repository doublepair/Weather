import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DayCard = ( props ) =>  {
  return (
      <View style={styles.card}>
      <LinearGradient
        colors={['rgba(255,255,255,0.2)', 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.cardContent}>
        <Text style={styles.cityName}>{props.day}</Text> 
            {/* replace */}
            <Text style={styles.temperature}>{props.temperature}</Text>
            <Image
              style={{width:100, height: 100}}
              source={require("../assets/icon_TEST.png")}
            />
        </View>
      </LinearGradient>
      </View>
  );
}

export default DayCard;

const styles = StyleSheet.create({
  gradient:{
    borderRadius: 25,
    height: 240,
    width: 150,
  },
  card: {
    backgroundColor:"rgb(75,105,168)",
    height: 240,
    width: 150,
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
    flexDirection: "column",
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
    fontSize: 20,
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
