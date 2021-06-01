import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

const AddCity = () => {
  return (
    <TouchableOpacity>
    <View style={styles.addCity}>
      <Text style={styles.text}>
        <Feather name="plus-square" size={30} color="rgb(13,30,93)"/> Add place
      </Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addCity: {
    alignItems: 'center',
    padding: 25,
    top: 10,
  },
  text: {
    fontSize: 20,
    color: "rgb(13,30,93)",
  },
})

export default AddCity;