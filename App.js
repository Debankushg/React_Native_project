import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { Text, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1b011c",
          },
          headerTintColor: "#e5d3e6",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            title: "List of Names",
            headerRight: () => (
              <View
                style={{
                  flexDirection: "column",
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#080112",
                    textAlign: "center",
                    backgroundColor: "#8e8cb8",
                    borderRadius:100,
                    padding:18,
                    lineHeight: 16,
                  }}
                >
                  {route.params.name.charAt(0).toUpperCase()}
                </Text>
                {/* <Text style={{ fontSize: 20, color: "#ebf20c" }}>
                  {route.params.email}
                </Text> */}
              </View>
            ),
          })}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
