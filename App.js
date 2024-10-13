import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomeScreen from "./components/main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ball from "./components/magic8";
import Octicons from "@expo/vector-icons/Octicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Log from "./components/sub/log";
import { DataProvider } from "./components/Context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </DataProvider>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs} // Directly pass the component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Log"
        component={Log} // Directly pass the component
        options={{ title: "History" }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Normal"
        component={Ball} // Directly pass the component
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Log")}>
              <Octicons
                name="log"
                size={20}
                color="black"
                style={{ marginRight: 34 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Custom"
        component={HomeScreen} // Already correctly passed
        options={{
          headerRight: () => (
            <Octicons
              name="log"
              size={20}
              color="black"
              style={{ marginRight: 34 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
