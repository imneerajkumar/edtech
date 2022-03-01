import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Download from "../Download";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollButton from "../ScrollButton";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";

const ConferenceForm = () => {
	const [scrollState, setScrollState] = useState(false);
	const [details, setDetails] = useState({
		instructorName: "",
		subjectName: "",
		language: "",
		description: "",
		duration: null,
    meetingId: shortid.generate()
	});
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const educatorA = useSelector((state) => state.educatorAuthReducer);
	const { loading, error, educatorInfo } = educatorA;
  console.log(shortid.generate());

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

	const meetingHandler = (e) => {
		e.preventDefault();
    navigate(`/meet/${details.meetingId}`)
	};

	return (
		<div className="main-wrapper">
			{/* <!-- Header Section Start --> */}
			<Navbar scrollState={scrollState} />
			{/* <!-- Overlay Start --> */}
			<div className="overlay"></div>
			{/* <!-- Overlay End --> */}

			{/* <!-- Page Banner Start --> */}
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
							<li className="active">New Meeting</li>
						</ul>
						<h2 className="title">
							New <span>Meeting</span>
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
			{/* <!-- Page Banner End --> */}

			{/* <!-- Register & Login Start --> */}
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

									<div className="images">
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
									<h3 className="title">
										Create <span>Meet</span>
									</h3>

									<div className="form-wrapper">
										<form action="#" onSubmit={meetingHandler}>
											<div className="single-form">
												{" "}
												<input
													type="text"
													required
													placeholder="Instructor Name"
													value={details.instructorName}
													onChange={(e) => {
														setDetails((prev) => {
															return {
																...prev,
																instructorName: e.target.value,
															};
														});
													}}
												/>
											</div>
                      <div className="single-form">
												<input
													type="text"
													required
													placeholder="Subject Name"
													value={details.subjectName}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, subjectName: e.target.value };
														});
													}}
												/>
											</div>
                      <div className="single-form">
												<input
													type="text"
													required
													placeholder="Language"
													value={details.language}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, language: e.target.value };
														});
													}}
												/>
											</div>
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Description"
													value={details.description}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, description: e.target.value };
														});
													}}
												/>
											</div>																				
											<div className="single-form">
												<input
													type="number"
													required
													placeholder="Duration (in hours)"
													value={details.duration}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, duration: e.target.value };
														});
													}}
												/>
											</div>
                      <div className="single-form">
												<input
													value={details.meetingId}
                          readOnly={true}												
												/>
											</div>
											<div className="single-form">
												<button
													className="btn btn-primary btn-hover-dark w-100"
													onClick={meetingHandler}
												>
													New Meeting
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Download />
			<ScrollButton scrollState={scrollState} />
			<Footer />
			{/* <!-- Footer Start  --> */}
		</div>
	);
};

export default ConferenceForm;
