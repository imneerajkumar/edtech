import axios from "axios";
import {
	ADD_COURSE_FAIL,
	ADD_COURSE_REQUEST,
	ADD_COURSE_SUCCESS,
    GET_COURSES_FAIL,
    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
} from "../constants/constants";
const API_URL = "https://edulearning1.herokuapp.com";

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

export const fetchCourses = () => async (dispatch, getState) => {
    console.log("Caled");
	try {
		// const studentInfo = getState().studentAuthReducer.studentInfo;
		// console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				// Authorization: studentInfo.token,
			},
		};
		dispatch({ type: GET_COURSES_REQUEST });
		const { data } = await axios.get(`${API_URL}/api/courses/get`, config);
		// console.log(data);
		dispatch({ type: GET_COURSES_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_COURSES_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
