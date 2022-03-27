import {
    EDUCATOR_FAIL,
	EDUCATOR_LIST_FAIL,
	EDUCATOR_LIST_REQUEST,
	EDUCATOR_LIST_SUCCESS,
	EDUCATOR_LOGIN_FAIL,
	EDUCATOR_LOGIN_REQUEST,
	EDUCATOR_LOGIN_SUCCESS,
	EDUCATOR_LOGOUT,
	EDUCATOR_REGISTER_FAIL,
	EDUCATOR_REGISTER_REQUEST,
	EDUCATOR_REGISTER_SUCCESS,
    EDUCATOR_REQUEST,
    EDUCATOR_SUCCESS,
} from "../constants/constants";
import axios from "axios";
const API_URL = "https://edulearning1.herokuapp.com/";
export const educatorAuth = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: EDUCATOR_LOGIN_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/educator/login`,
			{ email: email, password: password },
			config
		);
		dispatch({
			type: EDUCATOR_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("educatorInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: EDUCATOR_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const educatorRegister = (details) => async (dispatch) => {
	try {
		dispatch({
			type: EDUCATOR_REGISTER_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/educator/register`,
			details,
			config
		);
		console.log(data);
		dispatch({
			type: EDUCATOR_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: EDUCATOR_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("educatorInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: EDUCATOR_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const logoutEducator = () => (dispatch) => {
	localStorage.removeItem("educatorInfo");
	dispatch({
		type: EDUCATOR_LOGOUT,
	});
};

export const fetchEducator = (id) => async (dispatch) => {
	try {
		dispatch({
			type: EDUCATOR_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${API_URL}/api/educator/getdetails/${id}`,
			config
		);
		dispatch({
			type: EDUCATOR_SUCCESS,
			payload: data,
		});
		
	} catch (error) {
		dispatch({
			type: EDUCATOR_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const fetchEducatorList = () => async (dispatch) => {
	try {
		dispatch({
			type: EDUCATOR_LIST_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${API_URL}/api/educator/get`,
			config
		);
		dispatch({
			type: EDUCATOR_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: EDUCATOR_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
