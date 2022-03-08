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
const API_URL = "https://edulearning1.herokuapp.com";

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
		const { data } = await axios.post(
			`${API_URL}/api/lectures/add`,
			details,
			config
		);
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
		const { data } = await axios.get(`${API_URL}/api/lectures/get`, config);
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

export const removeLectureByMeetingId =
	(meetingId) => async (dispatch, getState) => {
        console.log(meetingId,"ACTIONS");
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
			const { data } = await axios.delete(
				`${API_URL}/api/lectures/deletelecture/${meetingId}`,
				
				config
			);
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
