import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookListScreen from "../screens/BookListScreen";
import BookDetailScreen from "../screens/BookDetailScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BookListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={BookDetailScreen}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
