/** @format */

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, { useState } from "react";
//import { TouchableOpacity } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Action";
import { auth } from "../firebase/Firebase";

const Signup = ({ navigation }) => {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const pressHandler = () => {
		if (email === "" || password === "") {
			setError("Please fill all the fields");
		} else {
			auth.createUserWithEmailAndPassword(email, password).then(() => {
				navigation.navigate("Login");
			}).catch(error => {			
				setError(error.message);
			});
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.error}>{error}</Text>
			<TextInput
				style={styles.inputField}
				placeholder='Please Enter Email'
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<TextInput
				style={styles.inputField}
				placeholder='Please Enter Password'
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Text style={styles.text} onPress={pressHandler}>
				Submit
			</Text>
		</View>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		alignItems: "center",
		justifyContent: "center",
	},
	inputField: {
		width: "90%",
		borderColor: "#000",
		borderWidth: 2,
		padding: 15,
		borderRadius: 10,
		margin: 10,
	},
	text: {
		width: "90%",
		fontSize: 18,
		backgroundColor: "black",
		color: "white",
		padding: 12,
		textAlign: "center",
		borderRadius: 10,
		margin: 10,
		fontWeight: "bold",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		margin: 10,
	},
	error: {
		color: "red",
		fontSize: 18,
		margin: 10,

	},
});
