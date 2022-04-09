/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StrictMode, useState, useEffect } from "react";
import { auth } from "./firebase/Firebase";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";
import { LogBox } from "react-native";

import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/Store";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";
import Wrap from "./Wrap";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
			
				<StrictMode>
				
					<Wrap />
				</StrictMode>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
