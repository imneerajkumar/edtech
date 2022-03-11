import {
	ADD_FEEDBACK_REQUEST,ADD_FEEDBACK_SUCCESS,ADD_FEEDBACK_FAIL
} from "../constants/constants";

export const addFeedbackReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_FEEDBACK_REQUEST:
			return { loading: true, success: false, error: null };
		case ADD_FEEDBACK_SUCCESS:
			return { loading: false, success: true};
		case ADD_FEEDBACK_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
