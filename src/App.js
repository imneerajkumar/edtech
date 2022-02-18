import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import PrivacyPolicy from "./Components/Policy/Policy";
import ErrorPage from "./Components/Error/ErrorPage";
import Courses from "./Components/Courses/Courses";
import CourseDetail from "./Components/Courses/CourseDetail";
import Blog from "./Components/Blogs/Blog";
import BlogDetail from "./Components/Blogs/BlogDetail";
import ScrollToTop from "./ScrollToTop";
import About from "./Components/About/About";
import Contact from "./Components/About/Contact";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/login"element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/courses" element={<Courses />} />
				<Route exact path="/course-details" element={<CourseDetail />} />
				<Route exact path="/blogs" element={<Blog />} />
				<Route exact path="/blog-detail" element={<BlogDetail />} />
				<Route exact path="/policy" element={<PrivacyPolicy />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/" element={<Home />}/>
				<Route exact path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
