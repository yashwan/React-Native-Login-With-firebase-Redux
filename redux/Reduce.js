/** @format */
import * as types from "./ActionType";
const initialState = {
	loading: false,
	error: null,
	currentUser: null,
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
        case types.SIGNUP_STARTS:
        case types.LOGIN_STARTS:
            return {
                ...state,
                loading: true,
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                
                isAuthenticated: true,
            };
        case types.SIGNUP_FAIL:
        case types.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.LOGOUT:
            return {
                ...state,
                currentUser: null,
                isAuthenticated: false,
            };
        
		default:
			return state;
	}
};
export default userReducer;