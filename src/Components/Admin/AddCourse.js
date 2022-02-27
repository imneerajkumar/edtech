import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FiBookOpen } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../../store/actions/coursesAction";
import { educatorAuth } from "../../store/actions/educatorAction";
import { studentAuth } from "../../store/actions/studentsAction";
import Download from "../Download";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollButton from "../ScrollButton";
import "./AddCourse.css";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";

const AddCourse = () => {
	const [scrollState, setScrollState] = useState(false);
	const [details, setDetails] = useState({
		instructorName: "",
		instructorImage: "",
		courseName: "",
		courseImage: "",
		curriculum: "",
		level: "",
		language: "",
		description: "",
		duration: 0,
		price: 0,
		lectures: 0,
	});
	const [isStudent, setIsStudent] = useState(false);
	const dispatch = useDispatch();
	const educatorA = useSelector((state) => state.educatorAuthReducer);
	const {
		loading: EducatorLoading,
		error: educatorError,
		educatorInfo,
	} = educatorA;
	const studentA = useSelector((state) => state.studentAuthReducer);
	const { loading, error, studentInfo } = studentA;
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			var scroll = window.pageYOffset;
			if (scroll <= 100) {
				setScrollState(false);
			} else {
				setScrollState(true);
			}
		});
		// if(educatorIn)
	});

	const uploadInstructorImage = async () => {
		const firebaseApp = getApp();
		const storage = getStorage();
		const imagesRef = ref(storage, "instructurName");
		const path = details.instructorImage.split("\\");

		const pathLength = path.length;
		console.log(path);
		const response = await fetch(path[pathLength - 1]);
		const blob = await response.blob();
// console.log(blob);
		const metadata = {
			contentType: "image/jpeg",
		};

		uploadBytes(imagesRef, details.instructorImage,metadata).then((snapshot) => {
			console.log("Uploaded a blob or file!");
		});
	};

	// useEffect(() => {
	// 	if (educatorInfo) {
	// 		navigate("/admin");
	// 	}
	// }, [navigate, educatorInfo, isStudent]);
	// useEffect(() => {
	// 	if (studentInfo) {
	// 		navigate("/courses");
	// 	}
	// }, [navigate, studentInfo]);

	const addCourseHandle = (e) => {
		e.preventDefault();
		// console.log(details);
		dispatch(addCourse(details));
		// console.log(isStudent);
		// if (isStudent) {
		// 	dispatch(studentAuth(email, password));
		// } else {
		// 	dispatch(educatorAuth(email, password));
		// }
		// setEmail("");
		// setPassword("");
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
							<li className="active">Add Course</li>
						</ul>
						<h2 className="title">
							Add <span>Course</span>
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
								<div className="register-login-images add-height">
									<div className="shape-1 spot">
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
										Add <span>Now</span>
									</h3>

									<div className="form-wrapper">
										<form action="#" onSubmit={addCourseHandle}>
											{/* <!-- Single Form Start --> */}
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Course name"
													value={details.courseName}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, courseName: e.target.value };
														});
													}}
												/>
											</div>
											<div className="single-form">
												{" "}
												s
												<input
													type="text"
													required
													placeholder="Instructor name"
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
											<div style={{ marginTop: "20px" }}>
												<label
													htmlFor="Courseimage"
													style={{ fontSize: "18px", color: "#309255" }}
												>
													Course Image
												</label>

												<input
													type="file"
													// alt='courseImg
													id="Courseimage"
													style={{ marginTop: "10px" }}
													className="form-control"
													accept=".jpg,.jpeg,.png"
													// required
													placeholder="Course image"
													value={details.courseImage}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, courseImage: e.target.value };
														});
													}}
												/>
												<Button
													variant="btn btn-secondary btn-outline w-100"
													style={{
														textAlign: "center",
														height: "30px",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														fontSize: "16px",
														padding: "20px 30px",
														marginTop: "10px",
													}}
												>
													Upload
												</Button>
											</div>
											<div style={{ marginTop: "20px" }}>
												<label
													htmlFor="Instructorimage"
													style={{ fontSize: "18px", color: "#309255" }}
												>
													Instructor Image
												</label>

												<input
													type="file"
													id="Instructorimage"
													className="form-control"
													name="Instructor"
													accept=".jpg,.jpeg,.png"
													// alt='courseImg'
													style={{ marginTop: "10px" }}
													// required
													placeholder="Instructor image"
													value={details.instructorImage}
													onChange={(e) => {
														setDetails((prev) => {
															return {
																...prev,
																instructorImage: e.target.value,
															};
														});
													}}
												/>
												<Button
													onClick={uploadInstructorImage}
													variant="btn btn-secondary btn-outline w-100"
													style={{
														textAlign: "center",
														height: "30px",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														fontSize: "16px",
														padding: "20px ",
														marginTop: "10px",
													}}
												>
													Upload
												</Button>
											</div>
											<div className="single-form">
												<input
													type="number"
													required
													placeholder="Price"
													value={details.price}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, price: e.target.value };
														});
													}}
												/>
											</div>
											{/* <!-- Single Form End -->
                                        <!-- Single Form Start --> */}
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
													type="text"
													required
													placeholder="Curriculum"
													value={details.curriculum}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, curriculum: e.target.value };
														});
													}}
												/>
											</div>
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Level"
													value={details.level}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, level: e.target.value };
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
													type="number"
													required
													placeholder="Number of lectures "
													value={details.lectures}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, lectures: e.target.value };
														});
													}}
												/>
											</div>

											{/* <!-- Single Form End -->
                      <!-- Single Form Start --> */}
											<div className="single-form">
												<button
													className="btn btn-primary btn-hover-dark w-100"
													onClick={() => {
														setIsStudent(true);
													}}
												>
													Add Course
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
			{/* <!-- Register & Login End -->*/}

			<Download />
			<ScrollButton scrollState={scrollState} />
			<Footer />
			{/* <!-- Footer Start  --> */}
		</div>
	);
};

export default AddCourse;
