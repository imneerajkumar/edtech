import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	studentAuthReducer,
	studentRegisterReducer,
} from "./reducers/studentReducer";
import {
	educatorAuthReducer,
	educatorRegisterReducer,
} from "./reducers/educatorReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
const reducer = combineReducers({
	studentAuthReducer: studentAuthReducer,
	educatorAuthReducer: educatorAuthReducer,
	studentRegisterReducer: studentRegisterReducer,
	educatorRegisterReducer: educatorRegisterReducer,
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
