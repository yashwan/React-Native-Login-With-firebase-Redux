/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Home from "./componentsAfterLogin/Home";
const AfterLogin = () => {
	const Stack = createNativeStackNavigator();
	
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</>
	);
};

export default AfterLogin;

const styles = StyleSheet.create({});
