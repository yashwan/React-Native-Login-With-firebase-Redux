/** @format */

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
//import { TouchableOpacity } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Action";
import Toast from "react-native-toast-message";
import { auth } from "../firebase/Firebase";
const Login = ({ navigation }) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const pressHandler = () => {
		if (email === "" || password === "") {
			Toast.show({
				text1: "Please fill all the fields",
				position: "bottom",
				type: "error",
			});
		} else {
			auth
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					navigation.replace("Home");
					setEmail("");
					setPassword("");
					dispatch(login());
				})
				.catch((error) => {
					Toast.show({
						text1: error.message,
						position: "top",
						type: "error",
					});
				});
		}
	};

	return (
		<View style={styles.container}>
			<Toast
				ref={(ref) => {
					Toast.setRef(ref);
				}}
			/>
			<Text
				style={{
					fontSize: 30,
					fontWeight: "bold",
					color: "red",
					marginBottom: 20,
				}}>
				N E T F L I X
			</Text>
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
			<TouchableOpacity
				style={styles.text}
				onPress={pressHandler}
				activeOpacity={0.5}>
				<Text
					style={{
						color: "white",
						fontSize: 18,
						fontWeight: "bold",
						textAlign: "center",
					}}>
					Login
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.text}
				onPress={() => navigation.navigate("Signup")}
				activeOpacity={0.5}>
				<Text
					style={{
						color: "white",
						fontSize: 18,
						fontWeight: "bold",
						textAlign: "center",
					}}>
					Create Account
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

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
		marginTop: 10,
	},
	text: {
		width: "90%",
		fontSize: 18,
		backgroundColor: "black",

		padding: 12,

		borderRadius: 10,
		margin: 5,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		margin: 10,
	},
});
