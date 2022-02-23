import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { logout } from "../store/actions/studentsAction";
import { logoutEducator } from "../store/actions/educatorAction";
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
				{/* <button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#nav-header"
					aria-controls="nav-header"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button> */}
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
									{/* <li>
										<Link to="/admin">Admin</Link>
									</li> */}
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

			<div class={`mobile-menu ${click&&"open"} `}>
				<div class="menu-close " onClick={()=>setClick(false)}>
					<i class="icofont-close-line"></i>
				</div>

				<div class="mobile-top">
					<p>
						<i class="flaticon-phone-call"></i>{" "}
						<a href="tel:9702621413">(970) 262-1413</a>
					</p>
					<p>
						<i class="flaticon-email"></i>{" "}
						<a href="mailto:address@gmail.com">address@gmail.com</a>
					</p>
				</div>

				<div class="mobile-sign-in-up">
					<ul>
						<li>
							<a class="sign-in" href="login.html">
								Sign In
							</a>
						</li>
						<li>
							<a class="sign-up" href="register.html">
								Sign Up
							</a>
						</li>
					</ul>
				</div>

				<div class="mobile-menu-items">
					<ul class="nav-menu">
						<li class="active">
							<a href="index.html">Home</a>
						</li>
						<li class="menu-item-has-children">
							<span class="mobile-menu-expand"></span>
							<a href="/">All Course</a>
							<ul class="sub-menu" style={{display: "none"}}>
								<li>
									<a href="courses.html">Courses</a>
								</li>
								<li>
									<a href="courses-details.html">Courses Details</a>
								</li>
							</ul>
						</li>
						<li class="menu-item-has-children">
							<span class="mobile-menu-expand"></span>
							<a href="/">Pages </a>
							<ul class="sub-menu" style={{display: "none"}}>
								<li>
									<a href="about.html">About</a>
								</li>
								<li>
									<a href="register.html">Register</a>
								</li>
								<li>
									<a href="login.html">Login</a>
								</li>
								<li>
									<a href="faq.html">FAQ</a>
								</li>
								<li>
									<a href="404-error.html">404 Error</a>
								</li>
								<li>
									<a href="after-enroll.html">After Enroll</a>
								</li>
								<li>
									<a href="courses-admin.html">
										Instructor Dashboard (Course List)
									</a>
								</li>
								<li>
									<a href="overview.html">Instructor Dashboard (Performance)</a>
								</li>
								<li>
									<a href="students.html">Students</a>
								</li>
								<li>
									<a href="reviews.html">Reviews</a>
								</li>
								<li>
									<a href="engagement.html">Course engagement</a>
								</li>
								<li>
									<a href="traffic-conversion.html">Traffic &amp; conversion</a>
								</li>
								<li>
									<a href="messages.html">Messages</a>
								</li>
							</ul>
						</li>
						<li class="menu-item-has-children">
							<span class="mobile-menu-expand"></span>
							<a href="/">Blog</a>
							<ul class="sub-menu" style={{display: "none"}}>
								<li class="menu-item-has-children">
									<span class="mobile-menu-expand"></span>
									<a href="/">Blog</a>
									<ul class="sub-menu" style={{display: "none"}}>
										<li>
											<a href="blog-grid.html">Blog</a>
										</li>
										<li>
											<a href="blog-left-sidebar.html">Blog Left Sidebar</a>
										</li>
										<li>
											<a href="blog-right-sidebar.html">Blog Right Sidebar</a>
										</li>
									</ul>
								</li>
								<li class="menu-item-has-children">
									<span class="mobile-menu-expand"></span>
									<a href="/">Blog Details</a>
									<ul class="sub-menu" style={{display: "none"}}>
										<li>
											<a href="blog-details-left-sidebar.html">
												Blog Details Left Sidebar
											</a>
										</li>
										<li>
											<a href="blog-details-right-sidebar.html">
												Blog Details Right Sidebar
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li>
					</ul>
				</div>

				<div class="mobile-social">
					<ul class="social">
						<li>
							<a href="/">
								<i class="flaticon-facebook"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="flaticon-twitter"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="flaticon-skype"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="flaticon-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
