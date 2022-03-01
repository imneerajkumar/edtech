import axios from "axios";
import {
	ADD_LECTURE_REQUEST,
	ADD_LECTURE_FAIL,
	ADD_LECTURE_SUCCESS,
} from "../constants/constants";
const API_URL = "http://localhost:4000";

export const addLecture = (details) => async (dispatch, getState) => {
	try {
		const educatorInfo = getState().educatorAuthReducer.educatorInfo;
		// console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: educatorInfo.token,
			},
		};
		dispatch({ type: ADD_LECTURE_REQUEST });
		const { data } = axios.post(`${API_URL}/api/lectures/add`, details, config);
		console.log(data);
		dispatch({ type: ADD_LECTURE_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: ADD_LECTURE_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
