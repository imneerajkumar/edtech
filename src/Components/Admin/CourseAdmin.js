import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutEducator } from "../../store/actions/educatorAction";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut, FiMail, FiHeart } from "react-icons/fi";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";

function CourseAdmin(props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const educatorAuthReducer = useSelector((state) => state.educatorAuthReducer);
	const { educatorInfo, loading } = educatorAuthReducer;
	const [avatar, setAvatar] = useState("");

	useEffect(() => {
		if (educatorInfo) {
			setAvatar(educatorInfo.name.toUpperCase());
		}
	}, [educatorInfo, loading, avatar]);

	const logoutHandle = () => {
		if (educatorInfo) {
			dispatch(logoutEducator());
		}
		navigate("/");
	};

	return (
		<div className="main-wrapper main-wrapper-02">
			{/* <!-- Login Header Start --> */}
			<div
				className="section login-header"
				style={{ backgroundColor: "#309255" }}
			>
				{/* <!-- Login Header Wrapper Start --> */}
				<div className="login-header-wrapper navbar navbar-expand">
					{/* <!-- Header Logo Start --> */}
					<div className="login-header-logo">
						<a href="/">
							<img src="assets/images/logo-icon.png" alt="Logo" />
						</a>
					</div>
					{/* <!-- Header Logo End --> */}

					{/* <!-- Header Search Start --> */}
					<div className="login-header-search dropdown">
						<div className="search-input dropdown-menu"></div>
					</div>
					{/* <!-- Header Search End --> */}

					{/* <!-- Header Action Start --> */}
					<div className="login-header-action ml-auto">
						<div className="dropdown">
							<button className="action notification" data-bs-toggle="dropdown">
								<FiMail color="white" />
							</button>
							<div className="dropdown-menu dropdown-notification">
								<ul className="notification-items-list">
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>Martin</strong> has added a{" "}
													<strong>customer</strong> Successfully
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>Jennifer</strong> purchased Light Dashboard
													2.0.
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-danger text-white">
											<i>
												<FiHeart />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>Robin</strong> marked a{" "}
													<strong>ticket</strong> as unsolved.
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>David</strong> purchased Light Dashboard 1.0.
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong> James.</strong> has added a
													<strong>customer</strong> Successfully
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
								</ul>
								<span className="all-notification">See all notifications</span>
							</div>
						</div>

						<span className="action author">
							<Avatar
								sx={{
									bgcolor: "#fff",
									color: "#309255",
									width: "60px",
									height: "60px",
									fontSize: "1.5rem",
								}}
							>
								{avatar.slice(0, 1)}
							</Avatar>
						</span>

						<div className="dropdown">
							<button className="action more" data-bs-toggle="dropdown">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<ul className="dropdown-menu">
								<li>
									<button style={{ border: "none", backgroundColor: "#fff" }}>
										<AiOutlineUser />
										{"   "}
										{educatorInfo.name}
									</button>
								</li>
								<li>
									<button
										style={{ border: "none", backgroundColor: "#fff" }}
										onClick={() => navigate("/messages")}
									>
										<FiMail />
										{"   "}Inbox
									</button>
								</li>
								<li>
									<button
										style={{ border: "none", backgroundColor: "#fff" }}
										onClick={logoutHandle}
									>
										<FiLogOut />
										{"   "}Log Out
									</button>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- Header Action End --> */}
				</div>
				{/* <!-- Login Header Wrapper End --> */}
			</div>
			{/* <!-- Login Header End --> */}

			{/* <!-- Courses Admin Start --> */}
			<div className="section overflow-hidden position-relative" id="wrapper">
				{/* <!-- Sidebar Wrapper Start --> */}
				<div className="sidebar-wrapper" style={{ backgroundColor: "#309255" }}>
					<div className="menu-list">				
						<Link to="/overview">
							<img src="assets/images/menu-icon/icon-1.png" alt="Icon" />
						</Link>
						<Link to="/students">
							<img src="assets/images/menu-icon/icon-2.png" alt="Icon" />
						</Link>
						<Link to="/reviews">
							<img src="assets/images/menu-icon/icon-5.png" alt="Icon" />
						</Link>
						<Link to="/engagement">
							<img src="assets/images/menu-icon/icon-3.png" alt="Icon" />
						</Link>
						<Link to="/admin" className="active">
							<img src="assets/images/menu-icon/icon-4.png" alt="Icon" />
						</Link>
					</div>
				</div>
				{/* <!-- Sidebar Wrapper End --> */}

				{/* <!-- Page Content Wrapper Start --> */}
				<div className="page-content-wrapper">
					<div className="container-fluid custom-container">
						{/* <!-- Message Start --> */}
						<div className="message">
							<div className="message-icon">
								<img src="assets/images/menu-icon/icon-6.png" alt="" />
							</div>
							<div className="message-content">
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic.
								</p>
							</div>
						</div>
						{/* <!-- Message End --> */}

						{/* <!-- Admin Courses Tab Start --> */}
						<div className="admin-courses-tab">
							<h3 className="title">Courses</h3>

							<div className="courses-tab-wrapper">
								<div className=" courses-select">
									<select className="nice-select">
										<option data-display="Newest First">Newest First</option>
										<option value="1">Oldest First</option>
									</select>
								</div>
								<ul className="nav">
									<li>
										<button
											className="active"
											data-bs-toggle="tab"
											data-bs-target="#tab1"
										>
											1
										</button>
									</li>
									<li>
										<button data-bs-toggle="tab" data-bs-target="#tab2">
											2
										</button>
									</li>
									<li>
										<button data-bs-toggle="tab" data-bs-target="#tab3">
											3
										</button>
									</li>
								</ul>
								<div className="tab-btn">
									<Link
										to="/add-course"
										className="btn btn-primary btn-hover-dark"
									>
										New Course
									</Link>
								</div>
							</div>
						</div>
						{/* <!-- Admin Courses Tab End -->

                    <!-- Admin Courses Tab Content Start --> */}
						<div className="admin-courses-tab-content">
							<div className="tab-content">
								<div className="tab-pane fade show active" id="tab1">
									{/* <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End --> */}
								</div>
								<div className="tab-pane fade" id="tab2">
									{/* <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End --> */}
								</div>
								<div className="tab-pane fade" id="tab3">
									{/* <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End -->

                                {/* <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End -->

                                <!-- Courses Item Start --> */}
									<div className="courses-item">
										<div className="item-thumb">
											<a href="/course-details">
												<img
													src="assets/images/courses/admin-courses-01.jpg"
													alt="Courses"
												/>
											</a>
										</div>

										<div className="content-title">
											<div className="meta">
												<p className="action">Live</p>
												<p className="action">Free</p>
												<p className="action">Public</p>
											</div>
											<h3 className="title">
												<a href="/course-details">
													Build An eCommerce Site With WooCommerce and
													WooLentor.
												</a>
											</h3>
										</div>

										<div className="content-wrapper">
											<div className="content-box">
												<p>Earned</p>
												<span className="count">$5,68.00</span>
											</div>

											<div className="content-box">
												<p>Enrollment’s</p>
												<span className="count">1,852</span>
											</div>

											<div className="content-box">
												<p>Course Rating</p>
												<span className="count">
													4.5
													<span className="rating-star">
														<span
															className="rating-bar"
															style={{ width: "80%" }}
														></span>
													</span>
												</span>
											</div>

											<div className="courses-select">
												<select className="nice-select">
													<option data-display="This Month">This Month</option>
													<option value="1">This Year</option>
													<option value="2">This Week</option>
												</select>
											</div>
										</div>
									</div>
									{/* <!-- Courses Item End --> */}
								</div>
							</div>
						</div>
						{/* <!-- Admin Courses Tab Content End --> */}
					</div>
				</div>
				{/* <!-- Page Content Wrapper End --> */}
				{/* <!-- Courses Admin End --> */}
			</div>
			<Footer />
		</div>
	);
}

export default CourseAdmin;
