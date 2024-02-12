import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' 
import { Text, FlatList, StyleSheet, View } from "react-native";
import List from "../components/List";
import About from "../components/About";
import Review from "../components/Review";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


function TabNavigator({route}) {
  return (
    <Tab.Navigator
     screenOptions={{
        headerStyle:{
            backgroundColor: "#470801",
        },
        headerTintColor: "#e5d3e6",
        tabBarStyle: { backgroundColor: 'powderblue' },
        tabBarLabelStyle: { fontSize:16,color:"#470801" },
     }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={() => ({
          title: "List of Names",
          headerRight: () => (
            <View
              style={{
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "#ebf20c", backgroundColor: "#470801", }}>
                {route.params?.email}
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen name="Shopping" component={About} />
      <Tab.Screen name="Review" component={Review} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
