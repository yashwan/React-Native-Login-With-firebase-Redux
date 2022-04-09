/** @format */

import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./componentsBeforeLogin/Login";
import Signup from "./componentsBeforeLogin/Signup";
import { auth } from "./firebase/Firebase";
import Home from "./componentsAfterLogin/Home";
import Splash from "./componentsAfterLogin/Splash";

const BeforeLogin = () => {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen
					name='Splash'
					component={Splash}
					options={{
						headerShown: false,
						headerStyle: {
							backgroundColor: "#f4511e",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 25,
							textAlign: "center",
						},
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{
						headerShown: false,
						headerStyle: {
							backgroundColor: "#f4511e",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 25,
							textAlign: "center",
						},
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name='Signup'
					component={Signup}
					options={{
						headerShown: true,
						headerStyle: {
							backgroundColor: "#f4511e",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 25,
							textAlign: "center",
						},
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						headerShown: true,
						headerStyle: {
							backgroundColor: "black",
							
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 32,
							textAlign: "center",
							color:"white"
						},
						headerTitleAlign: "center",
					}}
				/>
			</Stack.Navigator>
		</>
	);
};

export default BeforeLogin;
const styles = StyleSheet.create({});
