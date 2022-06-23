import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens/index";
import { colors } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.secondary : colors.primary,
        },
        headerTintColor: isIOS ? colors.black : colors.white,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
