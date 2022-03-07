import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Download from "../Download";
import { useDispatch, useSelector } from "react-redux";
import { studentRegister } from "../../store/actions/studentsAction";
import { educatorRegister } from "../../store/actions/educatorAction";
import Message from "../message/message";
import { useNavigate } from "react-router-dom";
import ScrollButton from "../ScrollButton";
import Loader from "../Loader/Loader";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../store/constants/firebase";
import { Button, ProgressBar } from "react-bootstrap";
import "./Register.css"
const Register = () => {
	const [scrollState, setScrollState] = useState(false);
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		userImage: "",
		contact: "",
		address: "",
		city: "",
		state: "",
		dob: "",
		gender: "",
	});
	const [isStudent, setIsStudent] = useState(false);
	const educatorAuth = useSelector((state) => state.educatorAuthReducer);
	const {
		loading: EducatorLoading,
		error: educatorError,
		educatorInfo,
	} = educatorAuth;
	const studentAuth = useSelector((state) => state.studentAuthReducer);
	const { loading, error, studentInfo } = studentAuth;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [iImage, setiImage] = useState(null);
	const [iprogress, setIProgress] = useState(0);
	// const [userImage,setUserImage]=useState()
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

	useEffect(() => {
		if (educatorInfo) {
			navigate("/overview");
		}
	}, [navigate, educatorInfo, isStudent]);
	useEffect(() => {
		if (studentInfo) {
			navigate("/courses");
		}
	}, [navigate, studentInfo]);

	const registerHandle = (e) => {
		e.preventDefault();
		if (details.password !== details.confirmPassword) {
			setMessage("Password don't match");
		} else {
			if (isStudent) {
				dispatch(studentRegister(details));
			} else {
				dispatch(educatorRegister(details));
			}
			setDetails({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
				userImage: "",
				contact: "",
				address: "",
				city: "",
				state: "",
				dob: "",
				gender: "",
			});
            setIProgress(0)
			setiImage(null);
		}
	};
	// console.log(details);

	const iImageHanlder = () => {
		const storageRef = ref(storage, `users/${details.name}/${iImage.name}`);
		const uploadTask = uploadBytesResumable(storageRef, iImage);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setIProgress(prog);
			},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					// setUserImage(downloadURL)
					setDetails((prev) => {
						return { ...prev, userImage: downloadURL };
					});
				});
			}
		);
	};
	return (
		<>
			{loading || EducatorLoading ? (
				<Loader />
			) : (
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
									<li className="active">Register</li>
								</ul>
								<h2 className="title">
									Registration <span>Form</span>
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
										<div
											className="register-login-images container-img"
											// style={{
											// 	padding: "45px 40px",
											// 	display: "flex",
											// 	alignItems: "center",
                                            //     marginTop:"0"
											// }}
										>
											<div className="shape-1">
												<img
													src="assets/images/shape/shape-26.png"
													alt="Shape"
												/>
											</div>

											<div className="images">
												<img
                                                className="student-img"
													// style={{ height: "950px" }}
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
											{(error || educatorError) && (
												<Message
													variant="danger"
													children={error ? error : educatorError}
												/>
											)}

											<h3 className="title">
												Registration <span>Now</span>
											</h3>

											<div className="form-wrapper">
												<form onSubmit={registerHandle}>
													{/* <!-- Single Form Start --> */}
													<div className="single-form">
														<input
															required
															type="text"
															placeholder="Name"
															value={details.name}
															style={{ textTransform: "capitalize" }}
															autocapitalize="words"
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
													<div style={{ marginTop: "20px" }}>
														<label
															htmlFor="Userimage"
															style={{ fontSize: "18px", color: "#309255" }}
														>
															User Image
														</label>

														<input
															type="file"
															id="Userimage"
															className="form-control"
															name="Instructor"
															accept=".jpg,.jpeg,.png"
															// alt='courseImg'
															style={{ marginTop: "10px" }}
															// required
															placeholder="User image"
															onChange={(e) => {
																setiImage(e.target.files[0]);
															}}
														/>
														{iprogress > 0 && iprogress < 100 && (
															<ProgressBar
																striped
																variant="success"
																style={{ marginTop: "10px" }}
																now={iprogress}
															/>
														)}

														<Button
															onClick={iImageHanlder}
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
															{iprogress === 100 ? "Uploaded" : "Upload"}
														</Button>
													</div>
													<div className="single-form">
														<input
															required
															type="number"
                                                            minLength={10}
                                                            maxLength={10}
															placeholder="Contact Number"
															value={details.contact}
															// style={{ textTransform: "capitalize",textAlign:'' }}
															// autocapitalize="words"
															onChange={(e) =>
																setDetails((prev) => {
																	return { ...prev, contact: e.target.value };
																})
															}
														/>
													</div>
													<div className="single-form">
														<input
															required
															type="date"
															placeholder="Date of birth"
															value={details.dob}
															// style={{ textTransform: "capitalize" }}
															// autocapitalize="words"
															onChange={(e) =>
																setDetails((prev) => {
																	return { ...prev, dob: e.target.value };
																})
															}
														/>
													</div>
													<div className="single-form">
														<select
															name="state"
															id="state"
															// className="select"
															style={{
																width: "100%",
																height: "60px",
																padding: "0 25px",
																fontSize: "15px",
																color: "#52565b",
																// -webkit-transition: all 0.3s ease 0s;
																// -o-transition: all 0.3s ease 0s;
																// transition: all 0.3s ease 0s;
																border: "1px solid rgba(48, 146, 85, 0.2)",
																borderRadius: "10px",
																backgroundColor: "#fff",
															}}
															onChange={(e) =>
																setDetails((prev) => {
																	return { ...prev, state: e.target.value };
																})
															}
														>
															<option value="">Select Gender</option>
															<option value="Male">Male</option>
															<option value="Female">Female</option>
															<option value="preferedNotToSay">
																Perfered not to say
															</option>
														</select>
													</div>
													<div className="single-form">
														<input
															required
															type="text"
															placeholder="Address"
															value={details.address}
															// style={{ textTransform: "capitalize" }}
															// autocapitalize="words"
															onChange={(e) =>
																setDetails((prev) => {
																	return { ...prev, address: e.target.value };
																})
															}
														/>
													</div>

													<div className="single-form">
														<select
															name="state"
															id="state"
															// className="select"
															style={{
																width: "100%",
																height: "60px",
																padding: "0 25px",
																fontSize: "15px",
																color: "#52565b",
																// -webkit-transition: all 0.3s ease 0s;
																// -o-transition: all 0.3s ease 0s;
																// transition: all 0.3s ease 0s;
																border: "1px solid rgba(48, 146, 85, 0.2)",
																borderRadius: "10px",
																backgroundColor: "#fff",
															}}
															onChange={(e) =>
																setDetails((prev) => {
																	return { ...prev, state: e.target.value };
																})
															}
														>
															<option value="">Select State</option>
															<option value="Andhra Pradesh">
																Andhra Pradesh
															</option>
															<option value="Andaman and Nicobar Islands">
																Andaman and Nicobar Islands
															</option>
															<option value="Arunachal Pradesh">
																Arunachal Pradesh
															</option>
															<option value="Assam">Assam</option>
															<option value="Bihar">Bihar</option>
															<option value="Chandigarh">Chandigarh</option>
															<option value="Chhattisgarh">Chhattisgarh</option>
															<option value="Dadar and Nagar Haveli">
																Dadar and Nagar Haveli
															</option>
															<option value="Daman and Diu">
																Daman and Diu
															</option>
															<option value="Delhi">Delhi</option>
															<option value="Lakshadweep">Lakshadweep</option>
															<option value="Puducherry">Puducherry</option>
															<option value="Goa">Goa</option>
															<option value="Gujarat">Gujarat</option>
															<option value="Haryana">Haryana</option>
															<option value="Himachal Pradesh">
																Himachal Pradesh
															</option>
															<option value="Jammu and Kashmir">
																Jammu and Kashmir
															</option>
															<option value="Jharkhand">Jharkhand</option>
															<option value="Karnataka">Karnataka</option>
															<option value="Kerala">Kerala</option>
															<option value="Madhya Pradesh">
																Madhya Pradesh
															</option>
															<option value="Maharashtra">Maharashtra</option>
															<option value="Manipur">Manipur</option>
															<option value="Meghalaya">Meghalaya</option>
															<option value="Mizoram">Mizoram</option>
															<option value="Nagaland">Nagaland</option>
															<option value="Odisha">Odisha</option>
															<option value="Punjab">Punjab</option>
															<option value="Rajasthan">Rajasthan</option>
															<option value="Sikkim">Sikkim</option>
															<option value="Tamil Nadu">Tamil Nadu</option>
															<option value="Telangana">Telangana</option>
															<option value="Tripura">Tripura</option>
															<option value="Uttar Pradesh">
																Uttar Pradesh
															</option>
															<option value="Uttarakhand">Uttarakhand</option>
															<option value="West Bengal">West Bengal</option>
														</select>
													</div>
													<div className="single-form">
														<input
															required
															type="text"
															placeholder="City"
															value={details.city}
															onChange={(e) =>
																setDetails((prev) => {
																	return {
																		...prev,
																		city: e.target.value,
																	};
																})
															}
														/>
													</div>
													<div className="single-form">
														<input
															required
															type="password"
															placeholder="Password"
															value={details.password}
															onChange={(e) =>
																setDetails((prev) => {
																	return { ...prev, password: e.target.value };
																})
															}
														/>
													</div>

													<div className="single-form">
														<input
															required
															type="password"
															placeholder="Confirm Password"
															value={details.confirmPassword}
															onChange={(e) =>
																setDetails((prev) => {
																	return {
																		...prev,
																		confirmPassword: e.target.value,
																	};
																})
															}
														/>
													</div>
													<div style={{ marginTop: 10 }}>
														{message && (
															<Message variant="danger">{message}</Message>
														)}
													</div>
													{/* <!-- Single Form End -->
																						<!-- Single Form Start --> */}
													<div className="single-form">
														<button
															className="btn btn-primary btn-hover-dark w-100"
															onClick={() => setIsStudent(true)}
														>
															Create Student account
														</button>
														<button
															className="btn btn-secondary btn-outline w-100"
															onClick={() => setIsStudent(false)}
														>
															Create Educator account
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
			)}
		</>
	);
};

export default Register;
