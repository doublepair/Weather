import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CityCard_2 = () =>  {
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
            <Text style={styles.cityName}>Turin</Text> 
            <Text style={styles.date}>Friday 20, september</Text>
            <Text style={styles.hour}>3.38 pm</Text>
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

export default CityCard_2;

const styles = StyleSheet.create({
  gradient:{
    borderRadius: 25,
    height: 140,
  },
  card: {
    backgroundColor:"rgb(103,110,130)",
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