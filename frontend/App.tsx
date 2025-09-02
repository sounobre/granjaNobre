import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CompraScreen from "./src/screens/CompraScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#0B1220" },
            headerTintColor: "#F8FAFC",
            tabBarStyle: { backgroundColor: "#0B1220", borderTopColor: "#1E293B" },
            tabBarActiveTintColor: "#FFFFFF",
            tabBarInactiveTintColor: "#94A3B8",
            headerTitleAlign: "center",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Compra" component={CompraScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}