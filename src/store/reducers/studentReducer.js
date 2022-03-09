import { STUDENT_FAIL, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT, STUDENT_REGISTER_FAIL, STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS, STUDENT_REQUEST, STUDENT_SUCCESS } from "../constants/constants";


export const studentAuthReducer=(state={},action)=>{
   switch (action?.type) {
			case STUDENT_LOGIN_REQUEST:
				return { loading: true };
			case STUDENT_LOGIN_SUCCESS:
				return { loading: false, studentInfo: action.payload };
			case STUDENT_LOGIN_FAIL:
				return { loading: false, error: action.payload };
			case STUDENT_LOGOUT:
				return {};
			default:
				return state;
		}
}


export const studentRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case STUDENT_REGISTER_REQUEST:
			return { loading: true };
		case STUDENT_REGISTER_SUCCESS:
			return { loading: false, studentInfo: action.payload };
		case STUDENT_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const studentFetch = (state = {}, action) => {
	switch (action.type) {
		case STUDENT_REQUEST:
			return { loading: true };
		case STUDENT_SUCCESS:
			return { loading: false, studentDetails: action.payload };
		case STUDENT_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};