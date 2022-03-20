import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Download from "../Download";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollButton from "../ScrollButton";
import { useDispatch } from "react-redux";
import { addFeedback } from "../../store/actions/feedbackAction";
const Feedback = () => {
	const [scrollState, setScrollState] = useState(false);
	// const [name, setName] = useState();
	// const [feedback, setFeedback] = useState();
	// const [email, setEmail] = useState();
	// const [instructorName, setInstructorName] = useState();
	const [details, setDetails] = useState({
		feedback: "",
		name: "",
		email: "",
		userName: "",
	});
	const dispatch = useDispatch();
	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			var scroll = window.pageYOffset;
			if (scroll <= 100) {
				setScrollState(false);
			} else {
				setScrollState(true);
			}
		});
	});
	const navigate = useNavigate();

	const feedbackHandle = (e) => {
		e.preventDefault();

		dispatch(addFeedback(details));

		navigate("/classes");
		setDetails({
			feedback: "",
			name: "",
			email: "",
			userName: "",
		});
	};
	return (
		<>
			{/* {loading || EducatorLoading ? (
				<Loader />
			) : ( */}
			<div className="main-wrapper">
				{/* <!-- Header Section Start --> */}
				<Navbar scrollState={scrollState} />
				{/* <!-- Overlay Start --> */}
				<div className="overlay"></div>
				{/* <!-- Overlay End -->

						<!-- Page Banner Start --> */}
				<div className="section page-banner">
					<img
						className="shape-2"
						src="assets/images/shape/shape-23.png"
						alt="Shape"
					/>

					<div className="container">
						{/* <!-- Page Banner Start --> */}
						<div className="page-banner-content">
							<ul className="breadcrumb">
								<li>
									<a href="/">Home</a>
								</li>
								<li className="active">Feedback</li>
							</ul>
							<h2 className="title">
								Feedback <span>Form</span>
							</h2>
						</div>
						{/* <!-- Page Banner End --> */}
					</div>

					{/* <!-- Shape Icon Box Start --> */}
					<div className="shape-icon-box">
						<img
							className="icon-shape-1 "
							src="assets/images/shape/shape-5.png"
							alt="Shape"
						/>

						<div className="box-content">
							<div className="box-wrapper">
								<FiBookOpen color="#fff" size={50} />
							</div>
						</div>

						<img
							className="icon-shape-2"
							src="assets/images/shape/shape-6.png"
							alt="Shape"
						/>
					</div>
					{/* <!-- Shape Icon Box End --> */}

					<img
						className="shape-3"
						src="assets/images/shape/shape-24.png"
						alt="Shape"
					/>

					<img
						className="shape-author"
						src="assets/images/author/author-11.jpg"
						alt="Shape"
					/>
				</div>
				{/* <!-- Page Banner End -->

						<!-- Register & Login Start --> */}
				<div className="section section-padding">
					<div className="container">
						{/* <!-- Register & Login Wrapper Start --> */}
						<div className="register-login-wrapper">
							<div className="row align-items-center">
								<div className="col-lg-6">
									{/* <!-- Register & Login Images Start --> */}
									<div className="register-login-images">
										<div className="shape-1">
											<img src="assets/images/shape/shape-26.png" alt="Shape" />
										</div>

										<div
											className="images "
											style={{
												height: "520px",
												display: "flex",
												alignItems: "center",
											}}
										>
											<img
												src="assets/images/register-login.png"
												alt="Register Login"
											/>
										</div>
									</div>
									{/* <!-- Register & Login Images End --> */}
								</div>
								<div className="col-lg-6">
									{/* <!-- Register & Login Form Start --> */}
									<div className="register-login-form">
										{/* {(error || educatorError) && (
												<Message
													variant="danger"
													children={error ? error : educatorError}
												/>
											)} */}

										<h3 className="title">
											Feedback <span>Now</span>
										</h3>

										<div className="form-wrapper">
											<form onSubmit={feedbackHandle}>
												{/* <!-- Single Form Start --> */}
												<div className="single-form">
													<input
														required
														type="text"
														placeholder="Name"
														value={details.name}
														style={{ textTransform: "capitalize" }}
														autoCapitalize="words"
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, name: e.target.value };
															})
														}
													/>
												</div>
												{/* <!-- Single Form End --> */}
												{/*  <!-- Single Form Start --> */}
												<div className="single-form">
													<input
														required
														type="email"
														placeholder="Email"
														value={details.email}
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, email: e.target.value };
															})
														}
													/>
												</div>
												<div className="single-form">
													<input
														required
														type="text"
														placeholder="Instructor username"
														value={details.userName}
														onChange={(e) =>
															setDetails((prev) => {
																return {
																	...prev,
																	instructorName: e.target.value,
																};
															})
														}
													/>
												</div>

												{/* <!-- Single Form End -->
																						<!-- Single Form Start --> */}
												<div className="single-form">
													<textarea
														required
														type="text"
														placeholder="Feedback"
														value={details.feedback}
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, feedback: e.target.value };
															})
														}
													/>
												</div>
												{/* <!-- Single Form End -->
																						<!-- Single Form Start --> */}

												{/* <div style={{ marginTop: 10 }}>
														{message && (
															<Message variant="danger">{message}</Message>
														)}
													</div> */}
												{/* <!-- Single Form End -->
																						<!-- Single Form Start --> */}
												<div className="single-form">
													<button
														className="btn btn-primary btn-hover-dark w-100"
														// onClick={() => setIsStudent(true)}
													>
														Submit
													</button>
													<button
														className="btn btn-secondary btn-outline w-100"
														onClick={() => navigate("/")}
													>
														Skip
													</button>
												</div>
												{/* <!-- Single Form End --> */}
											</form>
										</div>
									</div>
									{/* <!-- Register & Login Form End --> */}
								</div>
							</div>
						</div>
						{/* <!-- Register & Login Wrapper End --> */}
					</div>
				</div>
				{/* <!-- Register & Login End --> */}
				<Download />
				<ScrollButton scrollState={scrollState} />
				<Footer />
			</div>
			{/* )} */}
		</>
	);
};

export default Feedback;
