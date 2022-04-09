/** @format */

import { View, Text } from "react-native";
import React from "react";

import { StrictMode, useState, useEffect } from "react";
import { auth } from "./firebase/Firebase";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";

const Wrap = () => {
	const use = useSelector((state) => state.user);
	const isAuth = use.isAuthenticated;
    
	
	return (
		<NavigationContainer>
			<BeforeLogin />
		</NavigationContainer>
	);
};

export default Wrap;
