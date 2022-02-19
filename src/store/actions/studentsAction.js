import {
	STUDENT_LOGIN_FAIL,
	STUDENT_LOGIN_REQUEST,
	STUDENT_LOGIN_SUCCESS,
    STUDENT_REGISTER_FAIL,
    STUDENT_REGISTER_REQUEST,
    STUDENT_REGISTER_SUCCESS,
} from "../constants/constants";
import axios from "axios";
const API_URL = "http://localhost:4000";
export const studentAuth = (email, password) => async (dispatch) => {
    
	try {
		dispatch({
			type: STUDENT_LOGIN_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/student/login`,
			{ email: email, password: password },
			config
		);
		dispatch({
			type: STUDENT_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("studentInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: STUDENT_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const studentRegister = (email, password, name) => async (dispatch) => {
    console.log(email);
	try {
		dispatch({
			type: STUDENT_REGISTER_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/student/register`,
			{ email: email, password: password, name: name },
			config
		);
		console.log(data);
		dispatch({
			type: STUDENT_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: STUDENT_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("studentInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: STUDENT_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};