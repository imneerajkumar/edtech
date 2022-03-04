import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";
import { FiAward, FiClock, FiVideo } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchLectures } from "../../store/actions/lecturesAction";
import { Link } from "react-router-dom";
import "./ViewConference.css";
import { Avatar } from "@mui/material";

function ViewConference(props) {
	const [scrollState, setScrollState] = useState(false);
	const { lectures } = useSelector((state) => state.getLectureList);
	const dispatch = useDispatch();

	const loadLectures = useCallback(async () => {
		try {
			await dispatch(fetchLectures());
		} catch (err) {
			console.log(err.message);
		}
	}, [dispatch]);

	useEffect(() => {
		loadLectures();
	}, [loadLectures]);

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

	return (
		<div className="main-wrapper">
			<Navbar scrollState={scrollState} />
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
							<li className="active">Classes</li>
						</ul>
						<h2 className="title">
							Live <span>Classes</span>
						</h2>
					</div>
				</div>
				<div className="shape-icon-box">
					<img
						className="icon-shape-1"
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
					className="shape-author"
					src="assets/images/author/author-11.jpg"
					alt="Shape"
				/>
			</div>

			<div className="section section-padding">
				<div className="container">
					<div className="courses-top">
						<div className="section-title shape-01">
							<h2 className="main-title">
								All <span>Live</span> Classes
							</h2>
						</div>
					</div>
					<div className="tab-content courses-tab-content">
						<div className="courses-wrapper">
							<div className="row">
								{lectures?.map((lecture) => (
									<div className="col-lg-4 col-md-6" key={lecture._id}>
										<div className="single-courses">
											<div className="courses-images">
												<img
													src="assets/images/courses/courses-03.jpg"
													alt="Class"
													style={{ width: "100%", borderRadius: "12px" }}
												/>
											</div>
											<div
												className="courses-content"
												style={{ paddingTop: "10px" }}
											>
												<div className="courses-author">
													<div className="author">
														<Avatar
															sx={{
																bgcolor: "#309255",
																width: "50px",
																height: "50px",
																fontSize: "1.2rem",
															}}
														>
															{" "}
															{lecture.instructorName.slice(0, 1)}
														</Avatar>
														<div className="author-name">
															{lecture.instructorName}
														</div>
													</div>
													<div
														className="courses-price-review"
														style={{ padding: "7px 15px" }}
													>
														{lecture.subjectName}
													</div>
												</div>
												<div style={{ marginBottom: "10px" }}>
													{lecture.description}
												</div>
												<div
													className="courses-meta"
													style={{ paddingTop: "0px" }}
												>
													<span className="time">
														{" "}
														<FiClock color="#309255" size={22} />{" "}
														{lecture.duration} H
													</span>
													<span className="time">
														{" "}
														<FiVideo color="#309255" size={22} />{" "}
														{lecture.language}
													</span>
												</div>
												<Link to={`/meet/${lecture.meetingId}?room=${lecture.subjectName}`}>
													<div
														className="join-now"
														style={{ marginTop: "10px" }}
													>
														Join Now
													</div>
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Download />
			<ScrollButton scrollState={scrollState} />
			<Footer />
		</div>
	);
}

export default ViewConference;
