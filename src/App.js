import "./App.css";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
	return (
		<Router>
			<Routes>
				<Route  path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/" element={<Home />}/>
			</Routes>
		</Router>
		//<Home />
		//<Register/>
	);
}

export default App;
