import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        //style
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          //city cards
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
        //Style
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
        //Style
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
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName = "Home"
        tabBarOptions={{
          activeTintColor: "yellow",
        }}
      >
        <Tab.Screen 
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel:"Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name = "SearchStack" 
          component={SearchStack}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={30} color="black" />
            ),
          }}  
        />
        <Tab.Screen 
          name = "LocationStack" 
          component={LocationStack} 
          options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({ color, size }) => (
              <Feather name="map-pin" size={30} color="black" />
            ),
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
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
