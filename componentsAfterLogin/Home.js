/** @format */

import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { auth } from "../firebase/Firebase";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Action";
const Home = ({ navigation }) => {
	const dispatch = useDispatch();

	return (
		<View
			style={{
				flex: 1,
			}}>
			<Text>{auth?.currentUser?.email}</Text>
			<Text
				style={styles.textButton}
				onPress={() => {
					auth.signOut();
					dispatch(logout());
					navigation.replace("Login");
				}}>
				Log Out
			</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	textButton: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		backgroundColor: "black",
		padding: 10,
		borderRadius: 10,
		margin: 10,
		textAlign: "center",
	},
});
