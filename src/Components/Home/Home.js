import React, { useEffect, useState } from "react";
import { FiBookOpen, FiClock, FiVideo, FiCalendar } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Navbar from "../Navbar";
import Download from "../Download";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";
import {
	FaBookmark,
	FaCertificate,
	FaQuoteRight,
	FaSearch,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
	const [scrollState, setScrollState] = useState(false);

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
	const data = [
		{
			imgUrl: "assets/images/courses/courses-01.jpg",
			instructImgUrl: "assets/images/author/author-02.jpg",
			instructName: "Jason Williams",
			type: "Science",
			courseName: "Data Science and Machine Learning with Python -Hands On!",
			duration: " 08 hr 15 mins",
			lectures: "29",
			price: 385.0,
			rating: 4.9,
		},
		{
			imgUrl: "assets/images/courses/courses-02.jpg",
			instructImgUrl: "assets/images/author/author-01.jpg",
			instructName: "Pamela Foster",
			type: "Science",
			courseName: "Create Amazing Color Schemes for Your UX Design Projects",
			duration: " 08 hr 15 mins",
			lectures: "29",
			price: 420.0,
			rating: 4.9,
		},
		{
			imgUrl: "assets/images/courses/courses-03.jpg",
			instructImgUrl: "assets/images/author/author-03.jpg",
			instructName: "Rose Simmons",
			type: "Science",
			courseName: "Culture & Leadership: Strategies for a Successful Business",
			duration: " 08 hr 15 mins",
			lectures: "29",
			price: 295.0,
			rating: 4.9,
		},
		{
			imgUrl: "assets/images/courses/courses-04.jpg",
			instructImgUrl: "assets/images/author/author-04.jpg",
			instructName: "Angelia Williams",
			type: "Finance",
			courseName:
				"Finance Series: Learn to Budget and Calculate your Net Worth.",
			duration: " 08 hr 15 mins",
			lectures: "29",
			price: 295.0,
			rating: 4.9,
		},
		{
			imgUrl: "assets/images/courses/courses-05.jpg",
			instructImgUrl: "assets/images/author/author-02.jpg",
			instructName: "Jason Williams",
			type: "Marketing",
			courseName:
				"Build Brand Into Marketing: Tackling the New Marketing Landscape",
			duration: " 08 hr 15 mins",
			lectures: "29",
			price: 136.0,
			rating: 4.9,
		},
		{
			imgUrl: "assets/images/courses/courses-06.jpg",
			instructImgUrl: "assets/images/author/author-01.jpg",
			instructName: "Pamela Foster",
			type: "Design",
			courseName:
				"Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
			duration: " 08 hr 15 mins",
			lectures: "29",
			price: 237.0,
			rating: 4.9,
		},
	];

	return (
		<div className="main-wrapper">
			{/* <!-- Header Section Start --> */}
			<Navbar scrollState={scrollState} />
			{/* <!-- Overlay Start --> */}
			<div className="overlay"></div>
			{/* <!-- Overlay End --> */}

			{/* <!-- Slider Start --> */}
			<div className="section slider-section">
				<div className="container">
					{/* <!-- Slider Content Start --> */}
					<div className="slider-content">
						<h4 className="sub-title">Start your favourite course</h4>
						<h2 className="main-title">
							Now learning from anywhere, and build your{" "}
							<span>bright career.</span>
						</h2>
						<p>
							It has survived not only five centuries but also the leap into
							electronic typesetting.
						</p>
						<a className="btn btn-primary btn-hover-dark" href="/courses">
							Start A Course
						</a>
					</div>
					{/* <!-- Slider Content End --> */}
				</div>

				{/* <!-- Slider Courses Box Start --> */}
				<div className="slider-courses-box">
					<img
						className="shape-1"
						src="assets/images/shape/shape-5.png"
						alt="Shape"
					/>

					<div className="box-content">
						<div className="box-wrapper">
							<FiBookOpen color="#fff" size={32} />
							<span className="count">1,235</span>
							<p>courses</p>
						</div>
					</div>

					<img
						className="shape-2"
						src="assets/images/shape/shape-6.png"
						alt="Shape"
					/>
				</div>

				<div className="slider-images">
					<div className="images">
						<img src="assets/images/slider/slider-1.png" alt="Slider" />
					</div>
				</div>
				{/* <!-- Slider Images End --> */}

				{/* <!-- Slider Video Start --> */}
				<div className="slider-video">
					<img
						className="shape-1"
						src="assets/images/shape/shape-9.png"
						alt="Shape"
					/>
				</div>
				{/* <!-- Slider Video End --> */}
			</div>
			{/* <!-- Slider End --> */}

			{/* <!-- All Courses Start --> */}
			<div className="section section-padding-02">
				<div className="container">
					{/* <!-- All Courses Top Start --> */}
					<div className="courses-top">
						{/* <!-- Section Title Start --> */}
						<div className="section-title shape-01">
							<h2 className="main-title">
								All <span>Courses</span> of Edule
							</h2>
						</div>
						{/* <!-- Section Title End --> */}

						{/* <!-- Courses Search Start --> */}
						<div className="courses-search">
							<form action="#">
								<input type="text" placeholder="Search your course" />
								<button className="blog-meta">
									<i>
										<FaSearch />
									</i>
								</button>
							</form>
						</div>
						{/* <!-- Courses Search End --> */}
					</div>

					{/* <!-- All Courses Tabs Menu End --> */}

					{/* <!-- All Courses tab content Start --> */}
					<div className="tab-content courses-tab-content">
						<div className="tab-pane fade show active" id="tabs1">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									{data.map((item, index) => {
										return (
											<div className="col-lg-4 col-md-6">
												{/* <!-- Single Courses Start --> */}
												<div className="single-courses">
													<div className="courses-images">
														<a href="course-details">
															<img src={item.imgUrl} alt="Courses" />
														</a>
													</div>
													<div className="courses-content">
														<div className="courses-author">
															<div className="author">
																<div className="author-thumb">
																	<a href="/course-details">
																		<img
																			src={item.instructImgUrl}
																			alt="Author"
																		/>
																	</a>
																</div>
																<div className="author-name">
																	<a className="name" href="/course-details">
																		{item.instructName}
																	</a>
																</div>
															</div>
															<div className="tag">
																<a href="/course-details">{item.type}</a>
															</div>
														</div>

														<h4 className="title">
															<a href="/course-details">{item.courseName}</a>
														</h4>
														<div className="courses-meta">
															<span className="time">
																{" "}
																<FiClock color="#309255" size={22} />{" "}
																{item.duration}
															</span>
															<span className="time">
																{" "}
																<FiVideo color="#309255" size={22} />{" "}
																{item.lectures}
																Lectures{" "}
															</span>
														</div>
														<div className="courses-price-review">
															<div className="courses-price">
																<span className="sale-parice">
																	${item.price}
																</span>
																{/* <span className="old-parice">$440.00</span> */}
															</div>
															<div className="courses-review">
																<span className="rating-count">
																	{item.rating}
																</span>
																<span className="rating-star">
																	<span className="rating-bar"></span>
																</span>
															</div>
														</div>
													</div>
												</div>
												{/* <!-- Single Courses End --> */}
											</div>
										);
									})}
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs2">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									{data.map((item, index) => {
										return (
											<div className="col-lg-4 col-md-6">
												{/* <!-- Single Courses Start --> */}
												<div className="single-courses">
													<div className="courses-images">
														<a href="course-details">
															<img src={item.imgUrl} alt="Courses" />
														</a>
													</div>
													<div className="courses-content">
														<div className="courses-author">
															<div className="author">
																<div className="author-thumb">
																	<a href="/course-details">
																		<img
																			src={item.instructImgUrl}
																			alt="Author"
																		/>
																	</a>
																</div>
																<div className="author-name">
																	<a className="name" href="/course-details">
																		{item.instructName}
																	</a>
																</div>
															</div>
															<div className="tag">
																<a href="/course-details">{item.type}</a>
															</div>
														</div>

														<h4 className="title">
															<a href="/course-details">{item.courseName}</a>
														</h4>
														<div className="courses-meta">
															<span className="time">
																{" "}
																<FiClock color="#309255" size={22} />{" "}
																{item.duration}
															</span>
															<span className="time">
																{" "}
																<FiVideo color="#309255" size={22} />{" "}
																{item.lectures}
																Lectures{" "}
															</span>
														</div>
														<div className="courses-price-review">
															<div className="courses-price">
																<span className="sale-parice">
																	${item.price}
																</span>
																{/* <span className="old-parice">$440.00</span> */}
															</div>
															<div className="courses-review">
																<span className="rating-count">
																	{item.rating}
																</span>
																<span className="rating-star">
																	<span className="rating-bar"></span>
																</span>
															</div>
														</div>
													</div>
												</div>
												{/* <!-- Single Courses End --> */}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<div className="courses-btn text-center">
						<a href="/courses" className="btn btn-secondary btn-hover-primary">
							Other Course
						</a>
					</div>
					{/* <!-- All Courses BUtton End --> */}
				</div>
			</div>
			{/* <!-- All Courses End --> */}

			{/* <!-- Call to Action Start --> */}
			<div className="section section-padding-02">
				<div className="container">
					{/* <!-- Call to Action Wrapper Start --> */}
					<div className="call-to-action-wrapper">
						<img
							className="cat-shape-02"
							src="assets/images/shape/shape-13.svg"
							alt="Shape"
						/>
						<div className="row align-items-center">
							<div className="col-md-6">
								{/* <!-- Section Title Start --> */}
								<div className="section-title shape-02">
									<h5 className="sub-title">Become A Instructor</h5>
									<h2 className="main-title">
										You can join with Edule as <span>a instructor?</span>
									</h2>
								</div>
								{/* <!-- Section Title End --> */}
							</div>
							<div className="col-md-6">
								<div className="call-to-action-btn">
									<a className="btn btn-primary btn-hover-dark" href="/contact">
										Drop Information
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Call to Action Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Call to Action End --> */}

			{/* <!-- How It Work End --> */}
			<div className="section section-padding mt-n1">
				<div className="container">
					{/* <!-- Section Title Start --> */}
					<div className="section-title shape-03 text-center">
						<h5 className="sub-title">Over 1,235+ Course</h5>
						<h2 className="main-title">
							How It <span> Work?</span>
						</h2>
					</div>
					{/* <!-- Section Title End --> */}

					{/* <!-- How it Work Wrapper Start --> */}
					<div className="how-it-work-wrapper">
						{/* <!-- Single Work Start --> */}
						<div className="single-work">
							<img
								className="shape-1"
								src="assets/images/shape/shape-15.png"
								alt="Shape"
							/>

							<div className="work-icon">
								<FaSearch size={26} className="icon" />
							</div>
							<div className="work-content">
								<h3 className="title">Find Your Course</h3>
								<p>
									It has survived not only centurie also leap into electronic.
								</p>
							</div>
						</div>
						{/* <!-- Single Work End --> */}

						{/* <!-- Single Work Start --> */}
						<div className="work-arrow">
							<img
								className="arrow"
								src="assets/images/shape/shape-17.png"
								alt="Shape"
							/>
						</div>
						{/* <!-- Single Work End --> */}

						{/* <!-- Single Work Start --> */}
						<div className="single-work">
							<img
								className="shape-2"
								src="assets/images/shape/shape-15.png"
								alt="Shape"
							/>

							<div className="work-icon">
								<FaBookmark size={24} className="icon" />
							</div>
							<div className="work-content">
								<h3 className="title">Book A Seat</h3>
								<p>
									It has survived not only centurie also leap into electronic.
								</p>
							</div>
						</div>
						{/* <!-- Single Work End --> */}

						{/* <!-- Single Work Start --> */}
						<div className="work-arrow">
							<img
								className="arrow"
								src="assets/images/shape/shape-17.png"
								alt="Shape"
							/>
						</div>
						{/* <!-- Single Work End --> */}

						{/* <!-- Single Work Start --> */}
						<div className="single-work">
							<img
								className="shape-3"
								src="assets/images/shape/shape-16.png"
								alt="Shape"
							/>

							<div className="work-icon">
								<FaCertificate size={26} className="icon" />
							</div>
							<div className="work-content">
								<h3 className="title">Get Certificate</h3>
								<p>
									It has survived not only centurie also leap into electronic.
								</p>
							</div>
						</div>
						{/* <!-- Single Work End --> */}
					</div>
				</div>
			</div>
			{/* <!-- How It Work End --> */}

			<Download />

			{/* <!-- Testimonial End --> */}
			<div className="section section-padding-02 mt-n1">
				<div className="container">
					{/* <!-- Section Title Start --> */}
					<div className="section-title shape-03 text-center">
						<h5 className="sub-title">Student Testimonial</h5>
						<h2 className="main-title">
							Feedback From <span> Student</span>
						</h2>
					</div>
					{/* <!-- Section Title End --> */}

					{/* <!-- Testimonial Wrapper End --> */}
					<div className="testimonial-wrapper testimonial-active">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								{/* <!-- Single Testimonial Start --> */}
								<div className="single-testimonial swiper-slide">
									<div className="testimonial-author">
										<div className="author-thumb">
											<img
												src="assets/images/author/author-06.jpg"
												alt="Author"
											/>

											<i>
												<FaQuoteRight />
											</i>
										</div>

										<span className="rating-star">
											<span className="rating-bar"></span>
										</span>
									</div>
									<div className="testimonial-content">
										<p>
											Lorem Ipsum has been the industry's standard dummy text
											since the 1500s, when an unknown printer took a galley of
											type and scrambled it to make type specimen book has
											survived not five centuries but also the leap into
											electronic.
										</p>
										<h4 className="name">Sara Alexander</h4>
										<span className="designation">Product Designer, USA</span>
									</div>
								</div>
								{/* <!-- Single Testimonial End --> */}

								{/* <!-- Single Testimonial Start --> */}
								<div className="single-testimonial swiper-slide">
									<div className="testimonial-author">
										<div className="author-thumb">
											<img
												src="assets/images/author/author-07.jpg"
												alt="Author"
											/>

											<i className="icofont-quote-left"></i>
										</div>

										<span className="rating-star">
											<span className="rating-bar"></span>
										</span>
									</div>
									<div className="testimonial-content">
										<p>
											Lorem Ipsum has been the industry's standard dummy text
											since the 1500s, when an unknown printer took a galley of
											type and scrambled it to make type specimen book has
											survived not five centuries but also the leap into
											electronic.
										</p>
										<h4 className="name">Melissa Roberts</h4>
										<span className="designation">Product Designer, USA</span>
									</div>
								</div>
								{/* <!-- Single Testimonial End --> */}

								{/* <!-- Single Testimonial Start --> */}
								<div className="single-testimonial swiper-slide">
									<div className="testimonial-author">
										<div className="author-thumb">
											<img
												src="assets/images/author/author-03.jpg"
												alt="Author"
											/>

											<i className="icofont-quote-left"></i>
										</div>

										<span className="rating-star">
											<span className="rating-bar"></span>
										</span>
									</div>
									<div className="testimonial-content">
										<p>
											Lorem Ipsum has been the industry's standard dummy text
											since the 1500s, when an unknown printer took a galley of
											type and scrambled it to make type specimen book has
											survived not five centuries but also the leap into
											electronic.
										</p>
										<h4 className="name">Sara Alexander</h4>
										<span className="designation">Product Designer, USA</span>
									</div>
								</div>
								{/* <!-- Single Testimonial End --> */}
							</div>

							{/* <!-- Add Pagination --> */}
							<div className="swiper-pagination"></div>
						</div>
					</div>
					{/* <!-- Testimonial Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Testimonial End --> */}

			{/* <!-- Brand Logo Start --> */}

			{/* <!-- Brand Logo End --> */}

			{/* <!-- Blog Start --> */}
			<div className="section section-padding mt-n1">
				<div className="container">
					{/* <!-- Section Title Start --> */}
					<div className="section-title shape-03 text-center">
						<h5 className="sub-title">Latest News</h5>
						<h2 className="main-title">
							Educational Tips & <span> Tricks</span>
						</h2>
					</div>
					{/* <!-- Section Title End --> */}

					{/* <!-- Blog Wrapper Start --> */}
					<div className="blog-wrapper">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								{/* <!-- Single Blog Start --> */}
								<div className="single-blog">
									<div className="blog-image">
										<a href="blog-detail">
											<img src="assets/images/blog/blog-01.jpg" alt="Blog" />
										</a>
									</div>
									<div className="blog-content">
										<div className="blog-author">
											<div className="author">
												<div className="author-thumb">
													<a href="blog-detail">
														<img
															src="assets/images/author/author-01.jpg"
															alt="Author"
														/>
													</a>
												</div>
												<div className="author-name">
													<a className="name" href="blog-detail">
														Jason Williams
													</a>
												</div>
											</div>
											<div className="tag">
												<a href="blog-detail">Science</a>
											</div>
										</div>

										<h4 className="title">
											<a href="blog-detail">
												Data Science and Machine Learning with Python - Hands
												On!
											</a>
										</h4>
										<div className="blog-meta">
											<span>
												<i>
													<FiCalendar />
												</i>{" "}
												21 March, 2021
											</span>
											<span>
												<i>
													<AiFillHeart />
												</i>{" "}
												2,568+{" "}
											</span>
										</div>
										<a
											href="blog-details-left-sidebar.html"
											className="btn btn-secondary btn-hover-primary"
										>
											Read More
										</a>
									</div>
								</div>
								{/* <!-- Single Blog End --> */}
							</div>
							<div className="col-lg-4 col-md-6">
								{/* <!-- Single Blog Start --> */}
								<div className="single-blog">
									<div className="blog-image">
										<a href="blog-detail">
											<img src="assets/images/blog/blog-02.jpg" alt="Blog" />
										</a>
									</div>
									<div className="blog-content">
										<div className="blog-author">
											<div className="author">
												<div className="author-thumb">
													<a href="blog-detail">
														<img
															src="assets/images/author/author-02.jpg"
															alt="Author"
														/>
													</a>
												</div>
												<div className="author-name">
													<a className="name" href="blog-detail">
														Pamela Foster
													</a>
												</div>
											</div>
											<div className="tag">
												<a href="blog-detail">UX Design</a>
											</div>
										</div>

										<h4 className="title">
											<a href="blog-detail">
												Create Amazing Color Schemes for Your UX Design Projects
											</a>
										</h4>
										<div className="blog-meta">
											<span>
												<i>
													<FiCalendar />
												</i>{" "}
												21 March, 2021
											</span>
											<span>
												<i>
													<AiFillHeart />
												</i>{" "}
												2,568+{" "}
											</span>
										</div>

										<a
											href="blog-detail"
											className="btn btn-secondary btn-hover-primary"
										>
											Read More
										</a>
									</div>
								</div>
								{/* <!-- Single Blog End --> */}
							</div>
							<div className="col-lg-4 col-md-6">
								{/* <!-- Single Blog Start --> */}
								<div className="single-blog">
									<div className="blog-image">
										<a href="blog-detail">
											<img src="assets/images/blog/blog-03.jpg" alt="Blog" />
										</a>
									</div>
									<div className="blog-content">
										<div className="blog-author">
											<div className="author">
												<div className="author-thumb">
													<a href="blog-detail">
														<img
															src="assets/images/author/author-03.jpg"
															alt="Author"
														/>
													</a>
												</div>
												<div className="author-name">
													<a className="name" href="blog-detail">
														Patricia Collins
													</a>
												</div>
											</div>
											<div className="tag">
												<a href="blog-detail">Business</a>
											</div>
										</div>

										<h4 className="title">
											<a href="blog-detail">
												Culture & Leadership: Strategies for a Successful
												Business
											</a>
										</h4>
										<div className="blog-meta">
											<span>
												<i>
													<FiCalendar />
												</i>{" "}
												21 March, 2021
											</span>
											<span>
												<i>
													<AiFillHeart />
												</i>{" "}
												2,568+{" "}
											</span>
										</div>
										<a
											href="blog-detail"
											className="btn btn-secondary btn-hover-primary"
										>
											Read More
										</a>
									</div>
								</div>
								{/* <!-- Single Blog End --> */}
							</div>
						</div>
					</div>
					{/* <!-- Blog Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Blog End --> */}
			<ScrollButton scrollState={scrollState} />
			<Footer />
			{/* <!-- Footer Start  --> */}
		</div>
	);
};

export default Home;
