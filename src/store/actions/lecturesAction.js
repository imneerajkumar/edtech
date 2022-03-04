import axios from "axios";
import {
	ADD_LECTURE_REQUEST,
	ADD_LECTURE_FAIL,
	ADD_LECTURE_SUCCESS,
    GET_LECTURE_LIST_REQUEST,
    GET_LECTURE_LIST_SUCCESS,
    GET_LECTURE_LIST_FAIL,
    REMOVE_LECTURE_REQUEST,
    REMOVE_LECTURE_SUCCESS,
    REMOVE_LECTURE_FAIL,
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
		const { data } = await axios.post(`${API_URL}/api/lectures/add`, details, config);
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

export const fetchLectures = () => async (dispatch, getState) => {
	try {
		const studentInfo = getState().studentAuthReducer.studentInfo;
		// console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: studentInfo.token,
			},
		};
		dispatch({ type: GET_LECTURE_LIST_REQUEST });
		const { data } = await axios.get(`${API_URL}/api/lectures/get`,  config);
		// console.log(data);
		dispatch({ type: GET_LECTURE_LIST_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_LECTURE_LIST_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const removeLectureByMeetingId = (details) => async (dispatch, getState) => {
	try {
		const educatorInfo = getState().educatorAuthReducer.educatorInfo;
		// console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: educatorInfo.token,
			},
		};
		dispatch({ type: REMOVE_LECTURE_REQUEST });
		const { data } = axios.get(`${API_URL}/api/lectures/deletelecture`, details,config);
		// console.log(data);
		dispatch({ type: REMOVE_LECTURE_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: REMOVE_LECTURE_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
