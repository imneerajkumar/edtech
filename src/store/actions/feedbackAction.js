import { ADD_FEEDBACK_FAIL, ADD_FEEDBACK_REQUEST, ADD_FEEDBACK_SUCCESS, GET_INSTRUCTORS_FEEDBACK_FAIL, GET_INSTRUCTORS_FEEDBACK_REQUEST, GET_INSTRUCTORS_FEEDBACK_SUCCESS } from "../constants/constants";
import axios from "axios";
const API_URL = "http://localhost:4000";

export const addFeedback = (details) => async (dispatch,getState) => {
	try {
		try {
			// const educatorInfo = getState().educatorAuthReducer.educatorInfo;
			// console.log(educatorInfo);
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			dispatch({ type: ADD_FEEDBACK_REQUEST });
			const { data } = await axios.post(
				`${API_URL}/api/feedback/add`,
				details,
				config
			);
			console.log(data);
			dispatch({ type: ADD_FEEDBACK_SUCCESS, payload: data });
		} catch (e) {
			dispatch({
				type: ADD_FEEDBACK_FAIL,
				payload:
					e.response && e.response.data.message
						? e.response.data.message
						: e.message,
			});
		}
	} catch (e) {}
};

export const fetchFeedbackForInstructors = (userName) => async (dispatch, getState) => {
	console.log("Called");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				// Authorization: studentInfo.token,
			},
		};
		dispatch({ type: GET_INSTRUCTORS_FEEDBACK_REQUEST });
		const { data } = await axios.get(`${API_URL}/api/feedback/getdetails/:${userName}`, config);
		// console.log(data);
		dispatch({ type: GET_INSTRUCTORS_FEEDBACK_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_INSTRUCTORS_FEEDBACK_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
