import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import PrivacyPolicy from "./Components/Policy/Policy";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/policy" element={<PrivacyPolicy />} />
				<Route exact path="/" element={<Home />}/>
			</Routes>
		</Router>
	);
}

export default App;
