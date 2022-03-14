import {
	ADD_COURSE_FAIL,
	ADD_COURSE_REQUEST,
	ADD_COURSE_SUCCESS,
    GET_COURSES_FAIL,
    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
} from "../constants/constants";

export const addCourseReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_COURSE_REQUEST:
			return { loading: true, success: false, error: null };
		case ADD_COURSE_SUCCESS:
			return { loading: false, success: true};
		case ADD_COURSE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const fetchCourseReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_COURSES_REQUEST:
			return { loading: true, success: false, error: null };
		case GET_COURSES_SUCCESS:
			return { loading: false, success: true,coursesData:action.payload };
		case GET_COURSES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
