import React, { useState } from "react";
import { Text, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <View>
        <StatusBar
          backgroundColor="#1b011c"
          barStyle="default"
          hidden={false}
        />
      </View>
      <MainNavigation />
    </NavigationContainer>
  );
}
