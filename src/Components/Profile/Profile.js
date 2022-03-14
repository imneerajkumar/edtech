import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Download from "../Download";
import ScrollButton from "../ScrollButton";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../store/constants/firebase";
import { Button, ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducator } from "../../store/actions/educatorAction";
import { fetchStudents } from "../../store/actions/studentsAction";
import Loader from "../Loader/Loader";
import { FiAward } from "react-icons/fi";
import "./Profile.css";

function Profile(props) {
	const [scrollState, setScrollState] = useState(false);
	const [edit, setEdit] = useState(false);
	const [iImage, setiImage] = useState(null);
	const [iprogress, setIProgress] = useState(0);
	const studentInfofromStorage = localStorage.getItem("studentInfo")
		? JSON.parse(localStorage.getItem("studentInfo"))
		: null;

	const educatorInfofromStorage = localStorage.getItem("educatorInfo")
		? JSON.parse(localStorage.getItem("educatorInfo"))
		: null;
	const educatorData = useSelector((state) => state.educatorFetch);
	const { loading: loadingEducator, educatorDetails } = educatorData;

	const studentData = useSelector((state) => state.studentFetch);
	const { loading: loadingStudent, studentDetails } = studentData;
	console.log(educatorDetails);
	const [details, setDetails] = useState({
		name: "",
		email: "",
		userImage: "",
		contact: "",
		address: "",
		city: "",
		state: "",
		dob: "",
		gender: "",
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
	useEffect(() => {
		if (educatorInfofromStorage) {
			dispatch(fetchEducator(educatorInfofromStorage._id));
		}
		if (studentInfofromStorage) {
			dispatch(fetchStudents(studentInfofromStorage._id));
		}
		// if (educatorDetails) {
		// 			setDetails({
		// 				name: educatorDetails?.name,
		// 				email: educatorDetails?.email,
		// 				userImage: educatorDetails?.userImage,
		// 				contact: educatorDetails?.contact,
		// 				address: educatorDetails?.address,
		// 				city: educatorDetails?.city,
		// 				state: educatorDetails?.state,
		// 				dob: educatorDetails?.dob,
		// 				gender: educatorDetails?.gender,
		// 			});
		// 		}
		// 		if (studentDetails) {
		// 			setDetails({
		// 				name: studentDetails?.name,
		// 				email: studentDetails?.email,
		// 				userImage: studentDetails?.userImage,
		// 				contact: studentDetails?.contact,
		// 				address: studentDetails?.address,
		// 				city: studentDetails?.city,
		// 				state: studentDetails?.state,
		// 				dob: studentDetails?.dob,
		// 				gender: studentDetails?.gender,
		// 			});
		// 		}
	}, [dispatch]);

	const handleSubmit = () => {
		//Submit new details
	};

	const handleCancel = () => {
		// Cancel and restore to previous
		setEdit(false);
	};

	const changeImage = () => {
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
					setDetails((prev) => {
						return { ...prev, userImage: downloadURL };
					});
				});
			}
		);
	};

	return (
		<>
			{loadingStudent || loadingEducator ? (
				<Loader />
			) : (
				<div className="main-wrapper">
					<Navbar scrollState={scrollState} />
					<div className="overlay"></div>
					<div className="section page-banner">
						<img
							className="shape-2"
							src="assets/images/shape/shape-23.png"
							alt="Shape"
						/>
						<div className="container">
							<div className="page-banner-content">
								<ul className="breadcrumb">
									<li>
										<a href="/">Home</a>
									</li>
									<li className="active">Profile</li>
								</ul>
								<h2 className="title">
									About{" "}
									<span>
										{educatorDetails
											? educatorDetails.name
											: studentDetails && studentDetails.name}
									</span>
								</h2>
							</div>
						</div>
						<div className="shape-icon-box">
							<img
								className="icon-shape-1 "
								src="assets/images/shape/shape-5.png"
								alt="Shape"
							/>

							<div className="box-content">
								<div className="box-wrapper">
									<FiAward color="#fff" size={"50%"} />
								</div>
							</div>

							<img
								className="icon-shape-2"
								src="assets/images/shape/shape-6.png"
								alt="Shape"
							/>
						</div>
						<img
							className="shape-3"
							src="assets/images/shape/shape-24.png"
							alt="Shape"
						/>
						<img
							className="shape-author user-img"
							src={
								educatorDetails
									? educatorDetails.userImage
									: studentDetails && studentDetails.userImage
							}
							alt="User"
						/>
					</div>

					<div className="section section-padding">
						<div className="container">
							<div className="register-login-wrapper">
								<div className="row align-items-center">
									<div className="col-lg-6">
										<div
											className={`register-login-images ${
												edit ? "add-height" : "edit-height"
											}`}
										>
											<div className="shape-1 spot">
												<img
													src="assets/images/shape/shape-26.png"
													alt="Shape"
												/>
											</div>

											<div className="images">
												<img
													src="assets/images/register-login.png"
													alt="Register Login"
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="">
											<h3 className="title mt-5">
												About <span>Me</span>
											</h3>
											<div className="form-wrapper">
												<div className="single-form">
													<input
														required
														type="text"
														placeholder="Name"
														value={
															!edit
																? educatorDetails
																	? educatorDetails.name
																	: studentDetails && studentDetails.name
																: details.name
														}
														style={{ textTransform: "capitalize" }}
														autoCapitalize="words"
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, name: e.target.value };
															})
														}
														readOnly={!edit}
													/>
												</div>
												<div className="single-form">
													<input
														required
														type="email"
														placeholder="Email"
														value={
															!edit
																? educatorDetails
																	? educatorDetails.email
																	: studentDetails && studentDetails.email
																: details.email
														}
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, email: e.target.value };
															})
														}
														readOnly={!edit}
													/>
												</div>
												{edit && (
													<div style={{ marginTop: "20px" }}>
														<label
															htmlFor="Userimage"
															style={{ fontSize: "18px", color: "#309255" }}
														>
															Change User Image
														</label>
														<input
															type="file"
															id="Userimage"
															className="form-control"
															name="Instructor"
															accept=".jpg,.jpeg,.png"
															style={{ marginTop: "10px" }}
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
															onClick={changeImage}
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
												)}
												<div className="single-form">
													<input
														required
														type="number"
														minLength={10}
														maxLength={10}
														placeholder="Contact Number"
														value={
															!edit
																? educatorDetails
																	? educatorDetails.contact
																	: studentDetails && studentDetails.contact
																: details.contact
														}
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, contact: e.target.value };
															})
														}
														readOnly={!edit}
													/>
												</div>
												<div className="single-form">
													<input
														required
														type="text"
														onFocus={(e) => (e.target.type = "date")}
														placeholder="Date of birth"
														value={
															!edit
																? educatorDetails
																	? educatorDetails.dob
																	: studentDetails && studentDetails.dob
																: details.dob
														}
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, dob: e.target.value };
															})
														}
														readOnly={!edit}
													/>
												</div>
												{!edit ? (
													<div className="single-form">
														<input
															required
															type="text"
															placeholder="Gender"
															value={
																!edit
																	? educatorDetails
																		? educatorDetails.gender
																		: studentDetails && studentDetails.gender
																	: details.gender
															}
															readOnly={true}
														/>
													</div>
												) : (
													<div className="single-form">
														<select
															name="state"
															id="state"
															value={
																!edit
																	? educatorDetails
																		? educatorDetails.gender
																		: studentDetails && studentDetails.gender
																	: details.gender
															}
															style={{
																width: "100%",
																height: "60px",
																padding: "0 25px",
																fontSize: "15px",
																color: "#52565b",
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
												)}
												<div className="single-form">
													<input
														required
														type="text"
														placeholder="Address"
														value={
															!edit
																? educatorDetails
																	? educatorDetails.address
																	: studentDetails && studentDetails.address
																: details.address
														}
														onChange={(e) =>
															setDetails((prev) => {
																return { ...prev, address: e.target.value };
															})
														}
														readOnly={!edit}
													/>
												</div>
												{!edit ? (
													<div className="single-form">
														<input
															required
															type="text"
															placeholder="State"
															value={
																!edit
																	? educatorDetails
																		? educatorDetails.state
																		: studentDetails && studentDetails.state
																	: details.state
															}
															readOnly={true}
														/>
													</div>
												) : (
													<div className="single-form">
														<select
															name="state"
															id="state"
															value={
																!edit
																	? educatorDetails
																		? educatorDetails.state
																		: studentDetails && studentDetails.state
																	: details.state
															}
															style={{
																width: "100%",
																height: "60px",
																padding: "0 25px",
																fontSize: "15px",
																color: "#52565b",
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
												)}

												<div className="single-form">
													<input
														required
														type="text"
														placeholder="City"
														value={
															!edit
																? educatorDetails
																	? educatorDetails.city
																	: studentDetails && studentDetails.city
																: details.city
														}
														onChange={(e) =>
															setDetails((prev) => {
																return {
																	...prev,
																	city: e.target.value,
																};
															})
														}
														readOnly={!edit}
													/>
												</div>
												{!edit && (
													<div className="single-form">
														<button
															className="btn btn-primary btn-hover-dark w-100"
															onClick={() => setEdit(true)}
														>
															Edit Your Details
														</button>
													</div>
												)}
												{edit && (
													<div className="single-form">
														<button
															className="btn btn-primary btn-hover-dark w-100"
															onClick={() => handleSubmit(true)}
														>
															Save Details
														</button>
														<button
															className="btn btn-secondary btn-outline w-100 mt-4"
															onClick={() => handleCancel(true)}
														>
															Cancel
														</button>
													</div>
												)}
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
				</div>
			)}
		</>
	);
}

export default Profile;
