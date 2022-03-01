import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutEducator } from "../../store/actions/educatorAction";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiMail, FiHeart, FiEye } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from "@mui/material";
import Footer from '../Footer';

function Messages(props) {
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
						<Link to="/admin">
							<img src="assets/images/menu-icon/icon-4.png" alt="Icon" />
						</Link>
					</div>
				</div>
				{/* <!-- Sidebar Wrapper End --> */}

				<div className="page-content-wrapper py-0">
					{/* <!-- Admin Tab Menu Start --> */}
					<div className="nav flex-column nav-pills admin-tab-menu">
						<a className="active" href="/messages">
							Question & Answer <span>3</span>
						</a>
						<a href="/messages">Featured Question</a>
						<a href="/messages">
							Message <span>4</span>
						</a>
						<a href="/messages">Assigment’s</a>
						<a href="/messages">Announcement’s</a>
					</div>
					{/* <!-- Admin Tab Menu End --> */}

					{/* <!-- Page Content Wrapper Start --> */}
					<div className="main-content-wrapper pb-0">
						<div className="container-fluid">
							{/* <!-- Admin Top Bar Start --> */}
							<div className="admin-top-bar flex-wrap">
								<div className="top-bar-filter">
									<ul className="filter-check">
										<li>
											<div className="courses-select">
												<select className="nice-select">
													<option data-display="All Courses">
														All Courses
													</option>
													<option value="1">option</option>
													<option value="2">option</option>
													<option value="3">option</option>
													<option value="4">option</option>
												</select>
											</div>
										</li>
										<li>
											<input type="checkbox" id="unread" />
											<label for="unread">
												<span></span> Unread (2)
											</label>
										</li>
										<li>
											<input type="checkbox" id="answer1" />
											<label for="answer1">
												<span></span> No Top Answer
											</label>
										</li>
										<li>
											<input type="checkbox" id="answer2" />
											<label for="answer2">
												<span></span> No Answer
											</label>
										</li>
										<li>
											<input type="checkbox" id="answer3" />
											<label for="answer3">
												<span></span> No Instructor Answer
											</label>
										</li>
									</ul>
								</div>

								<div className="top-bar-filter-right">
									<div className="newest-select">
										<select className="nice-select">
											<option data-display="Newest First">Newest First</option>
											<option value="1">Oldest First</option>
										</select>
									</div>
								</div>
							</div>
							{/* <!-- Admin Top Bar End -->

                        <!-- Question & Answer End --> */}
							<div className="question-answer">
								<div className="row">
									<div className="col-xl-4">
										{/* <!-- Answer User List Start --> */}
										<div className="answer-user-list">
											{/* <!-- Single User Start --> */}
											<div className="single-user active">
												<div className="user-author">
													<img
														src="assets/images/author/author-12.jpg"
														alt="Author"
													/>
												</div>
												<div className="user-content">
													<h6 className="name">Natosha Sibley</h6>
													<p>Woolentor and woocommerce</p>
												</div>
											</div>
											{/* <!-- Single User End -->

                                        <!-- Single User Start --> */}
											<div className="single-user">
												<div className="user-author">
													<img
														src="assets/images/author/author-13.jpg"
														alt="Author"
													/>
												</div>
												<div className="user-content">
													<h6 className="name">Alison Hunter</h6>
													<p>Woolentor and woocommerce</p>
												</div>
											</div>
											{/* <!-- Single User End -->

                                        <!-- Single User Start --> */}
											<div className="single-user">
												<div className="user-author">
													<img
														src="assets/images/author/author-14.jpg"
														alt="Author"
													/>
												</div>
												<div className="user-content">
													<h6 className="name">Mabel Alvarez</h6>
													<p>Woolentor and woocommerce</p>
												</div>
											</div>
											{/* <!-- Single User End -->

                                        <!-- Single User Start --> */}
											<div className="single-user">
												<div className="user-author">
													<img
														src="assets/images/author/author-15.jpg"
														alt="Author"
													/>
												</div>
												<div className="user-content">
													<h6 className="name">Preston Farmer</h6>
													<p>Woolentor and woocommerce</p>
												</div>
											</div>
											{/* <!-- Single User End --> */}
										</div>
										{/* <!-- Answer User List End --> */}
									</div>
									<div className="col-xl-8">
										{/* <!-- Answer Message Wrapper Start --> */}
										<div className="answer-message-wrapper">
											<ul>
												<li>
													{/* <!-- Single Message Start --> */}
													<div className="single-message">
														<div className="message-author">
															<div className="author-images">
																<img
																	src="assets/images/author/author-12.jpg"
																	alt="Author"
																/>
															</div>
															<div className="author-content">
																<h6 className="name">
																	<strong>Natosha Sibley</strong>{" "}
																	<span className="time">
																		Asked: March 28, 2021
																	</span>
																</h6>
																<h4 className="title">
																	How do the online demos and trial downloads
																	differ?
																</h4>
															</div>
															<div className="meta">
																<span className="view">
																	<i>
																		<FiEye />
																	</i>{" "}
																	526 Views
																</span>
																<span className="answer"> Answer</span>
															</div>
														</div>
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been the
															industry's standard dummy text ever since the
															1500s when an unknown printer took a galley of
															type and scrambled it to make specimen book has
															survived not only five centuries.
														</p>
													</div>
													{/* <!-- Single Message End --> */}

													<ul className="message-replay">
														<li>
															{/* <!-- Single Message Start --> */}
															<div className="single-message">
																<div className="message-author">
																	<div className="author-images">
																		<img
																			src="assets/images/author/author-16.jpg"
																			alt="Author"
																		/>
																	</div>
																	<div className="author-content">
																		<h6 className="name">
																			<strong>Ashley Reeves</strong>{" "}
																			<span className="instructor">
																				Instructor
																			</span>
																		</h6>
																		<span className="time">
																			Asked: March 28, 2021
																		</span>
																	</div>
																	<div className="meta">
																		<span className="answer">Answer</span>
																	</div>
																</div>
																<p>
																	Lorem Ipsum is simply dummy text of the
																	printing and typesetting industry. Lorem Ipsum
																	has been the industry's standard dummy text
																	ever since the 1500s when an unknown printer
																	took a galley of type and scrambled it to make
																	specimen book has survived not only five
																	centuries.
																</p>
															</div>
															{/* <!-- Single Message End --> */}
														</li>
													</ul>
												</li>
												<li>
													{/* <!-- Single Message Start --> */}
													<div className="single-message">
														<div className="message-author">
															<div className="author-images">
																<img
																	src="assets/images/author/author-12.jpg"
																	alt="Author"
																/>
															</div>
															<div className="author-content">
																<h6 className="name">
																	<strong>Natosha Sibley</strong>
																</h6>
																<span className="time">
																	Asked: March 28, 2021
																</span>
															</div>
															<div className="meta">
																<span className="answer">Answer</span>
															</div>
														</div>
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been the
															industry's standard dummy text ever since the
															1500s when an unknown printer took a galley of
															type and scrambled it to make specimen book has
															survived not only five centuries.
														</p>
													</div>
													{/* <!-- Single Message End --> */}
												</li>
											</ul>

											<a className="loadmore" href="/">
												Loard more 22 answer
											</a>

											<form action="#">
												<div className="message-form">
													<div className="auhtor">
														<img
															src="assets/images/author/author-16.jpg"
															alt="Author"
														/>
													</div>
													<div className="message-input">
														<textarea placeholder="Post a public answer"></textarea>

														<div className="message-btn">
															<button className="btn btn-hover-primary">
																Cancel
															</button>
															<button className="btn btn-primary btn-hover-dark">
																Submit
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
										{/* <!-- Answer Message Wrapper End --> */}
									</div>
								</div>
							</div>
							{/* <!-- Question & Answer End --> */}
						</div>
					</div>
					{/* <!-- Page Content Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Courses Admin End --> */}
			<Footer />
		</div>
	);
}

export default Messages;