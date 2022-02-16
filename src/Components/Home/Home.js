import React, { useEffect, useState } from "react";

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

	return (
		<div className="main-wrapper">
			{/* <!-- Header Section Start --> */}
			<div className="header-section">
				{/* <!-- Header Top Start --> */}
				<div className="header-top d-none d-lg-block">
					<div className="container">
						{/* <!-- Header Top Wrapper Start --> */}

						{/* <!-- Header Top Wrapper End --> */}
					</div>
				</div>

				<div id="nav-header" className={`header-main ${scrollState&&"sticky"}`}>
					<div className="container">
						{/* <!-- Header Main Start --> */}
						<div className="header-main-wrapper">
							{/* <!-- Header Logo Start --> */}
							<div className="header-logo">
								<a href="index.html">
									<img src="assets/images/logo.png" alt="Logo" />
								</a>
							</div>
							{/* <!-- Header Logo End --> */}

							{/* <!-- Header Menu Start --> */}
							<div className="header-menu d-none d-lg-block">
								<ul className="nav-menu">
									<li>
										<a href="index.html">Home</a>
									</li>
									<li>
										<a href="/">All Course</a>
										<ul className="sub-menu">
											<li>
												<a href="courses.html">Courses</a>
											</li>
											<li>
												<a href="courses-details.html">Courses Details</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/">Pages </a>
										<ul className="sub-menu">
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
												<a href="overview.html">
													Instructor Dashboard (Performance)
												</a>
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
												<a href="traffic-conversion.html">
													Traffic & conversion
												</a>
											</li>
											<li>
												<a href="messages.html">Messages</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/">Blog</a>
										<ul className="sub-menu">
											<li>
												<a href="/">Blog</a>
												<ul className="sub-menu">
													<li>
														<a href="blog-grid.html">Blog</a>
													</li>
													<li>
														<a href="blog-left-sidebar.html">
															Blog Left Sidebar
														</a>
													</li>
													<li>
														<a href="blog-right-sidebar.html">
															Blog Right Sidebar
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="/">Blog Details</a>
												<ul className="sub-menu">
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
							{/* <!-- Header Menu End --> */}

							{/* <!-- Header Sing In & Up Start --> */}
							<div className="header-sign-in-up d-none d-lg-block">
								<ul>
									<li>
										<a className="sign-in" href="login.html">
											Sign In
										</a>
									</li>
									<li>
										<a className="sign-up" href="register.html">
											Sign Up
										</a>
									</li>
								</ul>
							</div>
							{/* <!-- Header Sing In & Up End --> */}

							{/* <!-- Header Mobile Toggle Start --> */}
							<div className="header-toggle d-lg-none">
								<a className="menu-toggle" href="/">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
							{/* <!-- Header Mobile Toggle End --> */}
						</div>
						{/* <!-- Header Main End --> */}
					</div>
				</div>
				{/* <!-- Header Main End --> */}
			</div>
			{/* <!-- Header Section End --> */}

			{/* <!-- Mobile Menu Start --> */}
			<div className="mobile-menu">
				{/* <!-- Menu Close Start --> */}
				<a className="menu-close" href="/">
					<i className="icofont-close-line"></i>
				</a>
				{/* <!-- Menu Close End --> */}

				{/* <!-- Mobile Top Medal Start --> */}
				<div className="mobile-top">
					<p>
						<i className="flaticon-phone-call"></i>{" "}
						<a href="tel:9702621413">(970) 262-1413</a>
					</p>
					<p>
						<i className="flaticon-email"></i>{" "}
						<a href="mailto:address@gmail.com">address@gmail.com</a>
					</p>
				</div>
				{/* <!-- Mobile Top Medal End --> */}

				{/* <!-- Mobile Sing In & Up Start --> */}
				<div className="mobile-sign-in-up">
					<ul>
						<li>
							<a className="sign-in" href="login.html">
								Sign In
							</a>
						</li>
						<li>
							<a className="sign-up" href="register.html">
								Sign Up
							</a>
						</li>
					</ul>
				</div>
				{/* <!-- Mobile Sing In & Up End --> */}

				{/* <!-- Mobile Menu Start --> */}
				<div className="mobile-menu-items">
					<ul className="nav-menu">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a href="/">All Course</a>
							<ul className="sub-menu">
								<li>
									<a href="courses.html">Courses</a>
								</li>
								<li>
									<a href="courses-details.html">Courses Details</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="/">Pages </a>
							<ul className="sub-menu">
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
									<a href="traffic-conversion.html">Traffic & conversion</a>
								</li>
								<li>
									<a href="messages.html">Messages</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="/">Blog</a>
							<ul className="sub-menu">
								<li>
									<a href="/">Blog</a>
									<ul className="sub-menu">
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
								<li>
									<a href="/">Blog Details</a>
									<ul className="sub-menu">
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
				{/* <!-- Mobile Menu End --> */}

				{/* <!-- Mobile Menu End --> */}
				<div className="mobile-social">
					<ul className="social">
						<li>
							<a href="/">
								<i className="flaticon-facebook"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i className="flaticon-twitter"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i className="flaticon-skype"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i className="flaticon-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
				{/* <!-- Mobile Menu End --> */}
			</div>
			{/* <!-- Mobile Menu End --> */}

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
						<a className="btn btn-primary btn-hover-dark" href="/">
							Start A Course
						</a>
					</div>
					{/* <!-- Slider Content End --> */}
				</div>

				{/* <!-- Slider Courses Box Start --> */}
				<div className="slider-courses-box">
					<img
						className="shape-1 animation-left"
						src="assets/images/shape/shape-5.png"
						alt="Shape"
					/>

					<div className="box-content">
						<div className="box-wrapper">
							<i className="flaticon-open-book"></i>
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
								<button>
									<i className="flaticon-magnifying-glass"></i>
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
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs2">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs3">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs4">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs5">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs6">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
						<div className="tab-pane fade" id="tabs7">
							{/* <!-- All Courses Wrapper Start --> */}
							<div className="courses-wrapper">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-04.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-01.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Data Science and Machine Learning with Python -
														Hands On!
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$385.00</span>
														<span className="old-parice">$440.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-02.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-02.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Pamela Foster
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Create Amazing Color Schemes for Your UX Design
														Projects
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$420.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-06.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-03.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Rose Simmons
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Science</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Culture & Leadership: Strategies for a Successful
														Business
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$295.00</span>
														<span className="old-parice">$340.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-05.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-04.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Finance</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Finance Series: Learn to Budget and Calculate your
														Net Worth.
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">Free</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-01.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-05.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Marketing</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Build Brand Into Marketing: Tackling the New
														Marketing Landscape
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$136.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
									<div className="col-lg-4 col-md-6">
										{/* <!-- Single Courses Start --> */}
										<div className="single-courses">
											<div className="courses-images">
												<a href="courses-details.html">
													<img
														src="assets/images/courses/courses-03.jpg"
														alt="Courses"
													/>
												</a>
											</div>
											<div className="courses-content">
												<div className="courses-author">
													<div className="author">
														<div className="author-thumb">
															<a href="/">
																<img
																	src="assets/images/author/author-06.jpg"
																	alt="Author"
																/>
															</a>
														</div>
														<div className="author-name">
															<a className="name" href="/">
																Jason Williams
															</a>
														</div>
													</div>
													<div className="tag">
														<a href="/">Design</a>
													</div>
												</div>

												<h4 className="title">
													<a href="courses-details.html">
														Graphic Design: Illustrating Badges and Icons with
														Geometric Shapes
													</a>
												</h4>
												<div className="courses-meta">
													<span>
														{" "}
														<i className="icofont-clock-time"></i> 08 hr 15 mins
													</span>
													<span>
														{" "}
														<i className="icofont-read-book"></i> 29 Lectures{" "}
													</span>
												</div>
												<div className="courses-price-review">
													<div className="courses-price">
														<span className="sale-parice">$237.00</span>
													</div>
													<div className="courses-review">
														<span className="rating-count">4.9</span>
														<span className="rating-star">
															<span className="rating-bar"></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Single Courses End --> */}
									</div>
								</div>
							</div>
							{/* <!-- All Courses Wrapper End --> */}
						</div>
					</div>
					{/* <!-- All Courses tab content End --> */}

					{/* <!-- All Courses BUtton Start --> */}
					<div className="courses-btn text-center">
						<a
							href="courses.html"
							className="btn btn-secondary btn-hover-primary"
						>
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
									<a
										className="btn btn-primary btn-hover-dark"
										href="contact.html"
									>
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
								<i className="flaticon-transparency"></i>
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
								<i className="flaticon-forms"></i>
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
								<i className="flaticon-badge"></i>
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

			{/* <!-- Download App Start --> */}
			<div className="section section-padding download-section">
				<div className="app-shape-1"></div>
				<div className="app-shape-2"></div>
				<div className="app-shape-3"></div>
				<div className="app-shape-4"></div>

				<div className="container">
					{/* <!-- Download App Wrapper Start --> */}
					<div className="download-app-wrapper mt-n6">
						{/* <!-- Section Title Start --> */}
						<div className="section-title section-title-white">
							<h5 className="sub-title">Ready to start?</h5>
							<h2 className="main-title">
								Download our mobile app. for easy to start your course.
							</h2>
						</div>
						{/* <!-- Section Title End --> */}

						<img
							className="shape-1 animation-right"
							src="assets/images/shape/shape-14.png"
							alt="Shape"
						/>

						{/* <!-- Download App Button End --> */}
						<div className="download-app-btn">
							<ul className="app-btn">
								<li>
									<a href="/">
										<img
											src="assets/images/google-play.png"
											alt="Google Play"
										/>
									</a>
								</li>
								<li>
									<a href="/">
										<img src="assets/images/app-store.png" alt="App Store" />
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- Download App Button End --> */}
					</div>
					{/* <!-- Download App Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Download App End --> */}

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
										<a href="blog-details-left-sidebar.html">
											<img src="assets/images/blog/blog-01.jpg" alt="Blog" />
										</a>
									</div>
									<div className="blog-content">
										<div className="blog-author">
											<div className="author">
												<div className="author-thumb">
													<a href="/">
														<img
															src="assets/images/author/author-01.jpg"
															alt="Author"
														/>
													</a>
												</div>
												<div className="author-name">
													<a className="name" href="/">
														Jason Williams
													</a>
												</div>
											</div>
											<div className="tag">
												<a href="/">Science</a>
											</div>
										</div>

										<h4 className="title">
											<a href="blog-details-left-sidebar.html">
												Data Science and Machine Learning with Python - Hands
												On!
											</a>
										</h4>

										<div className="blog-meta">
											<span>
												{" "}
												<i className="icofont-calendar"></i> 21 March, 2021
											</span>
											<span>
												{" "}
												<i className="icofont-heart"></i> 2,568+{" "}
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
										<a href="blog-details-left-sidebar.html">
											<img src="assets/images/blog/blog-02.jpg" alt="Blog" />
										</a>
									</div>
									<div className="blog-content">
										<div className="blog-author">
											<div className="author">
												<div className="author-thumb">
													<a href="/">
														<img
															src="assets/images/author/author-02.jpg"
															alt="Author"
														/>
													</a>
												</div>
												<div className="author-name">
													<a className="name" href="/">
														Pamela Foster
													</a>
												</div>
											</div>
											<div className="tag">
												<a href="/">UX Design</a>
											</div>
										</div>

										<h4 className="title">
											<a href="blog-details-left-sidebar.html">
												Create Amazing Color Schemes for Your UX Design Projects
											</a>
										</h4>

										<div className="blog-meta">
											<span>
												{" "}
												<i className="icofont-calendar"></i> 21 March, 2021
											</span>
											<span>
												{" "}
												<i className="icofont-heart"></i> 2,568+{" "}
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
										<a href="blog-details-left-sidebar.html">
											<img src="assets/images/blog/blog-03.jpg" alt="Blog" />
										</a>
									</div>
									<div className="blog-content">
										<div className="blog-author">
											<div className="author">
												<div className="author-thumb">
													<a href="/">
														<img
															src="assets/images/author/author-03.jpg"
															alt="Author"
														/>
													</a>
												</div>
												<div className="author-name">
													<a className="name" href="/">
														Patricia Collins
													</a>
												</div>
											</div>
											<div className="tag">
												<a href="/">Business</a>
											</div>
										</div>

										<h4 className="title">
											<a href="blog-details-left-sidebar.html">
												Culture & Leadership: Strategies for a Successful
												Business
											</a>
										</h4>

										<div className="blog-meta">
											<span>
												{" "}
												<i className="icofont-calendar"></i> 21 March, 2021
											</span>
											<span>
												{" "}
												<i className="icofont-heart"></i> 2,568+{" "}
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
						</div>
					</div>
					{/* <!-- Blog Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Blog End --> */}

			{/* <!-- Footer Start  --> */}
			<div className="section footer-section">
				{/* <!-- Footer Widget Section Start --> */}
				<div className="footer-widget-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
								{/* <!-- Footer Widget Start --> */}
								<div className="footer-widget">
									<div className="widget-logo">
										<a href="/">
											<img src="assets/images/logo.png" alt="Logo" />
										</a>
									</div>

									<div className="widget-address">
										<h4 className="footer-widget-title">Caribbean Ct</h4>
										<p>Haymarket, Virginia (VA).</p>
									</div>

									<ul className="widget-info">
										<li>
											<p>
												{" "}
												<i className="flaticon-email"></i>{" "}
												<a href="mailto:address@gmail.com">address@gmail.com</a>{" "}
											</p>
										</li>
										<li>
											<p>
												{" "}
												<i className="flaticon-phone-call"></i>{" "}
												<a href="tel:9702621413">(970) 262-1413</a>{" "}
											</p>
										</li>
									</ul>

									<ul className="widget-social">
										<li>
											<a href="/">
												<i className="flaticon-facebook"></i>
											</a>
										</li>
										<li>
											<a href="/">
												<i className="flaticon-twitter"></i>
											</a>
										</li>
										<li>
											<a href="/">
												<i className="flaticon-skype"></i>
											</a>
										</li>
										<li>
											<a href="/">
												<i className="flaticon-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- Footer Widget End --> */}
							</div>
							<div className="col-lg-6 order-md-3 order-lg-2">
								{/* <!-- Footer Widget Link Start --> */}
								<div className="footer-widget-link">
									{/* <!-- Footer Widget Start --> */}
									<div className="footer-widget">
										<h4 className="footer-widget-title">Category</h4>

										<ul className="widget-link">
											<li>
												<a href="/">Creative Writing</a>
											</li>
											<li>
												<a href="/">Film & Video</a>
											</li>
											<li>
												<a href="/">Graphic Design</a>
											</li>
											<li>
												<a href="/">UI/UX Design</a>
											</li>
											<li>
												<a href="/">Business Analytics</a>
											</li>
											<li>
												<a href="/">Marketing</a>
											</li>
										</ul>
									</div>
									{/* <!-- Footer Widget End --> */}

									{/* <!-- Footer Widget Start --> */}
									<div className="footer-widget">
										<h4 className="footer-widget-title">Quick Links</h4>

										<ul className="widget-link">
											<li>
												<a href="/">Privacy Policy</a>
											</li>
											<li>
												<a href="/">Discussion</a>
											</li>
											<li>
												<a href="/">Terms & Conditions</a>
											</li>
											<li>
												<a href="/">Customer Support</a>
											</li>
											<li>
												<a href="/">Course FAQ’s</a>
											</li>
										</ul>
									</div>
									{/* <!-- Footer Widget End --> */}
								</div>
								{/* <!-- Footer Widget Link End --> */}
							</div>
							<div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
								{/* <!-- Footer Widget Start --> */}
								<div className="footer-widget">
									<h4 className="footer-widget-title">Subscribe</h4>

									<div className="widget-subscribe">
										<p>
											Lorem Ipsum has been them an industry printer took a
											galley make book.
										</p>

										<div className="widget-form">
											<form action="#">
												<input type="text" placeholder="Email here" />
												<button className="btn btn-primary btn-hover-dark">
													Subscribe Now
												</button>
											</form>
										</div>
									</div>
								</div>
								{/* <!-- Footer Widget End --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
