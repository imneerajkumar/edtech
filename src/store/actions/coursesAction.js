import axios from "axios";
import {
	ADD_COURSE_FAIL,
	ADD_COURSE_REQUEST,
	ADD_COURSE_SUCCESS,
} from "../constants/constants";
const API_URL = "http://localhost:4000";

export const addCourse = (details) => async (dispatch, getState) => {
	try {
		const educatorInfo = getState().educatorAuthReducer.educatorInfo;
        // console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: educatorInfo.token,
			},
		};
		dispatch({ type: ADD_COURSE_REQUEST });
		const { data } = axios.post(`${API_URL}/api/courses/add`, details, config);
        console.log(data);
		dispatch({ type: ADD_COURSE_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: ADD_COURSE_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
