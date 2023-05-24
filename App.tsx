import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "./src/screen/ chat";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screen/home";

export type RootStackParamList = {
  home: undefined;
  chatScreen: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="chatScreen"
        component={ChatScreen}
        options={({ route }) => ({ title: route.params?.name })}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
