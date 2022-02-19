import { EDUCATOR_LOGIN_FAIL, EDUCATOR_LOGIN_REQUEST, EDUCATOR_LOGIN_SUCCESS, EDUCATOR_LOGOUT, EDUCATOR_REGISTER_FAIL, EDUCATOR_REGISTER_REQUEST, EDUCATOR_REGISTER_SUCCESS } from "../constants/constants";

export const educatorAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case EDUCATOR_LOGIN_REQUEST:
			return { loading: true };
		case EDUCATOR_LOGIN_SUCCESS:
			return { loading: false, educatorInfo: action.payload };
		case EDUCATOR_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case EDUCATOR_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const educatorRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case EDUCATOR_REGISTER_REQUEST:
			return { loading: true };
		case EDUCATOR_REGISTER_SUCCESS:
			return { loading: false, educatorInfo: action.payload };
		case EDUCATOR_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};