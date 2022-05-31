import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transacción" component={TransactionScreen} />
          <Tab.Screen name="Búsqueda" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
