import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Meeting from './Components/meeting/Video'
// import Meetpage from "./Components/meeting/Videocall";
// import VideoConference from './Components/jitsimeet/videoconference'
import JitsiMeetComponent from "./Components/jitsimeet/videoconference";
import CourseAdmin from "./Components/Admin/CourseAdmin";
import Engagement from "./Components/Admin/Engagement";
import Messages from "./Components/Admin/Messages";
import Overview from "./Components/Admin/Overview";
import Reviews from "./Components/Admin/Reviews";
import Students from "./Components/Admin/Students";
import Traffic from "./Components/Admin/Traffic";

function App() {
	return (       
		<Router>
			<ScrollToTop />
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/courses" element={<Courses />} />
				<Route exact path="/course-details" element={<CourseDetail />} />
				<Route exact path="/after-enroll" element={<AfterEnroll />} />
				<Route exact path="/blogs" element={<Blog />} />
				<Route exact path="/blog-detail" element={<BlogDetail />} />
				<Route exact path="/policy" element={<PrivacyPolicy />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/meeting" element={<Meeting />} />
				<Route exact path="/meet" element={<JitsiMeetComponent />} />
				<Route exact path="/admin" element={<CourseAdmin />} />
				<Route exact path="/engagement" element={<Engagement />} />
				<Route exact path="/messages" element={<Messages />} />
				<Route exact path="/overview" element={<Overview />} />
				<Route exact path="/reviews" element={<Reviews />} />
				<Route exact path="/students" element={<Students />} />
				<Route exact path="/traffic" element={<Traffic />} />
				<Route exact path="/" element={<Home />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
