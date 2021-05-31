import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CityCard = () =>  {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
      <LinearGradient
        colors={['rgba(255,255,255,0.5)', 'transparent']}
        style={styles.gradient}
      >
        <Text>co</Text>
      </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

export default CityCard;

const styles = StyleSheet.create({
  gradient:{
    borderRadius: 20,
    height: 120,
  },
  card: {
    backgroundColor:"rgb(75,105,168)",
    height: 120,
    borderRadius: 20,
    margin: 20,
  },
})
