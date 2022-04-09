/** @format */

import * as types from "./ActionType";
import { auth, db } from "../firebase/Firebase";
import Toast from "react-native-toast-message";
import { setWarningFilter } from "react-native/Libraries/LogBox/Data/LogBoxData";
const SIGNUP_STARTS = () => {
	return {
		type: types.SIGNUP_STARTS,
	};
};

const SIGNUP_SUCCESS = (user) => {
	return {
		type: types.SIGNUP_SUCCESS,
		payload: user,
	};
};
const SIGNUP_FAILURE = (error) => {
	return {
		type: types.SIGNUP_FAILURE,
		payload: error.message,
	};
};
const LOGIN_STARTS = () => {
	return {
		type: types.LOGIN_STARTS,
	};
};
const LOGIN_SUCCESS = () => {
	return {
		type: types.LOGIN_SUCCESS,
		
	};
};
const LOGIN_FAILURE = (error) => {
	return {
		type: types.LOGIN_FAILURE,
		payload: error.message,
	};
};
const LOGOUT = () => {
	return {
		type: types.LOGOUT,
	};
};
export const signup = (email, password, { navigation }) => {
	return (dispatch) => {
		dispatch(SIGNUP_STARTS());
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch(SIGNUP_SUCCESS(user));
			})
			.catch((error) => {
				dispatch(SIGNUP_FAILURE(error));
			});
	};
};

export const login = () => {
	return (dispatch) => {
		<Toast
			ref={(ref) => {
				setRef(ref);
			}}
		/>;
		dispatch(LOGIN_STARTS());
		dispatch(LOGIN_SUCCESS());
		
	};
};
export const logout = () => {
	return (dispatch) => {
		auth.signOut();
		dispatch(LOGOUT());
	};
};