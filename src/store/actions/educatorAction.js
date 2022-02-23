import {
    EDUCATOR_LOGIN_FAIL,
    EDUCATOR_LOGIN_REQUEST, EDUCATOR_LOGIN_SUCCESS, EDUCATOR_LOGOUT, EDUCATOR_REGISTER_FAIL, EDUCATOR_REGISTER_REQUEST, EDUCATOR_REGISTER_SUCCESS,
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
		localStorage.setItem("Educator Info", JSON.stringify(data));
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


export const educatorRegister = (email, password, name) => async (dispatch) => {
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
			{ email: email, password: password, name: name },
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
