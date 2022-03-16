import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	studentAuthReducer,
	studentFetch,
	studentRegisterReducer,
} from "./reducers/studentReducer";
import {
	educatorAuthReducer,
	educatorFetch,
	educatorFetchList,
	educatorRegisterReducer,
} from "./reducers/educatorReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { addCourseReducer, fetchCourseReducer } from "./reducers/courseReducer";
import {
	addLectureReducer,
	getLectureList,
	removeLecture,
} from "./reducers/lectureReducers";
import { addFeedbackReducer, fetchFeedbackForInstructorReducer } from "./reducers/feedbackReducer";
const middleware = [thunk];
const reducer = combineReducers({
	studentAuthReducer: studentAuthReducer,
	educatorAuthReducer: educatorAuthReducer,
	studentRegisterReducer: studentRegisterReducer,
	educatorRegisterReducer: educatorRegisterReducer,
	addCourseReducer: addCourseReducer,
	addLectureReducer: addLectureReducer,
	getLectureList: getLectureList,
	removeLecture: removeLecture,
	educatorFetch: educatorFetch,
	studentFetch: studentFetch,
	addFeedbackReducer: addFeedbackReducer,
	fetchCourseReducer: fetchCourseReducer,
	fetchFeedbackForInstructorReducer: fetchFeedbackForInstructorReducer,
	educatorFetchList: educatorFetchList,
});


const studentInfofromStorage = localStorage.getItem("studentInfo")
	? JSON.parse(localStorage.getItem("studentInfo"))
	: null;

const educatorInfofromStorage = localStorage.getItem("educatorInfo")
	? JSON.parse(localStorage.getItem("educatorInfo"))
	: null;
const initialState = {
	educatorAuthReducer: {
		educatorInfo: educatorInfofromStorage,
	},
	studentAuthReducer:{
        studentInfo:studentInfofromStorage
    }
};


const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
