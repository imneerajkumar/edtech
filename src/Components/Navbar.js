import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { logout } from "../store/actions/studentsAction";
import { logoutEducator } from "../store/actions/educatorAction";
import {
	FiInstagram,
	FiTwitter,
	FiFacebook,
	FiPhoneCall,
	FiMail,
	FiArrowLeftCircle,
} from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import "./Navbar.css";

const Navbar = ({ scrollState }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const educatorAuthReducer = useSelector((state) => state.educatorAuthReducer);
	const { educatorInfo, loading, error } = educatorAuthReducer;
	const [avatar, setAvatar] = useState("");
	const studentAuthReducer = useSelector((state) => state.studentAuthReducer);
    const [click,setClick]=useState(false)
	const {
		studentInfo,
		loading: loadStudent,
		error: errorStudent,
	} = studentAuthReducer;
	// const data=localStorage.getItem()
	useEffect(() => {
		if (studentInfo) {
			setAvatar(studentInfo.name.toUpperCase());
		}
		if (educatorInfo) {
			setAvatar(educatorInfo.name.toUpperCase());
		}
	}, [educatorInfo, studentInfo, loading, loadStudent, avatar]);

	const logoutHandle = () => {
		if (studentInfo) {
			dispatch(logout());
		}
		if (educatorInfo) {
			dispatch(logoutEducator());
		}
		navigate("/");
	};
	// console.log(avatar);
	return (
		<div>
			<div className="header-section">
				{/* <!-- Header Top Start --> */}
				<div className="header-top d-none d-lg-block">
					<div className="container">
						{/* <!-- Header Top Wrapper Start --> */}

						{/* <!-- Header Top Wrapper End --> */}
					</div>
				</div>

				<div
					id="nav-header"
					className={`header-main ${scrollState && "sticky"}`}
				>
					<div className="container">
						{/* <!-- Header Main Start --> */}
						<div className="header-main-wrapper">
							{/* <!-- Header Logo Start --> */}
							<div className="header-logo">
								<Link to="/">
									<img src="assets/images/logo.png" alt="Logo" />
								</Link>
							</div>
							{/* <!-- Header Logo End --> */}

							{/* <!-- Header Menu Start --> */}
							<div className="header-menu d-none d-lg-block">
								<ul className="nav-menu">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/courses">Courses</Link>
									</li>
									<li>
										<Link to="/blogs">Blogs</Link>
									</li>
									<li>
										<Link to="/contact">Contact Us</Link>
									</li>
								</ul>
							</div>
							{/* <!-- Header Menu End --> */}

							{/* <!-- Header Sing In & Up Start --> */}
							<div className="header-sign-in-up d-none d-lg-block">
								{avatar.length !== 0 ? (
									<Dropdown>
										<Avatar
											sx={{
												bgcolor: "#309255",
												width: "60px",
												height: "60px",
												fontSize: "1.5rem",
											}}
										>
											<Dropdown.Toggle
												variant="success"
												id="dropdown-autoclose-true"
												style={{ display: "flex", justifyContent: "center" }}
											>
												{avatar.slice(0, 1)}
											</Dropdown.Toggle>
										</Avatar>
										<Dropdown.Menu>
											<Dropdown.Item onClick={logoutHandle}>
												Logout
											</Dropdown.Item>
											<Dropdown.Item>Another action</Dropdown.Item>
											<Dropdown.Item>Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								) : (
									<ul>
										<li>
											<Link className="sign-in" to="/login">
												Sign In
											</Link>
										</li>
										<li>
											<Link className="sign-up" to="/register">
												Sign Up
											</Link>
										</li>
									</ul>
								)}
							</div>
							{/* <!-- Header Sing In & Up End --> */}

							{/* <!-- Header Mobile Toggle Start --> */}
							<div className="header-toggle d-lg-none">
								<div className="menu-toggle" onClick={()=>{setClick(true)}}>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							{/* <!-- Header Mobile Toggle End --> */}
						</div>
						{/* <!-- Header Main End --> */}
					</div>
				</div>
				{/* <!-- Header Main End --> */}
			</div>

			<div className={`mobile-menu ${click&&"open"} `}>
				<div className="menu-close " onClick={()=>setClick(false)}>
					<FiArrowLeftCircle size={22} color="#309255" />
				</div>

				<div className="mobile-top">
					<p
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
							padding: "3px",
						}}
					>
						<FiMail size={22} color="#309255" />
						<a
							style={{ marginTop: 0, marginBottom: "2px" }}
							href="mailto:address@gmail.com"
						>
							address@gmail.com
						</a>
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
							padding: "3px",
						}}
					>
						<FiPhoneCall color="#309255" size={22} />
						<a
							style={{ marginTop: 0, marginBottom: "2px" }}
							href="tel:9702621413"
						>
							(970) 262-1413
						</a>
					</p>
				</div>

				<div className="mobile-sign-in-up">
					{avatar.length !== 0 ? (
					<Dropdown>
						<Avatar
							sx={{
								bgcolor: "#309255",
								width: "60px",
								height: "60px",
								fontSize: "1.5rem",
							}}
						>
							<Dropdown.Toggle
								variant="success"
								id="dropdown-autoclose-true"
								style={{ display: "flex", justifyContent: "center" }}
							>
								{avatar.slice(0, 1)}
							</Dropdown.Toggle>
						</Avatar>
						<Dropdown.Menu>
							<Dropdown.Item onClick={logoutHandle}>
								Logout
							</Dropdown.Item>
							<Dropdown.Item>Another action</Dropdown.Item>
							<Dropdown.Item>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				) : (
					<ul>
						<li>
							<Link className="sign-in" to="/login">
								Sign In
							</Link>
						</li>
						<li>
							<Link className="sign-up" to="/register">
								Sign Up
							</Link>
						</li>
					</ul>
				)}
				</div>

				<div className="mobile-menu-items">
					<ul className="nav-menu">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/courses">Courses</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>

				<div className="mobile-social">
					<ul className="social">			
						<li>
							<a href="/">
								<FiFacebook size={24} />
							</a>
						</li>
						<li>
							<a href="/">
								<FiTwitter size={24} />
							</a>
						</li>
						<li>
							<a href="/">
								<AiOutlineSkype size={26} />{" "}
							</a>
						</li>
						<li>
							<a href="/">
								<FiInstagram size={22} />
							</a>
						</li>								
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
