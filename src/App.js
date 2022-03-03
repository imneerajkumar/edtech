import React from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import PrivacyPolicy from "./Components/Policy/Policy";
import ErrorPage from "./Components/Error/ErrorPage";
import Courses from "./Components/Courses/Courses";
import CourseDetail from "./Components/Courses/CourseDetail";
import AfterEnroll from "./Components/Courses/AfterEnroll";
import Blog from "./Components/Blogs/Blog";
import BlogDetail from "./Components/Blogs/BlogDetail";
import ScrollToTop from "./ScrollToTop";
import About from "./Components/About/About";
import Contact from "./Components/About/Contact";
import JitsiMeetComponent from "./Components/jitsimeet/videoconference";
import ConferenceForm from "./Components/Admin/ConferenceForm";
import CourseAdmin from "./Components/Admin/CourseAdmin";
import Engagement from "./Components/Admin/Engagement";
import Messages from "./Components/Admin/Messages";
import Overview from "./Components/Admin/Overview";
import Reviews from "./Components/Admin/Reviews";
import Students from "./Components/Admin/Students";
import { useSelector } from "react-redux";
import AddCourse from "./Components/Admin/AddCourse";
import ViewConference from "./Components/jitsimeet/ViewConference";

function App() {
	const educatorAuthReducer = useSelector((state) => state.educatorAuthReducer);
	const { educatorInfo } = educatorAuthReducer;
	const studentAuthReducer = useSelector((state) => state.studentAuthReducer);
	const { studentInfo } = studentAuthReducer;

	function isLogin() {
		if (studentInfo || educatorInfo) {
			return true;
		} else {
			return false;
		}
	}

	function isLoginE() {
		if (educatorInfo) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route
					exact
					path="/courses"
					element={isLogin() ? <Courses /> : <Navigate to="/login" />}
				/>
				<Route exact path="/course-details" element={<CourseDetail />} />
				<Route
					exact
					path="/after-enroll"
					element={isLogin() ? <AfterEnroll /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/add-course"
					element={isLoginE() ? <AddCourse /> : <Navigate to="/login" />}
				/>
				<Route exact path="/blogs" element={<Blog />} />
				<Route exact path="/blog-detail" element={<BlogDetail />} />
				<Route exact path="/policy" element={<PrivacyPolicy />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/contact" element={<Contact />} />

				<Route
					exact
					path="/createMeet"
					element={isLoginE() ? <ConferenceForm /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/classes"
					element={isLogin() ? <ViewConference /> : <Navigate to="/login" />}
				/>
				<Route 
					exact 
					path="/meet/:id" 
					element={isLoginE() || isLogin() ? <JitsiMeetComponent /> : <Navigate to="/login" />}
				/>

				<Route
					exact
					path="/admin"
					element={isLoginE() ? <CourseAdmin /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/engagement"
					element={isLoginE() ? <Engagement /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/messages"
					element={isLoginE() ? <Messages /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/overview"
					element={isLoginE() ? <Overview /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/reviews"
					element={isLoginE() ? <Reviews /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/students"
					element={isLoginE() ? <Students /> : <Navigate to="/login" />}
				/>
				<Route exact path="/" element={<Home />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
