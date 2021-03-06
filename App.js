import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux"
import store from "./redux/store"
//nav icons
import { Feather } from "@expo/vector-icons"
//screens
import Home from "./screens/Home";
import Details from "./screens/Details";
import Search from "./screens/Search";
import Location from "./screens/Search";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          title: "Details",
          headerShown: false, //custom header
        }}
      />
    </Stack.Navigator>
  );
}

function SearchStack(){
  return(
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        //-------//
      }}
    >
      <Stack.Screen 
        name="Search"
        component={Search}
        options={{
          title: "Search",
        }} 
      />
    </Stack.Navigator>
  )
}

function LocationStack(){
  return(
    <Stack.Navigator
      initialRouteName="Location"
      screenOptions={{
        //-------//
      }}
    >
      <Stack.Screen 
        name="Location"
        component={Location}
        options={{
          title: "Location",
        }} 
      />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName = "Home"
        activeTintColor = ""
        tabBarOptions={{
          activeTintColor: "black",
          style:{
            flex: 0,
            borderBottomColor: "blue",
            height: 100,
            backgroundColor: "white",
            borderRadius: 25,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 60,
            padding: 20,
            position: "relative",
            borderWidth: 1,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000000',
            shadowOffset: { width: 2, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
          }
        }}
      >
        <Tab.Screen 
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel:"___________",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name = "SearchStack" 
          component={SearchStack}
          options={{
            tabBarLabel: '___________',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={30} color="black" />
            ),
          }}  
        />
        <Tab.Screen 
          name = "LocationStack" 
          component={LocationStack} 
          options={{
            tabBarLabel: '___________',
            tabBarIcon: ({ color, size }) => (
              <Feather name="map-pin" size={30} color="black" />
            ),
          }}  
        />
      </Tab.Navigator>
      <StatusBar style={"auto"} />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
