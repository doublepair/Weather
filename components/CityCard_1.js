import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CityCard_1 = () =>  {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
      <LinearGradient
        colors={['rgba(255,255,255,0.5)', 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardContentLeft}>
            {/* replace */}
            <Text style={styles.cityName}>Roma</Text> 
            <Text style={styles.date}>Monday 20, June</Text>
            <Text style={styles.hour}>9.00 pm</Text>
          </View>
          <View style={styles.cardContentCenter}>
            {/* replace */}
            <Image
              style={{width:100, height: 100}}
              source={require("../assets/icon_TEST.png")}
            />
          </View>
          <View style={styles.cardContentRight}>
            {/* replace */}
            <Text style={styles.temperature}>20°</Text>
          </View>
        </View>
      </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

export default CityCard_1;

const styles = StyleSheet.create({
  gradient:{
    borderRadius: 25,
    height: 130,
  },
  card: {
    backgroundColor:"rgb(75,105,168)",
    height: 130,
    borderRadius: 25,
    margin: 20,
  },
  cardContent: {
    flex: 1,
    margin: 20,
  },
  cardContentLeft:{
    alignItems:'flex-start',
    marginRight: 250,
  },
  cardContentCenter:{
    bottom: 80,
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
})
