/** @format */

import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
const Splash = ({ navigation }) => {
	const u = useSelector((state) => state.user);
	const isAuthenticated = u.isAuthenticated;
  console.log(isAuthenticated);
	const [user, setUser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			}
		});
	}, []);

	useEffect(() => {
		if (user && isAuthenticated) {
			navigation.replace("Home");
		} else {
			navigation.replace("Login");
		}
	}, [user, isAuthenticated]);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>N E T F L I X</Text>
			<StatusBar backgroundColor='white' />
		</View>
	);
};

export default Splash;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},
	text: {
		fontSize: 60,
		fontWeight: "bold",
		color: "red",
	},
});
